import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import "../TopBar/Style.css"


const useStyles = makeStyles((theme) => ({
    appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1,
    },
  }))


function TopBar(){
    const classes = useStyles();
    return(
        <div>
        <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          
          <IconButton >
            <MenuIcon />
            
          </IconButton>
          

          <img src={'/images/icon_tubeyou.png'} alt='logo' className= "logo" /> <h1>CloneTube</h1 >

         
          <nav className="navbar">
            <form className="form-inline">
            <input className="form-control" type="search" placeholder="Pesquisar" aria-label="Search"/>
            <button className="btn" type="submit">Pesquisar</button>
              </form>
            </nav>


          

          

          <div className="grow" />

          <IconButton className="icons">
            <VideoCall />
          </IconButton>

          <IconButton className="icons">
            <Apps />
          </IconButton>

          <IconButton className="icons">
            <MoreVert />
          </IconButton>

          <Button
            startIcon={<AccountCircle />} 
            variant='outlined'
           color='primary'
          >
            Fazer Login
          </Button>
        </Toolbar>
        </AppBar>
        
        </div>
    )
}

export default TopBar;