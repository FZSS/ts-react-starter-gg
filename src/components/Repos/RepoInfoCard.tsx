import { FunctionComponent } from 'react';
import { Card, Elevation, H5 } from '@blueprintjs/core';
import * as React from 'react';

export interface RepoInfoProps {
  name: string;
  owner: string;
  stars: number;
}

const RepoInfoCard: FunctionComponent<RepoInfoProps> = (props) => {
  return (
    <Card
      className="repo-info-card"
      interactive={true}
      elevation={Elevation.TWO}
    >
      <div className="repo-info-card-cell">
        <H5>Name</H5>
        <div className="repo-info-card-detail">
          <p>{props.name}</p>
        </div>
      </div>
      <div className="repo-info-card-cell">
        <H5>Owner</H5>
        <div className="repo-info-card-detail">
          <p>{props.owner}</p>
        </div>
      </div>
      <div className="repo-info-card-cell">
        <H5>Stars</H5>
        <div className="repo-info-card-detail">
          <p>{props.stars}</p>
        </div>
      </div>
    </Card>
  );
};

export default RepoInfoCard;
