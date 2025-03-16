import React, { Children } from 'react'

const Button = (props) => {

  return (
      <button className={`h-10 px-6 font-semibold rounded-md ${props.variant}   text-black  hover:scale-105 transition-transform duration-300 hover:bg-blue-300`}
      type="submit">
        {props.children}
      </button>
  )
}

export default Button
