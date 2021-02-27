import * as vsc from 'vscode'
import { CompletionItemBuilder } from '../completionItemBuilder'
import { BaseExpressionTemplate } from './baseTemplates'

export class IntTemplate extends BaseExpressionTemplate {
  constructor(private keyword: string) {
    super()
  }

  buildCompletionItem(code: string, position: vsc.Position) {
    const dotIdx = code.lastIndexOf('.', position.character)
    const codeBeforeDot = code.substr(0, dotIdx)
    let lastComponent = getLastComponent(codeBeforeDot)

    let builder = CompletionItemBuilder
      .create(this.keyword, lastComponent)
      .description(this.keyword + '(expr)')
    builder.insertText(this.keyword + '(' + lastComponent + ')')
    builder.deleteTextBeforeCursor(position, lastComponent.length + 1)

    return builder.build()
  }
}

export const build = () => [
  new IntTemplate("int64"),
  new IntTemplate("uint32")
]

function getLastComponent(input: string): string {
  if (input.length === 0) { return '' }
  let lastComponent = ''
  for (let i = 0; i < input.length; i++) {
    let character = input.substr(input.length - i - 1, 1)
    if (!character.match(/[a-zA-Z0-9\(\)\[\]\.]/)) {
      return lastComponent
    }

    lastComponent = character + lastComponent
  }
  return lastComponent
}
