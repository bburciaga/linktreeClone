import React, { PureComponent } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import UserStore from '../stores/UserStore';
import CustomBtn from './CustomBtn'
import EditBtn from './EditBtn'

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

class ProfilePage extends PureComponent {

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
        if(UserStore.isLoggedIn){
        return (
            <div className="profilePage">
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
        )
        }
    }
}

export default ProfilePage