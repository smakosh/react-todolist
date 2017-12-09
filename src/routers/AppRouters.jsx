import React from 'react'
import App from '../components/App'
import About from '../components/about'
import Header from '../components/header'
import Notfound from '../components/404'
import Create from '../components/create-task'
import EditTask from '../components/edit'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/create" component={Create} />
                <Route path="/about" component={About} />
                <Route path="/edit/:id" component={EditTask} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter