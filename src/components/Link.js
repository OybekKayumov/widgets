import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // no update page
    event.preventDefault();

    // change url without updating
    window.history.pushState({}, '', href)
  }

  return (
    <a 
      onClick={onClick}
      className={className}
      href={href}
    >
      {children}
    </a>
  )
}

export default Link;
