import React from 'react'

function card({id ,userName , age ,institute ,isActive ,category}) {
  return (
    <div className="card">
      <h2 key={id} > {userName}</h2>
      <p>Age: {age}</p>
      <p>Institute: {institute}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <p>Category: {category}</p>
    </div>
  )
}

export default card