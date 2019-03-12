import React, { useState, useEffect } from "react";

export default function HookDemo(props) {
  const name = useFormInput("Agata");
  const location = useFormInput("Nairobi");
  const resolution = useWindowResolution();
  useDocumentTitle(name.value + " from " + location.value);

  return (
    <section>
      <form autoComplete="off">
        <section>
          <label htmlFor="name">Name</label>
          <input {...name} />
        </section>
        <section>
          <label htmlFor="location">Location</label>
          <input {...location} />
        </section>
      </form>
      <p>
        Hello {name.value} from {location.value}
      </p>
      <h3>
        {resolution.width} x {resolution.height}
      </h3>
    </section>
  );
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function useWindowResolution() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize ", handleResize, true);
    };
  }, [width, height]);
  return {
    width,
    height
  };
}
