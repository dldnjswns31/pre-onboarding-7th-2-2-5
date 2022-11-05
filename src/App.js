import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Router from './Router';
import Sidebar from './components/common/sidebar/Sidebar';
import Header from './components/common/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <StMainContainer>
          <StMain>
            <StLeftContainer>
              <Sidebar />
            </StLeftContainer>
            <StRightContainer>
              <Header />
              <Router />
            </StRightContainer>
          </StMain>
        </StMainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;

const StMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
`;

const StMain = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
`;

const StLeftContainer = styled.div`
  width: 320px;
  padding: 0 40px;
  background-color: #ffffff;
`;

const StRightContainer = styled.div`
  width: 1120px;
  padding: 0 40px;
  background-color: #f6f7f8;
`;
