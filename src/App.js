
import './App.css';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

//Nav
import Nav from './components/nav/nav'
import Foot from './components/foot/foot'

//componentes
import Home from './components/home/home'
import Capacitaciones from './components/capacitaciones/capacitaciones'
import Cursos from './components/cursos/cursos'
import Proyectos from './components/proyectos/proyectos'
import Proyecto from './components/proyecto/proyecto'

//404
import NotFound from './components/notFound/notFound'

import { BrowserRouter as Router, Route , Redirect, Switch } from 'react-router-dom';


function App() {
  
  return (
    
    <div className="margin">
  <Router>
        <Nav></Nav>

        <TransitionGroup>
          <CSSTransition
            
            classNames="slide"
            timeout={300}
            mountOnEnter={false}
            unmountOnExit={true}
          >
        <Switch>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/SobreMi" component={Capacitaciones}></Route>
        <Route exact path="/Proyectos" component={Proyectos}></Route>
        <Route exact path="/Cursos" component={Cursos}></Route>
        <Route exact path="/Proyecto/:id" component={Proyecto}></Route>
        <Route exact path="/"><Redirect to="/Home" /> </Route>
        <Route exact path="/404" component={NotFound}></Route>
        <Route >
          <Redirect to="/404" /> 
        </Route>
        </Switch>
        </CSSTransition>
        </TransitionGroup>

        <Foot></Foot>
      
      
      </Router>

    </div>
  );
}

export default App;
