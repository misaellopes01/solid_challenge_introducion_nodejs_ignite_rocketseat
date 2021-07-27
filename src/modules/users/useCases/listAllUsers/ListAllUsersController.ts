import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const allUsers = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.status(201).json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: "User Not Found" });
    }
  }
}

export { ListAllUsersController };
