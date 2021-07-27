import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const listAllUsers = this.usersRepository.list();

    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User Not Found");
    }

    if (!userExists.admin) {
      throw new Error("You Are Not an Admin User");
    }

    return listAllUsers;
  }
}

export { ListAllUsersUseCase };
