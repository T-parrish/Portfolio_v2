import React from 'react'
import classnames from 'classnames'

const InputGroup = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="form__element">
      <input
        className= {
          classnames('')
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete='off'
      />
    </div>
  )
}

export default InputGroup 