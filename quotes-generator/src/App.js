import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes';
import styled from 'styled-components';

function App() {
  const App = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `
  return (
    <App>
      <Quotes/>
    </App>
  );
}

export default App;
