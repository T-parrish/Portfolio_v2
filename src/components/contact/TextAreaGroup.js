import React from 'react';
import classnames from 'classnames';


const TextAreaGroup = ({
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="form__element">
      <textarea
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

export default TextAreaGroup