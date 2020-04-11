/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useField } from '@unform/core';
import React, { useEffect, useRef, CSSProperties } from 'react';

interface Props {
  name: string;
  label?: string;
  style?:CSSProperties
}

type InputPropsDto = JSX.IntrinsicElements['input'] & Props;
const InputT: React.FC<InputPropsDto> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        name={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
};
export default InputT;
