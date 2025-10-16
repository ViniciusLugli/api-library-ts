import { IAuthorRepository } from "../../../domain/repositories/IAuthorRepository";
import { IBookRepository } from "../../../domain/repositories/IBookRepository";
import { AppError } from "../../../shared/errors/AppError";
import { BookResponseDTO } from "../../dto/book/BookResponseDTO";
import { UpdateBookDTO } from "../../dto/book/UpdateBookDTO";
import { BookMapper } from "../../mappers/BookMapper";

export class UpdateBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private authorRepository: IAuthorRepository
  ) {}

  async execute(dto: UpdateBookDTO): Promise<BookResponseDTO> {
    const existingBook = await this.bookRepository.findById(dto.id);
    if (!existingBook) throw new AppError("Book not found", 404);

    let author = existingBook.author;
    if (dto.authorId && dto.authorId !== author.id) {
      const newAuthor = await this.authorRepository.findById(dto.authorId);
      if (!newAuthor) throw new AppError("Author not found", 404);
      author = newAuthor;
    }

    const updatedBook = BookMapper.fromUpdateDTO(dto, author, existingBook);
    return BookMapper.toDTO(await this.bookRepository.update(updatedBook));
  }
}
