import { IAuthorRepository } from "../../../domain/repositories/IAuthorRepository";
import { AppError } from "../../../shared/errors/AppError";

export class DeleteAuthorUseCase {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute(id: number): Promise<void> {
    const author = await this.authorRepository.findById(id);
    if (!author) throw new AppError("Author not found", 404);

    await this.authorRepository.delete(id);
  }
}
