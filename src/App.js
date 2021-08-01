import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Angle from './comps/Angle';
import Area from './comps/Area';
import Hypo from './comps/Hypo';
import Quiz from './comps/Quiz';
import Home from './comps/Home';
import Header from "./comps/Header";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Route path="/" component={Home}   exact />
        <Route path="/angle" component={Angle} />
        <Route path="/area" component={Area} />
        <Route path="/hypotenuse" component={Hypo} />
        <Route path="/quiz" component={Quiz} />
      </BrowserRouter>
    </div>
  );
}

export default App;
