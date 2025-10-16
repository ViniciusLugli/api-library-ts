import { Author } from "../entities/Author";

export interface IAuthorRepository {
  save(author: Author): Promise<Author>;
  findById(id: number): Promise<Author | null>;
  findByName(name: string): Promise<Author[]>;
  findAll(): Promise<Author[]>;
  update(author: Author): Promise<Author>;
  delete(id: number): Promise<void>;
}
