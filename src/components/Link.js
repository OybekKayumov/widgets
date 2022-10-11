import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // Press "Ctrl + Link" --> open in new tab in browser
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // no update page
    event.preventDefault();

    // change url without updating
    window.history.pushState({}, '', href)

    // 
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent)
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
