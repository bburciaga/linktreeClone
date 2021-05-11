import './App.css';
import React, { /*useState*/ } from 'react';
import { observer } from 'mobx-react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import UserStore from './stores/UserStore';
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';


import CustomBtn from './components/CustomBtn'
import EditBtn from './components/EditBtn'

/* Admin */
/*
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './components/Posts';
import { UserList } from './components/Users';

import Dashboard from './components/Dashboard';
import jsonServerProvider from 'ra-data-json-server';


/* Admin */
/*
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} />
  </Admin>
);



*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
})

class App extends React.Component {

  async componentDidMount() {
    
    try{
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    
    try{
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      } 
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    if (UserStore.loading) {

      return (
        <div className="App">
          Loading, please wait..
        </div>
      );

    } else {

      if (UserStore.isLoggedIn) {
        return (
          <div className="App profilePage">
            <h1>Brian Burciaga</h1>
            <ThemeProvider theme={theme}>
              <a href="https://www.instagram.com/brian_asiago/" rel="noopener noreferrer">
                <CustomBtn txt="Instagram"/>
              </a>
              <a href="https://twitter.com/TheBrianAsiago" rel="noopener noreferrer">
                <CustomBtn txt="Twitter"/>
              </a>
              <a href="https://www.linkedin.com/feed/" rel="noopener noreferrer">
                <CustomBtn txt="LinkedIn"/>
              </a>
            </ThemeProvider>
            <footer>
              <CustomBtn 
                txt={'Log out'}
                disabled={false}
                onClick={() => this.doLogout() }
                />
              <EditBtn />
            </footer>
          </div>
        );
      }
      else {
        return (
          <div className="App">
            <LoginForm />
          </div>
        );
      }
      
    }

  }
    
}

export default observer(App);
