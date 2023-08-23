import React from 'react'
 props=(value, onChange, type  )
function input({value, onChange, type}) {
  return (
<input
value={value}
type={type}
onChange={onChange}
/>
    )
}

export default input