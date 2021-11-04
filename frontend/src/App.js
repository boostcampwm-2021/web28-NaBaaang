import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={MainPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
