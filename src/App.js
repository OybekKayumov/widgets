import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

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
  return (
    <div className="App">
    <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown  options={options} />
    </div>
  );
}

export default App;
