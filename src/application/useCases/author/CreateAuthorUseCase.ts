import { IAuthorRepository } from "../../../domain/repositories/IAuthorRepository";
import { AppError } from "../../../shared/errors/AppError";
import { AuthorResponseDTO } from "../../dto/author/AuthorResponseDTO";
import { CreateAuthorDTO } from "../../dto/author/CreateAuthorDTO";
import { AuthorMapper } from "../../mappers/AuthorMapper";

export class CreateAuthorUseCase {
  constructor(private authorRepository: IAuthorRepository) {}

  async execute(dto: CreateAuthorDTO): Promise<AuthorResponseDTO> {
    const author = AuthorMapper.fromCreateDTO(dto);

    if (!author.validate()) throw new AppError("Author data invalid", 400);

    const savedAuthor = await this.authorRepository.save(author);
    return AuthorMapper.toDTO(savedAuthor);
  }
}
