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
import { Courses } from '../Courses';

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

export const ListProjects = ({handleNextPage}) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const [detailProject, setDetailProject] = useState(List[0])
    const [activeTags, setActiveTags] = useState({"Frontend":false,"Backend":false,"IOT":false,"Web 3.0":false,"Databases":false,"Unity":false,"Docs":false,"Competition":false,"3D Modeling":false,"Simulation":false, "Mobile":false})
    const [showAll, setShowAll] = useState(true)
    const [search, setSearch] = useState(null)
    const [notFound, setNotFound] = useState(false)
    const [actualTab, setActualTab] = useState(0)

    const changeTab = (tab) => {
        setActualTab(tab)
        setActiveTags({"Frontend":false,"Backend":false,"IOT":false,"Web 3.0":false,"Databases":false,"Unity":false,"Docs":false,"Competition":false,"3D Modeling":false,"Simulation":false, "Mobile":false})
    }
 
    const handleOpen = (project) => {
        setOpen(true);
        setDetailProject(project)
    }
    const handleClose = () => setOpen(false);
    
    const onClickSearchBar = (e) => {
        e.preventDefault();
        setActiveTags({"Frontend":false,"Backend":false,"IOT":false,"Web 3.0":false,"Databases":false,"Unity":false,"Docs":false,"Competition":false,"3D Modeling":false,"Simulation":false, "Mobile":false})
        setSearch(event.target[0].value)
        event.target[0].value = ""
    }

    const activeItem = (tag) =>{
        setActiveTags({...activeTags, [`${tag}`] : !activeTags[`${tag}`]})
        setShowAll(false)
        setSearch(null)
    }

    useEffect(()=>{
        let allInactive = true;
        for (const property in activeTags) {
            if (activeTags[property]){
                allInactive = false
                break
            }
        }
        if(allInactive){
            setShowAll(true)
        }    
    },[activeTags])

    return(
        <div style={{backgroundColor:"#110728", width: "100%", display:"flex", justifyContent:"center", paddingBottom:"3rem"}}>
            <div style={{maxWidth: '1200px', width:"100%", minHeight:"100vh", padding:downLg ? "2rem" : "0.5rem"}}>


            <div className="report__tabs">
                <div className={"report__tabs--tab"}>
                    <span onClick={()=>{handleNextPage(); changeTab(0)}} className={actualTab === 0 ? "report__tabs--bg tab__active" : "report__tabs--bg"}>
                        <p className="report__tabs--text">PROJECTS</p>
                    </span>
                </div>
                <div className={"report__tabs--tab"}>
                    <span onClick={()=>{handleNextPage(); changeTab(1)}} className={actualTab === 1 ? "report__tabs--bg tab__active" : "report__tabs--bg"}>
                        <p className="report__tabs--text">EXTRAS</p>
                    </span>
                </div> 
            </div>

            {
                actualTab === 0 ? 
                <Grid container mt={1} spacing={1}>
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
                            {ListTags.map((e) => (<Tag text={e.name} key={e.name} changeActive = {activeItem} initialActive={search}/>))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mt={4}>
                        <CardList key={"cardlist"} tags={activeTags} openFunc={handleOpen} showAll={showAll} search={search}/>
                    </Grid>
                </Grid> : 
                <Courses/>
            }

            </div>
            <div>
                <ModalProject project={detailProject} open={open} onClose={handleClose}/>
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