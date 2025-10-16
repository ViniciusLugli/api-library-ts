import { IBookRepository } from "../../../domain/repositories/IBookRepository";
import { AppError } from "../../../shared/errors/AppError";

export class DeleteBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(id: number): Promise<void> {
    const book = this.bookRepository.findById(id);
    if (!book) throw new AppError("Book not found", 404);

    await this.bookRepository.delete(id);
  }
}
