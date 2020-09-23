import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users');
      setUsers(result.data);
    };
    fetchData();
  }, []);

  const userRows = users.map((user, index) => <li key={index}>{user.name}</li>);

  return (
    <div className="component">
      <h1>List of Users</h1>
      <ul className="list-disc mt-4 ml-8">{userRows}</ul>
    </div>
  );
}
