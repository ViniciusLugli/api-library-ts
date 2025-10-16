import { Author } from "../entities/Author";
import { Book } from "../entities/Book";

export interface IBookRepository {
  save(book: Book): Promise<Book>;
  findById(id: number): Promise<Book | null>;
  findByTitle(title: string): Promise<Book[]>;
  findByAuthor(author: Author): Promise<Book[]>;
  findAll(): Promise<Book[]>;
  update(book: Book): Promise<Book>;
  delete(id: number): Promise<void>;
}
