import { Author } from "../../domain/entities/Author";
import { AuthorResponseDTO } from "../dto/author/AuthorResponseDTO";
import { CreateAuthorDTO } from "../dto/author/CreateAuthorDTO";
import { UpdateAuthorDTO } from "../dto/author/UpdateAuthorDTO";

export class AuthorMapper {
  static fromCreateDTO(dto: CreateAuthorDTO): Author {
    return new Author(Date.now(), dto.name);
  }

  static fromUpdateDTO(dto: UpdateAuthorDTO, existingAuthor: Author): Author {
    return new Author(existingAuthor.id, dto.name);
  }

  static toDTO(author: Author): AuthorResponseDTO {
    return {
      id: author.id,
      name: author.name,
    };
  }

  static toDTOList(authors: Author[]): AuthorResponseDTO[] {
    return authors.map((author) => this.toDTO(author));
  }
}
