import React from 'react'; 
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

import "semantic-ui-css/semantic.min.css";

const Navigation = () => (
    <div className="ui centered grid">
        <div className="center aligned column">
            <div className="ui inverted menu orange-hover">
                <Link className="item" to="/"><Icon name="home" /> Home </Link>
                <Link className="item" to="/repositories" ><Icon name="clipboard list" /> Repositories </Link>
                <Link className="item" to="/about" ><Icon name="question circle outline" /> Acerca de </Link>
            </div>
        </div>
    </div>
)
export default Navigation;