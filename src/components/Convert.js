import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ( { language, text }) => {
  const [translated, setTranslated] = useState('');
  
  useEffect(() => {
    // console.log('new language or text');
    axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: {
        q: text,
        target: language.value,
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      }
    })
  }, [language, text])

  return (
    <div>

    </div>
  )
}

export default Convert;