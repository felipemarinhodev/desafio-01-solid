import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const userAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(userAdmin).send();
    } catch (error) {
      return response.status(404).json({ error }).send();
    }
  }
}

export { TurnUserAdminController };
