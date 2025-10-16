import { CreateAuthorUseCase } from "../../../application/useCases/author/CreateAuthorUseCase";
import { DeleteAuthorUseCase } from "../../../application/useCases/author/DeleteAuthorUseCase";
import { UpdateAuthorUseCase } from "../../../application/useCases/author/UpdateAuthorUseCase";

export class AuthorController {
  constructor(
    private createAuthorUseCase: CreateAuthorUseCase,
    private updateAuthorUseCase: UpdateAuthorUseCase,
    private deleteAuthorUseCase: DeleteAuthorUseCase
  ) {}
}
