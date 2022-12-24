import { useState, useRef, useEffect } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


import { ListTags } from './ListTags';
import { CardList } from './CardList';
import { Tag } from '../../organisms';
import { ModalProject } from '../ModalProject';
import { List } from './List';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#3900BB',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      secondary: {
          main: "#F2E5FF"
      }
    },
  });


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ListProjects = () => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const onClickSearchBar = (e) => {
        e.preventDefault();
    }

    return(
        <div style={{backgroundColor:"#110728", width: "100%", display:"flex", justifyContent:"center", paddingBottom:"3rem"}}>
            <div style={{maxWidth: '1260px', width:"100%"}}>
                <Grid container mt={6} spacing={1} sx={{padding:downLg ? "2rem" : "0.5rem"}}>
                    <Grid item xs={12}>
                        <Box
                                component="form"
                                sx={{
                                    backgroundColor:"#1D0060",
                                    position:"relative",
                                    display:"flex"
                                }}
                                noValidate
                                autoComplete="off"
                                onSubmit={onClickSearchBar}
                            >
                                <ThemeProvider theme={theme}>
                                    <TextField  color="primary" sx={{flex: 1, input:{color:"white", fontSize:"1.4rem", padding:"0.5rem 1rem"} }}/>
                                </ThemeProvider>
                                <div style={{position:"absolute", right:"8px"}}>
                                    <IconButton type="button" sx={{p:"10px" }} aria-label="search" >
                                        <SearchIcon sx={{ color: "white", fontSize:"1.6rem" }} />
                                    </IconButton>
                                </div>
                           </Box>
                        <Grid container spacing={1} sx={{display: downSm ? "none" : "flex", marginTop:"0.5rem"}}>
                            {ListTags.map((e) => (<Tag text={e.name} key={e.name}/>))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mt={4}>
                        <CardList key={"cardlist"} tags={["Frontend", "Backend"]} openFunc={handleOpen}/>
                    </Grid>
                </Grid>
            </div>
            <div>
                <ModalProject project={List[0]} open={open} onClose={handleClose}/>
            </div>
        </div>  

    )
}

/*

<Paper
                            sx={{ p: '0px 4px', border:"2px solid #3900BB" }}
                        >                            
                            <form onSubmit={onClickSearchBar} style={{display: 'flex', alignItems: 'center',}}>

                            <InputBase
                                sx={{ ml: 1, flex: 1, input: {color:"#3900BB"} }}
                                placeholder="Search Project"
                                inputProps={{ 'aria-label': 'search project' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon sx={{color:"#3900BB"}} />
                            </IconButton>
                            </form>
                        </Paper>

*/