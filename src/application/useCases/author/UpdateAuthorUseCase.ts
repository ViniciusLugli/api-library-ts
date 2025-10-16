import { IAuthorRepository } from "../../../domain/repositories/IAuthorRepository";
import { AppError } from "../../../shared/errors/AppError";
import { AuthorResponseDTO } from "../../dto/author/AuthorResponseDTO";
import { UpdateAuthorDTO } from "../../dto/author/UpdateAuthorDTO";
import { AuthorMapper } from "../../mappers/AuthorMapper";

export class UpdateAuthorUseCase {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute(dto: UpdateAuthorDTO): Promise<AuthorResponseDTO> {
    const existing = await this.authorRepository.findById(dto.id);
    if (!existing) throw new AppError("Author not found", 404);

    const updated = AuthorMapper.fromUpdateDTO(dto, existing);

    if (!updated.validate()) throw new AppError("Invalid data", 400);

    const updatedAuthor = await this.authorRepository.update(updated);
    return AuthorMapper.toDTO(updatedAuthor);
  }
}
