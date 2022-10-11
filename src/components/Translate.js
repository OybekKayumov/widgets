import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: 'Africaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi'
  }   
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}/>

      <Dropdown
        label='Select a Language' 
        selected={language}
        onSelectedChange={setLanguage}
        options={options} 
      />
    </div>
  )
}

export default Translate;