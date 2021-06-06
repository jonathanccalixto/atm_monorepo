import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react'
import InputMask from 'inputmask'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Input = (
  { id, className, label: labelText, mask, style, type, value },
  ref,
) => {
  const inputRef = useRef(null)

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  useEffect(() => {
    if (mask) InputMask({ mask }).mask(inputRef.current)
  }, [mask])

  useImperativeHandle(ref, () => ({
    get value() {
      inputRef.current?.value
    },
    set value(value) {
      if (inputRef.current) inputRef.current.value = value
    },
  }))

  return (
    <Container isFocused={isFocused} className={className} style={style}>
      <label htmlFor={id}>{labelText}</label>
      <input
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={inputRef}
        id={id}
        defaultValue={value}
        type={type}
      />
    </Container>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Input.defaultProps = {
  className: '',
  label: '',
  mask: '',
  type: 'text',
  style: {},
}

export default forwardRef(Input)
