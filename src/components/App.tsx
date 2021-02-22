import 'components/styles.css';
import ReposView from 'components/Repos/ReposView';
import * as React from 'react';

export default function App() {
  return (
    <div className="app">
      <h1> Github repositories </h1>
      <ReposView />
    </div>
  );
}
