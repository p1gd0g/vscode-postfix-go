# Postfix templates for Golang
[![Version](https://vsmarketplacebadge.apphb.com/version-short/p1gd0g.vscode-postfix-go-int.svg
)](https://marketplace.visualstudio.com/items?itemName=p1gd0g.vscode-postfix-go-int)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/p1gd0g.vscode-postfix-go-int.svg
)](https://marketplace.visualstudio.com/items?itemName=p1gd0g.vscode-postfix-go-int)

Forked from [vscode-postfix-go](https://github.com/yokoe/vscode-postfix-go)

![feature X](images/demo.gif)

Under development. Any suggestions are welcomed.

## Templates

All available templates (`expr` means the expression on which the template is applied):

|       Template | Outcome                            |
| -------------: | ---------------------------------- |
|        **.if** | `if expr`                          |
|      **.else** | `if !expr`                         |
|       **.nil** | `if expr == nil`                   |
|    **.notnil** | `if expr != nil`                   |
|      **.forr** | `for index := range expr`          |
|       **.for** | `for index, element := range expr` |
|    **.return** | `return expr`                      |
|       **.var** | `name := expr`                     |
|     **.const** | `const name type = expr`           |
|    **.append** | `expr = append(expr, element)`     |
|       **.len** | `len(expr)`                        |
|     **.print** | `fmt.Println(expr)`                |
|    **.printf** | `fmt.Printf("%+v\n", expr)`        |
|     **.error** | `errors.New("expr")`               |
|    **.struct** | `type expr struct`                 |
| **.interface** | `type expr interface`              |
|    **.switch** | `switch expr`                      |

## Author

[Sota Yokoe](https://github.com/yokoe) [(twitter)](https://twitter.com/croquette0212)

## Contributors
[Hamza Anis](https://github.com/HamzaAnis)
