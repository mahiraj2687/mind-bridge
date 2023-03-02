import {Route, Switch} from 'react-router-dom' 
import Login from "./components/Login"


const App = () => ( 

  <Switch> 
    <Route exact path="/mind-bridge" component={Login} />
  </Switch> 

) 

export default App 