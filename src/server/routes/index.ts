import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    return res.send("Olá Dev");
});

router.post("/teste", (req, res) => {
    console.log(req.body)

    return res.json(req.body)
})

const api = [
    {id: 1, nome: "Javascript"},
    {id: 2, nome: "Typescript"},
    {id: 3, nome: "NodeJs"}
]
router.get("/api", (_, res) => {
    return res.send(
        api
    )
})

export { router }