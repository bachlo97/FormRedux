import React from 'react'
import { Error } from './error'

function Input(props) {
  const {label,error,...inputProps} = props
  return (
    <div>
      <label className="form-label">{label}</label>
      <input className='form-control'{...inputProps}/>
      <Error error={error}/>
    </div>
  )
}

export default Input