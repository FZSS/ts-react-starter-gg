export interface Repo {
  name: string;
  owner: string;
  stars: number;
}

export interface ReposState {
  repos: Repo[];
}

export const initialState: ReposState = {
  repos: [],
};
