import { IAuthorRepository } from "../../../domain/repositories/IAuthorRepository";
import { AppError } from "../../../shared/errors/AppError";
import { AuthorResponseDTO } from "../../dto/author/AuthorResponseDTO";
import { GetAuthorDTO } from "../../dto/author/GetAuthorDTO";
import { AuthorMapper } from "../../mappers/AuthorMapper";

export class GetAuthorUseCase {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute(
    dto: GetAuthorDTO
  ): Promise<AuthorResponseDTO | AuthorResponseDTO[]> {
    if (dto.id) {
      const author = await this.authorRepository.findById(dto.id);
      if (!author) throw new AppError("Author not found", 404);
      return AuthorMapper.toDTO(author);
    }

    if (dto.name) {
      const authors = await this.authorRepository.findByName(dto.name);
      if (!authors) throw new AppError("Author not found", 404);

      return AuthorMapper.toDTOList(authors);
    }

    const authors = await this.authorRepository.findAll();
    if (!authors) throw new AppError("Author not found", 404);

    return AuthorMapper.toDTOList(authors);
  }
}
