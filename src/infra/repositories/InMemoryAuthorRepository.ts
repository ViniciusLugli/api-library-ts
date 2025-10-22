import { Author } from "../../domain/entities/Author";
import { IAuthorRepository } from "./../../domain/repositories/IAuthorRepository";

export class InMemoryAuthorRepository implements IAuthorRepository {
  private authors: Author[] = [];

  async save(author: Author): Promise<void> {
    this.authors.push(author);
  }

  async findById(id: number): Promise<Author | null> {
    return this.authors.find((u) => u.id === id) ?? null;
  }

  async findByName(name: string): Promise<Author[]> {
    return this.authors.filter((u) => u.name === name);
  }

  async findAll(): Promise<Author[]> {
    return [...this.authors];
  }

  async update(author: Author): Promise<Author | null> {
    const index = this.authors.findIndex((u) => u.id === author.id);
    if (index === -1) return null;

    this.authors[index] = author;
    return author;
  }

  async delete(id: number): Promise<void> {
    this.authors = this.authors.filter((u) => u.id !== id);
  }
}
