import React from 'react'
import styled, { css } from 'styled-components'
import { opacity } from 'utilities/styles'

const Label = styled.label`
  display: inline-block;
  margin-bottom: 1em;
  vertical-align: top;

  ${props => props.block && css`
    display: block;
    width: 100%;
  `}

  ${props => !props.block && css`
    margin-right: 1em;
  `}
`

const LabelText = styled.span`
  font-size: .75em;

  color: ${props => opacity(props.theme.colors.text, props.theme.opacity.text)};
`

const Input = styled.input`
  display: block;
  padding: .5em 0;

  ${props => props.block && css`
    width: 100%;
  `}

  border: none;
  border-bottom-width: ${props => props.theme.border.width};
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.colors.text};

  ${props => props.error && css`
    border-bottom-color: ${props.theme.colors.error};
  `}

  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom-color: ${props => props.theme.colors.primary};
  }
`

const ErrorText = styled.span`
  color: ${props => props.theme.colors.error};
`

export default ({ type, label, block, error, component: Component, onChange, ...props }) => {
  if (type === 'radio') {
    const { value, options } = props

    return (
      <div>
        {options.map(option => (
          <Label block={block} key={option.value}>
            <input type="radio" checked={value === option.value} onChange={() => onChange(option.value)} />
            <LabelText>{option.label}</LabelText>
          </Label>
        ))}
      </div>
    )
  } else {
    return (
      <Label block={block}>
        <LabelText>{label}</LabelText>
        { Component
          ? <Component {...props} onChange={onChange} />
          : <Input block={block} onChange={(ev) => onChange(ev.target.value)} {...props} />}
        {error
          ? <ErrorText>{error}</ErrorText>
          : null}
      </Label>
    )
  }
}
