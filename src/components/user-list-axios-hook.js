import React from 'react';
import useAxios from 'axios-hooks';

export default function UserListAxiosHooks() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-700">Error!</p>;

  const userRows = data.map((user, index) => <li key={index}>{user.name}</li>);

  return (
    <div className="component">
      <h1>List of Users</h1>
      <ul className="list-disc mt-4 ml-8">{userRows}</ul>
      <button
        className="bg-blue-600 mt-4 ml-4 px-4 py-2 rounded text-white"
        onClick={refetch}
      >
        Reload
      </button>
    </div>
  );
}
