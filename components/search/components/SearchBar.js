import { useEffect, useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (search !== '') {
      fetch(`https://api.github.com/users/${search}`, {
        headers: {
          'User-Agent': 'request',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setUser(json);
        });
    }
  }, [search]);

  useEffect(() => {
    if (user.message) {
      setUser(false);
    } else {
      console.log(user);
    }
  }, [user]);

  return (
    <>
      <div className='relative z-0 w-full max-w-xl group px-4'>
        <input
          type='text'
          name='user_search'
          className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-purple-700 peer'
          value={search}
          placeholder=' '
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <label
          htmlFor='user_search'
          className='absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-purple-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Cerca utente
        </label>
      </div>
      {user ? (
        <a href={user.html_url} target='_blank'>
          <div></div>
        </a>
      ) : (
        <div>Nessun utente</div>
      )}
    </>
  );
};

export default SearchBar;

const user = {
  login: 'octocat',
  id: 1,
  node_id: 'MDQ6VXNlcjE=',
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  site_admin: false,
  name: 'monalisa octocat',
  company: 'GitHub',
  blog: 'https://github.com/blog',
  location: 'San Francisco',
  email: 'octocat@github.com',
  hireable: false,
  bio: 'There once was...',
  twitter_username: 'monatheoctocat',
  public_repos: 2,
  public_gists: 1,
  followers: 20,
  following: 0,
  created_at: '2008-01-14T04:33:35Z',
  updated_at: '2008-01-14T04:33:35Z',
  private_gists: 81,
  total_private_repos: 100,
  owned_private_repos: 100,
  disk_usage: 10000,
  collaborators: 8,
  two_factor_authentication: true,
  plan: {
    name: 'Medium',
    space: 400,
    private_repos: 20,
    collaborators: 0,
  },
};
