"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT, () => {
    console.log(`rodando na porta ${process.env.PORT || 3333}`);
});
