import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
// import WeatherTools from './Component/'

function App() {
  return (
      <>
        <Header />  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </>
  );
}

export default App;
