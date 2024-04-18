yarn init

yarn add express

yarn add -D typescript

yarn add -D @types/express

yarn add -D ts-node-dev

yarn add http-status-codes

yarn add dotenv
Como configurar o dotenv, bata apenas fazer essa importação import "dotenv/config"
para usar basta utilizar: process.env.NOME_VARIAVEL_AMBIENTE
Não enviar o arquivo .env para o github, apenas o .env.example com o nome das variveis de ambientes, mas sem os dados.

yarn tsc --init
alterar no tsconfig
rootDir -> apontar a pasta de saída dos arquivos ts
outDir -> Apontar aonde os arquvios ts vão ser compilados para js

Para compilar, basta utilizar o comando yarn tsc