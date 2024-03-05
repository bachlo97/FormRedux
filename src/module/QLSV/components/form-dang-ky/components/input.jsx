import React from 'react'
import { Error } from './error'

function Input(props) {
  const {label,name} = props
  return (
    <div>
      <label className="form-label">{label}</label>
      <input className='form-control' onChange={props.onChange} name={name}/>
      <Error/>
    </div>
  )
}

export default Input