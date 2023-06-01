import React from 'react'

export const Tooltip = (props) => {
  console.log(props.position);
  return (
    <div className='split'>
      <section className='tooltip'>
      Hover Over Me!
    <span id="tooltiptext" className={`tool-${props.position}`} >Thanks for Hovering! I'm a tooltip</span>
      </section>  
    </div>
  )
}
