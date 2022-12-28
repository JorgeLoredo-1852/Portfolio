import { Grid } from "@mui/material"
import { FeaturedProjects, ListProjects } from '../components'
import { Canvas } from "@react-three/fiber"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from "react-intersection-observer";


export const Projects = () =>{
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    const { ref, inView } = useInView();

    console.log(inView)

    return (
        <Grid container className='app container1' sx={{backgroundColor:"#0b051a"}} >
            <Grid item xs={12} sx = {{height: "100vh", width:"100%"}} className='section1'>
                <div ref={ref} style = {{width:"100%"}} className='fullMinus1'>
                <Canvas 
                    className='canvas' 
                    shadows
                    camera={{position: [0,30,60], fov:15}}
                    gl={{ antialias: false }}
                >
                    {inView && <FeaturedProjects/>}
                </Canvas>
                </div>
            </Grid>
            <Grid item xs={12} className='section2'>
                <ListProjects />
            </Grid>
        </Grid>
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