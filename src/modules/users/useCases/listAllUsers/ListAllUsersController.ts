import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (!user_id) {
      throw new Error("Mensagem de erro");
    }

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.send([...users]);
    } catch (error) {
      return response.status(400).json({ error }).send();
    }
  }
}

export { ListAllUsersController };
