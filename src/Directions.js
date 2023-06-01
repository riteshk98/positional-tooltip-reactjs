import React, {useState } from 'react'

export const Directions = (props) => {
  const[topColor,setTopColor] = useState('black');
  const[leftColor,setLeftColor] = useState('black');
  const[rightColor,setRightColor] = useState('white');
  const[downColor,setDownColor] = useState('black');

  const handleClick=(position)=>{
    console.log(position);
    props.setPosition(position);
    if(position === 'top'){
      setTopColor('white');
      setLeftColor('black');
      setRightColor('black');
      setDownColor('black');
    }else if(position === 'down'){
      setTopColor('black');
      setLeftColor('black');
      setRightColor('black');
      setDownColor('white');
    }else if(position === 'left'){
      setTopColor('black');
      setLeftColor('white');
      setRightColor('black');
      setDownColor('black');
    }else{
      setTopColor('black');
      setLeftColor('black');
      setRightColor('white');
      setDownColor('black');
    }
    
  }


  return (
    <div className='split'>
        <div id='top' className={topColor} onClick={()=>handleClick('top')}>top</div>
        <div id='left' className={leftColor} onClick={()=>handleClick('left')}>left</div>
        <div id='right' className={rightColor} onClick={()=>handleClick('right')}>right</div>
        <div id='down' className={downColor} onClick={()=>handleClick('down')}>down</div>
    </div>
  )
}
