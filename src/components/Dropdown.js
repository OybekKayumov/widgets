import React, { useEffect, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  // only runs one time when we first render our Dropdown component onto the screen -> []
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      console.log('body Clicked!!!');
      console.log('event.target: ', e.target);

      setOpen(false)
    }, {capture: true}); // React v17
    // });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // don't render anything
    }

    return (
      <div 
        key={option.value} 
        className="item"
        onClick={() => {
          console.log('item clicked!!!')
          onSelectedChange(option)}
        }
      >
        {option.label}
      </div>
    )
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>

        <div 
          onClick={() => {
            console.log('dropdown clicked')
            setOpen(!open)}
          }
          className={`ui selection dropdown ${ open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div 
            className={`menu ${ open ? 'visible transition' : ''}`}
          >
            {renderedOptions}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dropdown;
