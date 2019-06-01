import React from 'react'; 
import { Container, Divider, Grid, Header, Icon, List, Segment } from 'semantic-ui-react';

const Footer = () => (
    <Segment inverted vertical>
        <Container textAlign='center'>
            <Grid divided inverted stackable>
            <Grid.Column width={8}>
                <Header inverted as='h4' content='Redes sociales' />
                <List link inverted>
                    <List.Item as='a'><Icon name='whatsapp' />Whatsapp</List.Item>
                    <List.Item as='a'><Icon name='facebook' />Facebook</List.Item>
                    <List.Item as='a'><Icon name='instagram' />Instagram</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header inverted as='h4' content='Truextend' />
                <p>
                    TRUEXTEND, Inc. is a California-based company specializing in extending the engineering capabilities of any business throughout the United States and Canada. We increase the intellectual production of our clients by providing the best human resources through a  Nearshore model . Headquartered in Silicon Valley, TRUEXTEND runs Nearshore R&D centers in Latin America to provide cost effective solutions to our clients.
                </p>
            </Grid.Column>
            </Grid>

            <Divider inverted section />
            <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
                Mapa
            </List.Item>
            <List.Item as='a' href='#'>
                Contactanos
            </List.Item>
            <List.Item as='a' href='#'>
                Terminos de condiciones
            </List.Item>
            <List.Item as='a' href='#'>
                Politica de privacidad
            </List.Item>
            </List>
        </Container>
    </Segment>
)
export default Footer;