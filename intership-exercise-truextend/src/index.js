import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import { Segment } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
    <BrowserRouter>
        <Segment inverted>
            <Navigation/>
            <App/>
            <Footer/>
        </Segment>
    </BrowserRouter>,
document.getElementById('root'));
serviceWorker.unregister();