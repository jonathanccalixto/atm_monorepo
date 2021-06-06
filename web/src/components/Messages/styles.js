import styled from 'styled-components'

export const Container = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
`
const Li = styled.li`
  padding: 5px 15px;
  width: 100%;

  display: flex;
`
export const Error = styled(Li)`
  background: var(--danger-bg);
  color: var(--danger-font);
`

export const Info = styled(Li)`
  background: var(--info-bg);
  color: var(--info-font);
`

export const Success = styled(Li)`
  background: var(--success-bg);
  color: var(--success-font);
`
export const Warning = styled(Li)`
  background: var(--warning-bg);
  color: var(--warning-font);
`
