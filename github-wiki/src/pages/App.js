import img from '../img/github.png';
import {Container} from './styles'
function App() {
  return (
    <Container>
   <img src={img} alt="gitLogo" width={72} height={72}/>
    </Container>
  );
}

export default App;
