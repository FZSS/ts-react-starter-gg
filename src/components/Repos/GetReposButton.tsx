import { FunctionComponent } from 'react';
import { Button } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useEffect } from 'react';

import { fetchRepos } from 'store/repos/slice';
import { RootState } from 'store/store';

const GetReposButton: FunctionComponent = () => {
  const loading = useSelector((state: RootState) => state.repos.loading);
  const dispatch = useDispatch();
  const buttonText = loading ? 'Loading...' : 'Get repositories';
  return (
    <Button
      disabled={loading}
      text={buttonText}
      onClick={() => dispatch(fetchRepos())}
    />
  );
};

export default GetReposButton;
