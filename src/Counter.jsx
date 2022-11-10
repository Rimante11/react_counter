import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }

  const decrease = () => {
    if (value !== 0) {
      setValue(value-1)
    } else {
      alert('Value can not be under the 0!');
    }
  }

  return (
    <>
    <section className='counterContainer'>
      <h2 className='title'>Regular Counter</h2>
      <h1 className='numberValue'>{value}</h1>
      <div className='btnContainer'>
        <button className='btn' onClick={decrease}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={()=> setValue(value+1)}>Increase</button>
      </div>
      <hr></hr>
      <p className='descriptionText'>Mini React project - 'Counter' to increase and decrease the value if needed - reset the value. Value can not be bellow zero. Owervise alert will popup.</p>
    </section>
    </>
  )
};

export default UseStateCounter;