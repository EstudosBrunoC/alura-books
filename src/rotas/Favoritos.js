import Search from '../components/Search/index.';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favoritos() {
  return (
    <AppContainer>
      <Search />
    </AppContainer>
  );
}

export default Favoritos;
