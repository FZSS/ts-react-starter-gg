import {} from 'redux';
import { GET_REPOSTIOREIS } from 'store/repos/constants';

interface GetRepositoriesAction {
  type: typeof GET_REPOSTIOREIS;
  payload: any;
}

export type ReposActions = GetRepositoriesAction;

export const getGithubRepositories = (): GetRepositoriesAction => {
  return {
    type: GET_REPOSTIOREIS,
    payload: null,
  };
};
