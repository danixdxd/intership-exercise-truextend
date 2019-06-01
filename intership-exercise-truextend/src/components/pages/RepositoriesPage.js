import React from 'react'; 
import { Segment, Image, Card, Button } from 'semantic-ui-react';
import ReactFileReader from 'react-file-reader';

import defaultAvatarUrlPicture from "../../styles/images/github-image.jpg";

class RepositoriesPage  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfCards: []
        }
        this.handleFiles = this.handleFiles.bind(this);
        this.decodeData = this.decodeData.bind(this);
        this.updateListOfCards = this.updateListOfCards.bind(this);
    }
    handleFiles = (files) => {
        var decodedData = this.decodeData(files.base64);
        var parsedData = JSON.parse(decodedData);
        var listOfCards = this.makeListOfCards(parsedData);
        this.updateListOfCards(listOfCards);
    }
    decodeData(base64Data) {
        return atob((base64Data).replace("data:application/json;base64,",""));
    }
    makeListOfCards(data) {
        var listOfCards = []
        data.users.forEach(cardData => {
            listOfCards.push(this.makeCard(cardData));
        });
        return listOfCards;
    }
    makeCard(cardData) {
        var { avatar_url, nickName, name, githubLink} = cardData;
        if(!this.isThereAnAvatarUrl(avatar_url)){
            avatar_url = defaultAvatarUrlPicture;
        }
        return (
            <Card>
                <Image src={avatar_url} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    {nickName}
                </Card.Description>
                <a className="ui button inverted orange small" href={githubLink}>Link github</a>
                </Card.Content>
            </Card>
        );
    }
    isThereAnAvatarUrl(avatar_url) {
        return avatar_url !== undefined;
    }
    updateListOfCards(listOfCards) {
        this.setState({listOfCards});
    }
    render() {
        return (
            <Segment inverted>
                <ReactFileReader fileTypes={".json"} base64={true} handleFiles={this.handleFiles}>
                    <Button className='btn' inverted color="orange">Upload File</Button>
                </ReactFileReader>
                <Card.Group>
                    {this.state.listOfCards}
                </Card.Group>
            </Segment>
        )
    }
}
export  default  RepositoriesPage;