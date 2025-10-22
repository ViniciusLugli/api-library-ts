import { CreateAuthorUseCase } from "../../../application/useCases/author/CreateAuthorUseCase";
import { DeleteAuthorUseCase } from "../../../application/useCases/author/DeleteAuthorUseCase";
import { UpdateAuthorUseCase } from "../../../application/useCases/author/UpdateAuthorUseCase";
import { GetAuthorUseCase } from "./../../../application/useCases/author/GetAuthorUseCase";

export class AuthorController {
  constructor(
    private getAuthorUseCase: GetAuthorUseCase,
    private createAuthorUseCase: CreateAuthorUseCase,
    private updateAuthorUseCase: UpdateAuthorUseCase,
    private deleteAuthorUseCase: DeleteAuthorUseCase
  ) {}
}
