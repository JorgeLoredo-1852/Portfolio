import { Grid } from "@mui/material"
import { FeaturedProjects, ListProjects } from '../components'
import { Canvas } from "@react-three/fiber"

export const Projects = () =>{

    return (
        <Grid container className='app'>
            <Grid item xs={12} sx = {{height: "100vh", width:"100%"}} >
                <Canvas 
                    className='canvas' 
                    shadows
                    camera={{position: [0,30,60], fov:15}}
                >
                    <FeaturedProjects/>
                </Canvas>
            </Grid>
            <Grid item xs={12}>
                <ListProjects />
            </Grid>
        </Grid>
    )
}



/*

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