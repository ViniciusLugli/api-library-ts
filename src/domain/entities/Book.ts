import { Author } from "./Author";

export class Book {
  constructor(
    public readonly id: number,
    public title: string,
    public author: Author,
    public publishedYear: number
  ) {}

  validate(): boolean {
    if (!this.title || !this.author || !this.publishedYear) {
      return false;
    }
    return true;
  }
}
