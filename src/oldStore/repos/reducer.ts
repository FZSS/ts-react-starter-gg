import { Reducer } from 'redux';
import { initialState, ReposState } from 'store/repos/state';
import { GET_REPOSTIOREIS } from 'store/repos/constants';
import { ReposActions } from 'store/repos/actions';

const reducer: Reducer<ReposState, ReposActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_REPOSTIOREIS:
      return state;
  }
};

export default reducer;
