# webapp

### Instalação

Para rodar o projeto, siga os passos descritos a seguir. Antes, certifique-se de ter instalado Git e Node/NPM na sua máquina.

1. `git clone https://github.com/barber-man/webapp.git`
1. `cd webapp`
1. `npm install -g aurelia-cli karma-cli gulp && npm install`
1. `au run`

Após o quarto passo, a aplicaço estará rodando em http://localhost:9000

### Desenvolvimento

Para contribuir com o projeto, basta rodar a aplicação solicitando que ela observe as mudanças no código para, automaticamente recompilar os arquivos e recarregar a página no browser:

    au run --watch