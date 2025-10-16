import { Book } from "../../../domain/entities/Book";
import { IAuthorRepository } from "../../../domain/repositories/IAuthorRepository";
import { IBookRepository } from "../../../domain/repositories/IBookRepository";
import { AppError } from "../../../shared/errors/AppError";
import { BookResponseDTO } from "../../dto/book/BookResponseDTO";
import { CreateBookDTO } from "../../dto/book/CreateBookDTO";
import { BookMapper } from "../../mappers/BookMapper";

export class CreateBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private authorRepository: IAuthorRepository
  ) {}

  async execute(dto: CreateBookDTO): Promise<BookResponseDTO> {
    const author = await this.authorRepository.findById(dto.authorId);
    if (!author) throw new AppError("Author not found", 404);

    const book = BookMapper.fromCreateDTO(dto, author);
    if (!book.validate()) throw new AppError("Invalid book data", 400);

    const createdBook = await this.bookRepository.save(book);
    return BookMapper.toDTO(createdBook);
  }
}
