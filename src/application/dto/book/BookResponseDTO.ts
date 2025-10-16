import { AuthorResponseDTO } from "../author/AuthorResponseDTO";

export interface BookResponseDTO {
  id: number;
  title: string;
  author: AuthorResponseDTO;
  publishedYear: number;
}
