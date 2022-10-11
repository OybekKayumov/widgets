import React, { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate', onLocationChange);

    // cleanup function
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, [])

  // return window.location.pathname === path
  return currentPath === path
      ? children
      : null;  
}

export default Route;
