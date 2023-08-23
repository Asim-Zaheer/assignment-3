import React from 'react'

function Button({lable , onClick}) {
  return (
    // <div>Button</div>
    <div>
        <button onClick={onClick} >
            {lable}
        </button>
    </div>
  )
}

export default Button