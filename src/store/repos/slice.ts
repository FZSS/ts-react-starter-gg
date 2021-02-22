import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, Repo } from 'store/repos/state';
import { AppThunk } from 'store/store';
import { getRepos } from 'api/githubApi';

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    fetchReposPending(state) {
      state.loading = true;
      state.repos = [];
    },
    fetchReposFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchReposFulfilled(state, action: PayloadAction<Repo[]>) {
      state.loading = false;
      state.repos = action.payload;
    },
  },
});

const {
  fetchReposFulfilled,
  fetchReposFailed,
  fetchReposPending,
} = reposSlice.actions;

export const fetchRepos = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchReposPending());
    const repos = await getRepos();
    dispatch(fetchReposFulfilled(repos));
  } catch (error) {
    dispatch(fetchReposFailed(error));
  }
};

export default reposSlice.reducer;
