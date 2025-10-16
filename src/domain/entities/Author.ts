export class Author {
  constructor(
    public readonly id: number,
    public name: string
  ) {}

  validate(): boolean {
    if (!this.name) return false;
    return true;
  }
}
