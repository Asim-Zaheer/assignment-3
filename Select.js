import React from 'react'

function Select({label,value,onChange,optList}) {
  return (
    <select value={value} onChange={onChange} >
{optList.map(option=>(
    <option key={option.value} value={option.value}>
        {option.label}
    </option>
))}
    </select>
  )
}

export default Select