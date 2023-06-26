import styled from 'styled-components'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'

const Container = styled.div`
  display: flex;
  max-width: 600px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 600px) {
    flex-direction: column;
    min-height: 750px;
    border-radius: 0px;
    margin: 0 20px;
  }
`

function App() {
  return (
    <Container>
      <FirstSection/>
      <SecondSection/>
    </Container>
  )
}

export default App
