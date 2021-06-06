import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const touch = css`
  background: var(--primary-background);
  border: 0 none transparent;
  color: var(--primary-font);

  position: absolute;

  ::before {
    content: '';
    border-style: solid;
    border-color: transparent var(--primary-border);

    position: absolute;
  }

  ::after {
    content: '';
    border: 39px solid var(--primary-border);

    position: absolute;
  }

  ${({ position }) =>
    css`
      top: calc(${position} * 78px);
    `}
  ${({ side }) => css`
    ${side}: 76px;

    ::before {
      ${side === 'left' && 'border-width: 39px 0 39px 39px;'}
      ${side === 'right' && 'border-width: 39px 39px 39px 0;'}
      ${side}: -50px;
    }

    ::after {
      ${side}: -128px;
    }
  `}
`

export const Button = styled.button`
  ${touch}
`

export const Link = styled(RouterLink)`
  ${touch}
`

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  form {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    position: relative;

    & > * {
      line-height: 78px;
    }
  }
`
