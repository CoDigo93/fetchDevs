import { BrowserRouter, Switch, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'


export const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}