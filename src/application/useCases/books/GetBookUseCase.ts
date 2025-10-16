import { IAuthorRepository } from "../../../domain/repositories/IAuthorRepository";
import { IBookRepository } from "../../../domain/repositories/IBookRepository";
import { AppError } from "../../../shared/errors/AppError";
import { BookResponseDTO } from "../../dto/book/BookResponseDTO";
import { GetBookDTO } from "../../dto/book/GetBookDTO";
import { BookMapper } from "../../mappers/BookMapper";

export class GetBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private authorRepository: IAuthorRepository
  ) {}

  async execute(dto: GetBookDTO): Promise<BookResponseDTO | BookResponseDTO[]> {
    if (dto.id) {
      const book = await this.bookRepository.findById(dto.id);
      if (!book) throw new AppError("Book not found", 404);
      return BookMapper.toDTO(book);
    }

    if (dto.title) {
      const books = await this.bookRepository.findByTitle(dto.title);
      return BookMapper.toDTOList(books);
    }

    if (dto.authorId) {
      const author = await this.authorRepository.findById(dto.authorId);
      if (!author) throw new AppError("Author not found", 404);

      const books = await this.bookRepository.findByAuthor(author);
      return BookMapper.toDTOList(books);
    }

    const books = await this.bookRepository.findAll();
    return BookMapper.toDTOList(books);
  }
}
