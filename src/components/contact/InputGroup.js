import React from 'react'
import classnames from 'classnames'

const InputGroup = ({
  name,
  placeholder,
  value,
  onChange,
  errors,
  disabled
}) => {

  return (
    <div className={classnames("form__element")}>
      <input
        className= {
          classnames({'form__element--disabled' : disabled})
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete='off'
        style={{}}
      />
      {errors && (<div className="form__invalid-feedback">{errors}</div>)}
    </div>
  )
}

export default InputGroup 