import axios from 'axios';
import { Repo } from 'store/repos/state';

export const getRepos = async (): Promise<Repo[]> => {
  const url =
    'https://api.github.com/search/repositories?q=apache+language:scala';

  const { data } = await axios.get(url);

  const repos = data.items.map((item: any) => ({
    name: item.full_name,
    owner: item.owner.login,
    stars: item.stargazers_count,
  }));

  return repos;
};
