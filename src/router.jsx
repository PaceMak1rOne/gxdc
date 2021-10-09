import React from 'react'
import { HashRouter as Router, Route,Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/login'
import Admin from './admin';
import Buttons from './pages/ul/button'
import Home from './pages/home';
import NoMatch from './pages/ul/noMatch';
import Modal from './pages/ul/modal';
import Loading from './pages/ul/loading';
import Notification from './pages/ul/notification'
import Message from './pages/ul/messages';
import Tabs from './pages/ul/tabs'
import Gallery from './pages/ul/gallery';
import Carousels from './pages/ul/carousel';
import Logins from './pages/form/login';
import Register from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HeightTable from './pages/table/heightTable';
import Rich from './pages/rich';
import City from './pages/city';
// import { GContext } from './CountContext';
// import { Provider } from 'react';
const IRouter = () => {
    return ( 
        <Router>
            <App>
                    <Route path="/"  render={()=>
                     <Admin>
                         <Switch>
                         <Route path="/home" component={Home}/>
                        <Route  path="/ui/buttons" component={Buttons} />
                        <Route  path="/ui/modals" component={Modal} />
                        <Route  path="/ui/loadings" component={Loading} />
                        <Route  path="/ui/notification" component={Notification} />
                        <Route  path="/ui/messages" component={Message} />
                        <Route  path='/ui/tabs'component={Tabs} />
                        <Route  path='/ui/gallery' component={Gallery} />
                        <Route  path='/ui/carousel' component={Carousels} />
                        <Route  path='/form/login' component={Logins}/>
                        <Route  path='/form/reg' component={Register}/>
                        <Route  path='/table/basic' component={BasicTable}/>
                        <Route  path='/table/high' component={HeightTable}/>
                        <Route  path='/rich' component={Rich}/>
                        <Route  path='/city' component={City}/>
                        <Route  component={NoMatch} />
                        </Switch>
                        </Admin>
                      }/>
                      <Route path="/order/detail" component={Login}/>
            </App>
            </Router>
     );
}
 
export default IRouter;