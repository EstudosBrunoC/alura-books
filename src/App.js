import Header from './components/Header';
import Search from './components/Search/index.';
import styled from 'styled-components';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
