import { server } from "./server/server";

server.listen(process.env.PORT, () => {
    console.log(`rodando na porta ${process.env.PORT || 3333}`)
})