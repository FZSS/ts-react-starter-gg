export interface Repo {
  name: string;
  owner: string;
  stars: number;
}

export interface ReposState {
  repos: Repo[];
  loading: boolean;
  error: string | null;
}

export const initialState: ReposState = {
  repos: [],
  loading: false,
  error: null,
};
