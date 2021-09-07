import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Todo from "../page/Todo";
import Info from "../page/Info";
import Error from "../page/Error";

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/Todo">
                    <Todo/>
                </Route>
                <Route path="/Info">
                    <Info/>
                </Route>
                <Route path="/Error">
                    <Error/>
                </Route>
                <Redirect to='/Error'/>
            </Switch>
        </div>
    );
};

export default AppRouter;