import { FunctionComponent } from 'react';
import * as React from 'react';
import RepoList from 'components/Repos/RepoList';
import GetReposButton from 'components/Repos/GetReposButton';
import 'components/Repos/styles.css';

const ReposView: FunctionComponent = () => {
  return (
    <div className="repos-view">
      <GetReposButton />
      <RepoList />
    </div>
  );
};

export default ReposView;
