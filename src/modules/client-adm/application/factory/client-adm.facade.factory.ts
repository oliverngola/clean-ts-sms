import ClientAdmFacade from '../../infra/facade/client-adm.facade'
import ClientRepository from '../../infra/repository/client.repository'
import AddClientUseCase from '../../domain/usecase/add-client/add-client.usecase'
import FindClientUseCase from '../../domain/usecase/find-client/find-client.usecase'

export default class ClientAdmFacadeFactory {
  static create () {
    const repository = new ClientRepository()
    const findUsecase = new FindClientUseCase(repository)
    const addUsecase = new AddClientUseCase(repository)
    const facade = new ClientAdmFacade({
      addUsecase,
      findUsecase
    })
    return facade
  }
}
