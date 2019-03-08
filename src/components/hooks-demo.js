import React, { useState } from 'react';

export default function HookDemo(props) {
  const [name, setName] = useState('Agata');
  const [location, setLocation] = useState('Nairobi');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    <section>
      <form>
        <section>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
        </section>
        <section>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" value={location} onChange={handleLocationChange} />
        </section>
      </form>
      <p>Hello {name} from {location}</p>
    </section>
  )
}