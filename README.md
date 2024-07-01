
# Compass - Desafio 1


Este projeto tem como objetivo desenvolver uma solução para o desafio proposto pela esquipe Compass durante sua bolsa de estudos.

De modo mais específico, o desafio baseia-se em criar um site seguindo os moldes específicados no figma que possa não apenas validar os campos dos formulários, como também armazená-los e exibí-los em outra página.




## Documentação

| Arquivo               | Objetivo                                                     |
| --------------------- | -------------------------------------------------------------|
| index.html            | Página inicial do site   |
| contact_us.html       | Página de contato        |
| error.html| Página de erro para links sem referência         |
| form.html | Página para exibição das resposta do formulário  |
| index.css | Arquivo de estilo para a página inicial do site  |
| contact_us.css        | Arquivo de estilo para a página de contato       |
| error.css | Arquivo de estilo para a página de erro          |
| form.css  | Arquivo de estilo para a página do form.html     |
| images    | Pasta com as imagens reservadas para o projeto   |
| main.js   | Aruivo JS para a validação dos formulários       |




## Funcionalidades

Ojetivo das funções e variáveis desenvolvidas no main.js

| Funções               | Objetivo                                                     |
| --------------------- | -------------------------------------------------------------|
| toContactUs()            | Navegar para a página de contact_us.html                                      |
| toError()       | Navegar para a página de erro.                                           |
| toHome()            | Navegar para a página home.                     |
| toForm()             | Navegar para a página de respostas do formulário.              |
| formHome.addEventListener()             | Adiciona um evento no momento do submit no campo de email na Home e Contact Us              |
| formContact.addEventListener        | Adiciona um evento no submit do formulário da página Contact Us                   |
| validateName()             | Valida o valor no input-name                      |
| validateLastName()             | Valida o valor no input-last-name                 |
| validateEmailSection()               | Valida o valor no email-input |
| validateEmailForm()               | Valida o valor no input-email        |
| validateMessage()              | Valida o valor na textarea input-message           |
| validateInputs()             | Valida os campos preenchidos no forms para habilitar o botão de sumit         |
| addError()              | Adiciona o estilo de campo incorreto no input          |
| delError()              | Remove o estilo de campo incorreto no input                |
| infoSave()               | Salva as informações no local storage                  |

| Variáveis               | Objetivo                                                     |
| --------------------- | -------------------------------------------------------------|
| formHome            | Seleciona os campos de email na Home e Contact Us   |
| formContact      |Seleciona o formulário de Contact Us        |
| formInputs| Seleciona os inputs do form de Contact Us         |
| labelErrorHome | Seleciona a mesagem de campo incorreto no email de Home e Contact Us |
| labelErrorContact | Seleciona as mesagens de campo incorreto no forms de Contact Us |
| contact_us.css        | Arquivo de estilo para a página de contato       |
| regexEmail | Guarda a expressão regular para a validação de emails          |
| regexName  | Guarda a expressão regular para a validação de nome e sobrenome      |
| button    | Seleciona o botão de submit do formulário de Contact Us |



## Aprendizados

Este é o primeiro projeto que desenvolvi sem o auxilio de uma equipe, diferente dos trabalhos da faculdade, e posso dizer que percebi uma grande melhora nas minhas habilidades durante este desafio.

Por ser minha primeira experiência com esse tipo de situação, enfrentei certos problemas durante a ultima semana, os quais posso resumir em 4 principais aspectos: 
    
+ Dificuldade na organização dos arquivos.
+ Criação de nomes convencionais para funções, variáveis, classes e componentes.
+ Manipulação de informações que devem ser compartilhadas entre páginas.
+ Meios de validar os campos sem gerar exceções.

De forma sucinta, consegui esclarecer minhas dificuldades em quase todos os aspectos e certamente meus próximos trabalhos vão ficar ainda melhor implementados, documentados e otimizados.

Por fim, sei que ainda há pontos que preciso melhorar e pretendo desenvolvê-los durante os próximos desafios, mas ainda sim estou satifeito com o resultado.

Grato pela oportunidade de aprendizado!


## Autores

- [@BuenoMVP](https://www.github.com/BuenoMVP)

