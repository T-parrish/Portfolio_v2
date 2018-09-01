import React from 'react';
import classnames from 'classnames';


const TextAreaGroup = ({
  name,
  placeholder,
  value,
  onChange,
  errors,
  disabled
}) => {
  return (
    <div className="form__element">
      <textarea
        className= {
          classnames({'form__element--disabled' : disabled})
        }
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete='off'
      />
      {errors && (<div className="form__invalid-feedback">{errors}</div>)}
    </div>
  )
}

export default TextAreaGroup