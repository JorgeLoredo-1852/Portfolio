import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { Divider, Stack } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

export const ModalProject = ({project, open, onClose}) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: downSm ? "90%" : "75%",
    outline: "0",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection: downLg ? "column" : "row"
  };
  

  return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        sx={{backgroundColor:"rgba(9, 0, 30, 0.7)"}}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <Grid container sx={style}>
          <Grid item xs={0} lg={"auto"} sx={{backgroundColor:"#3900BB", display: downLg ? "none" : ""}}>
           <Box sx={{padding:"0", margin:"0", position:"relative"}}>
              <div style={{position:"relative"}}>
                <div style={{display:"flex", justifyContent:"flex-end", alignItem:"center", position:"absolute", right:"1rem", top:"-2.5rem", height:"1.5rem"}}>
                  <img
                      src={`/link.png`}
                      style={{height:"2rem", width:"2rem",marginRight:"0.8rem"}}
                      loading="lazy"
                  />
                  <img
                      src={`/youtube.png`}
                      loading="lazy"
                      style={{height:"2rem", width:"2rem",marginRight:"0.8rem"}}
                  />
                  <img
                      src={`/github.png`}
                      style={{height:"2rem", width:"2rem"}}
                      loading="lazy"
                  />
              </div>
              </div>
              <img
                    src={project.modalImg}
                    style={{padding:"0.5rem 0.5rem 0rem 0.5rem", maxWidth:"550px"}}
                    loading="lazy"
              />
           </Box>
          </Grid>
          <Grid item xs={12} lg={5} sx={{backgroundColor:"#1D0060", padding:"2rem"}}>
            <Box sx={{fontSize:"2rem", fontWeight:"600",  display:"flex", justifyContent:"space-between",flexDirection: downSm ? "column-reverse" :"", lineHeight:"2.3rem"}}>
              <div>{project.name}</div>
                    <div style={{display: downLg ? "flex" : "none", justifyContent: downSm ? "flex-Start" : "flex-end", alignItem:"center", marginBottom: downSm ? "1rem" : ""}}>
                      <img
                          src={`/link.png`}
                          style={{height:"2rem", width:"2rem",marginRight:"0.8rem"}}
                          loading="lazy"
                      />
                      <img
                          src={`/youtube.png`}
                          loading="lazy"
                          style={{height:"2rem", width:"2rem",marginRight:"0.8rem"}}
                      />
                      <img
                          src={`/github.png`}
                          style={{height:"2rem", width:"2rem"}}
                          loading="lazy"
                      />
                  </div>
            </Box>
            <Box sx={{fontSize:"1.2rem", fontWeight:"400", color:"#F2E5FF", marginTop:"1rem"}}>
              {project.date}
            </Box>
            <Divider color="white" sx={{marginTop:"0.8rem"}}/>
            <Box sx={{marginTop:"1rem",color:"#BBA9CE"}}>
              {project.completeDescription}
            </Box>
            <Divider color="white" sx={{marginTop:"1rem"}}/>
            <Box sx={{fontSize:"1.4rem", fontWeight:"400", marginTop:"0.8rem"}}>
              Technologies
            </Box>
            <Grid container sx={{marginTop:"0.6rem", color:"#F2E5FF"}}>
              <Grid item xs={12}>
                <Grid container columnSpacing={2}>
                  <Grid item><span>React.js</span></Grid>
                  <Grid item><span>Node.js</span></Grid>
                  <Grid item><span>Solidity</span></Grid>
                  <Grid item><span>Rust</span></Grid>
                  <Grid item><span>Express</span></Grid>
                  <Grid item><span>Material UI</span></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{marginTop:"1rem"}}>
                  <img
                    src={`/nodeLogo.png`}
                    style={{height:"50px", width:"auto", marginRight:"1rem"}}
                    loading="lazy"
                  />

                  <img
                    src={`/reactLogo.png`}
                    style={{height:"50px", width:"auto", marginRight:"1rem"}}
                    loading="lazy"
                  />

                  <img
                    src={`/nodeLogo.png`}
                    style={{height:"50px", width:"auto", marginRight:"1rem"}}
                    loading="lazy"
                  />

                  <img
                    src={`/reactLogo.png`}
                    style={{height:"50px", width:"auto", marginRight:"1rem"}}
                    loading="lazy"
                  />
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
        </Fade>
      </Modal>
  );
}