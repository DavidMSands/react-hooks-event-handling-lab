import React from 'react';

function focusHandler() {
    console.log('Good!')
}

const blurHandler = () => {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
  return (
      <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
  )
}

export default EyesOnMe;
