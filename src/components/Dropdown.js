import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // only runs one time when we first render our Dropdown component onto the screen -> []
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
         capture: true, 
      });
    };
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

  // console.log('ref.current: ', ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        {/* <label className="label">Select a Color</label> */}
        <label className="label">{label}</label>

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
