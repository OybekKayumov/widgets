import React, { useEffect } from "react";

const Convert = ( { language, text }) => {
  useEffect(() => {
    console.log('new language or text');
  }, [language, text])

  return (
    <div>

    </div>
  )
}

export default Convert;