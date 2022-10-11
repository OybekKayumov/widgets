import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: "'What is React?",
    content: "React is a front end JavaScript Framework"
  },
  {
    title: "'Why use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "'How do you use React?",
    content: "You use React by creating components"
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

function App() {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="">
    <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}

      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}

      {/* {showDropdown ? 
        <Dropdown 
          selected={selected} 
          onSelectedChange={setSelected}
          options={options} 
        /> : null
      } */}

      <Translate />
    </div>
  );
}

export default App;
