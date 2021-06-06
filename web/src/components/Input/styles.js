import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  label {
    width: 15%;

    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
  }

  input {
    background: var(--primary-bg);
    border: 0px none transparent;
    border-bottom: 1px solid var(--primary-border);
    color: var(--primary-font);
    padding: 0 15px;
    width: 85%;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      input {
        margin: -1px 0 0 0px;
        padding: 0 14px 0 14px;
        border: 1px dashed var(--primary-border);
        border-bottom: 1px solid var(--primary-border);
      }
    `}
`
