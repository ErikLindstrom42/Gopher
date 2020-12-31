import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import FoxList from "./FoxList";

export default function ApplicationViews() {


    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    <FoxList />
                </Route>
            </Switch>
        </main>
    );
};