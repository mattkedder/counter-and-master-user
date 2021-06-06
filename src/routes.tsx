
import { Route, Switch } from 'react-router-dom';

// PAGES
import CounterPage from './pages/counter/counter';
import UsersPage from './pages/users/users';
import UserAddPage from './pages/users/user-add';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={CounterPage} />
                <Route path="/counter" component={CounterPage} />
                <Route exact path="/users" component={UsersPage} />
                <Route path="/users/add" component={UserAddPage} />
            </Switch>
        </>
    )
}

export default Routes
