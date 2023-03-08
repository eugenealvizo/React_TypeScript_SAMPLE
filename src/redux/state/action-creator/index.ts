import axios from 'axios'
import { ActionType } from '../action-type'
import { Actions } from '../actions'
import { Dispatch } from 'redux'

export const searchRepositories = (term: string) => {


    return async (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }

            })

            const names = data.objects.map((result: any) => {
                return result.package.name;
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCESS,
                payload: names

            })

        } catch (err) {
            if (err instanceof Error) {
                dispatch({
                    type: ActionType.SEARCH_REPOSITORIES_ERROR,
                    payload: err.message
                });
            }

        }
    }
}