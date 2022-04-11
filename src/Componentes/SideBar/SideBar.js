import React from 'react';
import {makeStyles,Toolbar,Drawer,Button,List,Typography,Divider,ListItem,ListItemIcon,ListItemText,ListSubheader,Box,Grid,Hidden} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import "../SideBar/Style.css"

const useStyles = makeStyles((theme) => ({
  
    drawerPaper: { width: 240, borderRight: 'none', },}));

const videos = [
  {
    id: 1,
    title:'SIDOKA - Podpah #214',
    channel: 'Podpah',
    views: '12.364.525 visualizações',
    date: 'há 7 meses',
    thumb: '/images/podpah1.jpg',
  },
  {
    id: 2,
    title:'TIJOLINHO! - MELHORES CLIPES',
    channel: 'Alanzoka',
    views: '7.112.201 visualizações',
    date: 'há 4 anos',
    thumb: '/images/alan1.jpg',
  },
  {
    id: 3,
    title:'JOGANDO MINECRAFT - ESPECIAL 6 MILHÕES',
    channel: 'games eduUu',
    views: '11.297.301 visualizações',
    date: 'há 1 semana',
    thumb: '/images/edu1.jpg',
  },
  {
    id: 4,
    title:'SK Gaming - The Dream with English CC',
    channel: 'FallenInsider',
    views: '1.864.266 visualizações',
    date: 'há 4 anos',
    thumb: '/images/csgo1.jpg',
  },
  {
    id: 5,
    title:'o HACKER que invadiu a NASA e o PENTÁGONO aos 15 anos ',
    channel: 'stacks',
    views: '198.524 visualizaçõe',
    date: 'há 3 dias',
    thumb: '/images/stacks.jpg',
  },
  {
    id: 6,
    title: '24x VERDÃO!🏆 | PALMEIRAS 4 x 0 SÃO PAULO | MELHORES MOMENTOS | FINAL | PAULISTÃO...',
    channel: 'Paulistão',
    views: '1.205.218 mi de  visualizações',
    date: 'há 1 semana',
    thumb: '/images/pal1.jpg',
  },
  {
    id: 7,
    title:'LUCAS INUTILISMO & DIOGO DEFANTE - Podpah #129',
    channel: 'Podpah',
    views: '5.274.537 visualizações',
    date: 'há 10 meses',
    thumb: '/images/podpah2.jpg',
  },
  {
    id: 8,
    title:'“FAZER LIVE DÁ MAIS FUTURO QUE ESTUDAR”',
    channel: 'Diggo',
    views: '679.698 visualizações',
    date: 'há 5 meses',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/diggo1.jpg',
  },
  {
    id: 9,
    title:'BICHO TÁ ATACADO! - Friday the 13th: The Game ',
    channel: 'Games eduUu',
    views: '11.034.464 visualizações',
    date: 'há 4 anos',
    thumb: '/images/edu2.jpg',
  },
  {
    id: 10,
    title:'A LENDA DE FABINHO E SCARLAITI DE ORR',
    channel: 'Alanzoka',
    views: '16.747.791 visualizações',
    date: 'há 4 anos',
    thumb: '/images/alan2.jpg',
  },
  {
    id: 11,
    title:'PALMEIRAS É CAMPEÃO DA LIBERTADORES EM FINAL ÉPICO! ',
    channel: 'ESPN brasil',
    views: '1.349.050 visualizações',
    date: 'há 1 ano',
    thumb: '/images/pal2.jpg',
  },
  {
    id: 12,
    title:'WHINDERSSON NUNES - Podpah #316',
    channel: 'Podpah',
    views: '4.519.190 visualizações',
    date: 'há 2 meses',
    thumb: '/images/podpah3.jpg',
  },
  {
    id: 1,
    title:'SIDOKA - Podpah #214',
    channel: 'Podpah',
    views: '12.364.525 visualizações',
    date: 'há 7 meses',
    thumb: '/images/podpah1.jpg',
  },
  {
    id: 2,
    title:'TIJOLINHO! - MELHORES CLIPES',
    channel: 'Alanzoka',
    views: '7.112.201 visualizações',
    date: 'há 4 anos',
    thumb: '/images/alan1.jpg',
  },
  {
    id: 3,
    title:'JOGANDO MINECRAFT - ESPECIAL 6 MILHÕES',
    channel: 'games eduUu',
    views: '11.297.301 visualizações',
    date: 'há 1 semana',
    thumb: '/images/edu1.jpg',
  },
  {
    id: 4,
    title:'SK Gaming - The Dream with English CC',
    channel: 'FallenInsider',
    views: '1.864.266 visualizações',
    date: 'há 4 anos',
    thumb: '/images/csgo1.jpg',
  },
  {
    id: 5,
    title:'o HACKER que invadiu a NASA e o PENTÁGONO aos 15 anos ',
    channel: 'stacks',
    views: '198.524 visualizaçõe',
    date: 'há 3 dias',
    thumb: '/images/stacks.jpg',
  },
  {
    id: 6,
    title: '24x VERDÃO!🏆 | PALMEIRAS 4 x 0 SÃO PAULO | MELHORES MOMENTOS | FINAL | PAULISTÃO...',
    channel: 'Paulistão',
    views: '1.205.218 mi de  visualizações',
    date: 'há 1 semana',
    thumb: '/images/pal1.jpg',
  },
  {
    id: 7,
    title:'LUCAS INUTILISMO & DIOGO DEFANTE - Podpah #129',
    channel: 'Podpah',
    views: '5.274.537 visualizações',
    date: 'há 10 meses',
    thumb: '/images/podpah2.jpg',
  },
  {
    id: 8,
    title:'“FAZER LIVE DÁ MAIS FUTURO QUE ESTUDAR”',
    channel: 'Diggo',
    views: '679.698 visualizações',
    date: 'há 5 meses',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/diggo1.jpg',
  },
  {
    id: 9,
    title:'BICHO TÁ ATACADO! - Friday the 13th: The Game ',
    channel: 'Games eduUu',
    views: '11.034.464 visualizações',
    date: 'há 4 anos',
    thumb: '/images/edu2.jpg',
  },
  {
    id: 10,
    title:'A LENDA DE FABINHO E SCARLAITI DE ORR',
    channel: 'Alanzoka',
    views: '16.747.791 visualizações',
    date: 'há 4 anos',
    thumb: '/images/alan2.jpg',
  },
  {
    id: 11,
    title:'PALMEIRAS É CAMPEÃO DA LIBERTADORES EM FINAL ÉPICO! ',
    channel: 'ESPN brasil',
    views: '1.349.050 visualizações',
    date: 'há 1 ano',
    thumb: '/images/pal2.jpg',
  },
  {
    id: 12,
    title:'WHINDERSSON NUNES - Podpah #316',
    channel: 'Podpah',
    views: '4.519.190 visualizações',
    date: 'há 2 meses',
    thumb: '/images/podpah3.jpg',
  },
  {
    id: 1,
    title:'SIDOKA - Podpah #214',
    channel: 'Podpah',
    views: '12.364.525 visualizações',
    date: 'há 7 meses',
    thumb: '/images/podpah1.jpg',
  },
  {
    id: 2,
    title:'TIJOLINHO! - MELHORES CLIPES',
    channel: 'Alanzoka',
    views: '7.112.201 visualizações',
    date: 'há 4 anos',
    thumb: '/images/alan1.jpg',
  },
  {
    id: 3,
    title:'JOGANDO MINECRAFT - ESPECIAL 6 MILHÕES',
    channel: 'games eduUu',
    views: '11.297.301 visualizações',
    date: 'há 1 semana',
    thumb: '/images/edu1.jpg',
  },
  {
    id: 4,
    title:'SK Gaming - The Dream with English CC',
    channel: 'FallenInsider',
    views: '1.864.266 visualizações',
    date: 'há 4 anos',
    thumb: '/images/csgo1.jpg',
  },
  {
    id: 5,
    title:'o HACKER que invadiu a NASA e o PENTÁGONO aos 15 anos ',
    channel: 'stacks',
    views: '198.524 visualizaçõe',
    date: 'há 3 dias',
    thumb: '/images/stacks.jpg',
  },
  {
    id: 6,
    title: '24x VERDÃO!🏆 | PALMEIRAS 4 x 0 SÃO PAULO | MELHORES MOMENTOS | FINAL | PAULISTÃO...',
    channel: 'Paulistão',
    views: '1.205.218 mi de  visualizações',
    date: 'há 1 semana',
    thumb: '/images/pal1.jpg',
  },
  {
    id: 7,
    title:'LUCAS INUTILISMO & DIOGO DEFANTE - Podpah #129',
    channel: 'Podpah',
    views: '5.274.537 visualizações',
    date: 'há 10 meses',
    thumb: '/images/podpah2.jpg',
  },
  {
    id: 8,
    title:'“FAZER LIVE DÁ MAIS FUTURO QUE ESTUDAR”',
    channel: 'Diggo',
    views: '679.698 visualizações',
    date: 'há 5 meses',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/diggo1.jpg',
  },
  {
    id: 9,
    title:'BICHO TÁ ATACADO! - Friday the 13th: The Game ',
    channel: 'Games eduUu',
    views: '11.034.464 visualizações',
    date: 'há 4 anos',
    thumb: '/images/edu2.jpg',
  },
  {
    id: 10,
    title:'A LENDA DE FABINHO E SCARLAITI DE ORR',
    channel: 'Alanzoka',
    views: '16.747.791 visualizações',
    date: 'há 4 anos',
    thumb: '/images/alan2.jpg',
  },
  {
    id: 11,
    title:'PALMEIRAS É CAMPEÃO DA LIBERTADORES EM FINAL ÉPICO! ',
    channel: 'ESPN brasil',
    views: '1.349.050 visualizações',
    date: 'há 1 ano',
    thumb: '/images/pal2.jpg',
  },
  {
    id: 12,
    title:'WHINDERSSON NUNES - Podpah #316',
    channel: 'Podpah',
    views: '4.519.190 visualizações',
    date: 'há 2 meses',
    thumb: '/images/podpah3.jpg',
  },
];

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Box display='flex'>
        <Hidden mdDown>
        <Drawer
            className="drawer"
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText className="listItemText"
                    primary={'Início'}
                  />
                </ListItem>
                <ListItem button className="listItem">
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Em alta'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Inscrições'}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Biblioteca'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Histórico'}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={7}>
                <Typography variant='body2'>
                  Faça login para curtur vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant='outlined'
                    color='primary'
                    startIcon={<AccountCircle />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
              <Divider />
            </div>
          </Drawer>
        </Hidden>
        
        {/* configurações das imagens */}
        <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
export default Sidebar;