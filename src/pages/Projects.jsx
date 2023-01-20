import { Grid } from "@mui/material"
import { FeaturedProjects, JGx, ListProjects, NewNav } from '../components'
import { useProgress} from '@react-three/drei'

import { Canvas } from "@react-three/fiber"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from "react-intersection-observer";

import { useState, useRef, useEffect } from "react";
import { List } from "../components/ListProjects/List";
import { ModalProject, LoadingModels } from "../components";

export const Projects = ({setInView}) =>{  
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
    
    const [modalProject, setModalProject] = useState(List[0])
    const [open, setOpen] = useState(false);
    const refListPage = useRef(null)

    const { ref, inView } = useInView();

    const { active, progress, errors, item, loaded, total } = useProgress()
    const [chargeComplete, setChargeComplete] = useState(false)
    

    useEffect(()=>{
        if(!inView && progress == 100){
            setInView(false)
        } else {
            setInView(true)
        }
    },[inView])

    useEffect(()=>{
        if(progress == 100){
            setChargeComplete(true)
        }
    }, [progress])

    const handleOpen = (project) => {
        setOpen(true);
        setModalProject(project)
    }

    const handleNextPage = () => {
        refListPage.current?.scrollIntoView({behavior: 'smooth'});
    }

    const handleClose = () => setOpen(false);

    console.log(inView)

    return (
        <>
        <Grid container className='app container1' sx={{overflowX:"hide", backgroundColor:"black"}} >
            <Grid item xs={12} sx = {{height: "100vh", width:"100%", overflow: "hidden"}} className='section1'>
                <JGx notHide={inView} />
                <div ref={ref} style = {{width:"100%",  overflow: "hidden"}} className='fullMinus1'>
                    <ModalProject project={modalProject} open={open} onClose={handleClose}/>
                    {
                        chargeComplete ? 
                                                <Canvas 
                            className='canvas' 
                            shadows
                            camera={{position: [0,30,60], fov:15}}
                            gl={{ antialias: false }}
                        >
                            {inView && <FeaturedProjects openModalFunc={handleOpen} handleNextPage = {handleNextPage}/>}
                            
                        </Canvas>
                        :
                        <LoadingModels progress={progress}/>
                    }

                </div>
            </Grid>
            <Grid item xs={12} className="section3" ref={refListPage}>
                
                </Grid>    
            <Grid item xs={12} className='section2'>
                <ListProjects/>
            </Grid> 
            <Grid item xs={12} className="section3">
                
                </Grid>      

        </Grid>
        </>
    )
}



/*
            <Grid item xs={12} sx = {{height: downSm ? "90vh" : "100vh", width:"100%"}} className='section1'>

<Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                    position:"relative",
                                    display:"flex"
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <ThemeProvider theme={theme}>
                                    <TextField  color="primary" focused sx={{flex: 1, input:{color:"#560293", fontSize:"1.4rem"} }}/>
                                </ThemeProvider>
                                <div style={{position:"absolute", top:"1px", right:"10px"}}>
                                    <IconButton type="button" sx={{p:"10px" }} aria-label="search" >
                                        <SearchIcon fontSize='large' sx={{ color: "#560293" }} />
                                    </IconButton>
                                </div>
                           </Box>


*/