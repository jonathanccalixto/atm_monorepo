import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid var(--primary-border);
  height: calc(100% - 120px);
  margin: 50px auto;
  max-width: 1200px;
  min-height: 600px;
  min-width: 800px;
  padding: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  border: 2px dashed var(--primary-border);
  font-size: 32px;
  font-weight: bold;
  height: 50px;
  margin-bottom: 50px;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: center;
`
