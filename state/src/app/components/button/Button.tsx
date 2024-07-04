"use client"
import React from 'react'
type buttontype = {
    liner: string
    onClickHandler: () => void
}
function Button(props:buttontype) {
  return (
    <main>
        <button onClick={props.onClickHandler}>
        {props.liner}
    </button>
    </main>
    
  )
}

export default Button;