import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();
    Object.assign(newUser, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(newUser);
    return newUser;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
  }

  list(): User[] {
    // Complete aqui
  }
}

export { UsersRepository };
