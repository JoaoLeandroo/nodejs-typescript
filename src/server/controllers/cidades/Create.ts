import { Request, Response } from "express";

interface ICidade {
  nome: string;
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  const data = req.body.nome;
  console.log(data);
  return res.send("Create!");
};