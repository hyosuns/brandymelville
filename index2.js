import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import '../../../Downloads/bar35-react/my-app/src/style.css';
import { Header, Grid, Menu, Image } from 'semantic-ui-react';
import logo from './logo.png';

class MainMenu extends React.Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Menu borderless>
            <Menu.Item name='HOME'/>
            <Menu.Item name='ABOUT'/>
            <Menu.Item name='MENU'/>
            <Menu.Item name='BEER'/>
            <Menu.Item name='SPIRITS'/>
            <Menu.Item name='GALLERY'/>
            <Menu.Item name='CALENDAR'/>
            <Menu.Item name='CONTACT'/>
          </Menu>
        </Grid.Row>
      </Grid>
    );
  }
}

class Middle extends React.Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Image medium src={logo}/>
        </Grid.Row>
        <Grid.Row>
          <Header inverted as='h2'>Happiest Hour</Header>
        </Grid.Row>
        <Grid.Row>
          <Header inverted as='h2'>Happiest Hour</Header>
        </Grid.Row>
        <Grid.Row>
          <Header inverted as='h2'>Happiest Hour</Header>
        </Grid.Row>
      </Grid>
    );
  }
}

class Bar35 extends React.Component {
  render() {
    return (
        <div>
          <MainMenu/>
          <Middle/>
        </div>
    );
  }
}

ReactDOM.render(<Bar35/>, document.getElementById('root'));
