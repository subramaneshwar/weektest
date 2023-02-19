import './App.css';
import Nav from './Components/nav';
import Headline from './Components/head';
import Cardsall from './Components/content';
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Headline/>
      <Cardsall/> 
      <Footer/>
    </div>
  );
}


export default App;
