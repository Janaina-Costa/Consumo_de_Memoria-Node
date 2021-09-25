const http = require('http')
const host = 'http://localhost'//ajuda a criar um hiperlink no consolelog que ao clicar com o ctrl abre direto o navegador
const port = 3000
const status = require('./pcRamUsage.js')


//para criar um servidor usa o http.creteServer que exige uma requisição e uma resposta além de um listem
http.createServer((req, res)=>{
    let url = req.url
    if(url ==='/status'){
        res.end(`${JSON.stringify(status)}`)
    }else{
        res.end('<h1>Bem vindo ao testador de memória</h1>')
    }
}).listen(port, ()=> console.log(`Server is running in ${host}:${port}`))