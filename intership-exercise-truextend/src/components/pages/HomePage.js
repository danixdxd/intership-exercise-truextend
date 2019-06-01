import React from 'react'; 
import { Button } from 'semantic-ui-react';

import "../../styles/templates/HomePage.css";

class  HomePage  extends React.Component {
    constructor(props) {
        super(props);
        this.goToRepositories = this.goToRepositories.bind(this);
    }
    goToRepositories() {
        this.props.history.push('/repositories');
    }
    render() {
        return (
            <div className="homePage center-div">
                <div className="black-background">
                    <Button animated fluid inverted color="orange" size="massive" className="button-homepage" onClick={this.goToRepositories}>
                        <Button.Content visible>Click Aqui</Button.Content>
                        <Button.Content hidden>Repositorios</Button.Content>
                    </Button>
                </div>
            </div>
        )
    }
}
export  default  HomePage;
