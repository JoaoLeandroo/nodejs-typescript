import { server } from "./server/Server";

server.listen(process.env.PORT, () => {
    console.log(`rodando na porta ${process.env.PORT || 3000}`)
})