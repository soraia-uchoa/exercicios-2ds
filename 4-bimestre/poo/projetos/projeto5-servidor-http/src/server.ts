import http from 'node:http'
import 'dotenv/config'

const port = process.env.PORT
const nome = 'John'
const idade = 34

const server = http.createServer((req, res) => {

    res.end(`Servidor rodando para ${nome}, idade ${idade}!`)

})

server.listen(port, () => {

    console.log(`Servidor funcionando em http://localhost:${port}`)

}).close(() => {
  console.log("Servidor encerrado.")
})

export default server