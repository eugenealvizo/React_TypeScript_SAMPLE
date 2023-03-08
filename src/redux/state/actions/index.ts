import { ActionType } from "../action-type";

interface SearchRepositoriesActions {
    type: ActionType.SEARCH_REPOSITORIES;
}


interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCESS;
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string
}

export type Actions = SearchRepositoriesActions | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;
