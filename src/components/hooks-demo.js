import React, { useState, useEffect } from 'react';

export default function HookDemo(props) {
  const name = useFormInput('Agata');
  const location = useFormInput('Nairobi');
  const resolution = useWindowResolution();
  useDocumentTitle(name.value + ' from ' + location.value);

  return (
    <div className="component">
      <h1>Hook Demo</h1>
      <form autoComplete="off">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input {...name} />
        </div>
        <div className="field">
          <label htmlFor="location">Location</label>
          <input {...location} />
        </div>
      </form>
      <p className="text-output">
        Hello {name.value} from {location.value}
      </p>
      <p className="resolution-output">
        {resolution.width} x {resolution.height}
      </p>
    </div>
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
    onChange: handleChange,
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
    window.addEventListener('resize', handleResize);
    return () => {
      document.title = 'React Hooks Demo';
      window.removeEventListener('resize', handleResize);
    };
  }, [width, height]);
  return {
    width,
    height,
  };
}
