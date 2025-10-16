import { Author } from "../../domain/entities/Author";
import { UpdateBookDTO } from "../dto/book/UpdateBookDTO";
import { CreateBookDTO } from "../dto/book/CreateBookDTO";
import { Book } from "./../../domain/entities/Book";
import { BookResponseDTO } from "../dto/book/BookResponseDTO";
import { AuthorMapper } from "./AuthorMapper";

export class BookMapper {
  static fromCreateDTO(dto: CreateBookDTO, author: Author): Book {
    return new Book(Date.now(), dto.title, author, dto.publishedYear);
  }

  static fromUpdateDTO(
    dto: UpdateBookDTO,
    author: Author,
    existingBook: Book
  ): Book {
    return new Book(
      existingBook.id,
      dto.title ?? existingBook.title,
      author,
      dto.publishedYear ?? existingBook.publishedYear
    );
  }

  static toDTO(book: Book): BookResponseDTO {
    return {
      id: book.id,
      title: book.title,
      author: AuthorMapper.toDTO(book.author),
      publishedYear: book.publishedYear,
    };
  }

  static toDTOList(books: Book[]): BookResponseDTO[] {
    return books.map((book) => this.toDTO(book));
  }
}
