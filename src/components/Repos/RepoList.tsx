import { FunctionComponent } from 'react';
import RepoInfoCard from 'components/Repos/RepoInfoCard';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const RepoList: FunctionComponent = () => {
  const repos = useSelector((state: RootState) => state.repos.repos);
  return (
    <div className="repo-list">
      {repos.map((repo, i) => (
        <RepoInfoCard
          key={i}
          name={repo.name}
          owner={repo.owner}
          stars={repo.stars}
        />
      ))}
    </div>
  );
};

export default RepoList;
