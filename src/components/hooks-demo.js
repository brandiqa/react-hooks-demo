import React, { useState, useEffect } from "react";

export default function HookDemo(props) {
  const [name, setName] = useState("Agata");
  const [location, setLocation] = useState("Nairobi");
  const [resolution, setResolution] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    document.title = name + " from " + location;
  });

  useEffect(() => {
    const handleResize = () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize ", handleResize);
    };
  });

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
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </section>
        <section>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={handleLocationChange}
          />
        </section>
      </form>
      <p>
        Hello {name} from {location}
      </p>
      <h3>
        {resolution.width} x {resolution.height}
      </h3>
    </section>
  );
}
