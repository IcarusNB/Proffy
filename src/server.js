//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Configurar Nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

//Início e Configuração do Servidor
server
//Receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//Configurar Arquivos Estáticos (CSS, Scripts, Imagens)
.use(express.static("public"))
//Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do Servidor
.listen(5500)