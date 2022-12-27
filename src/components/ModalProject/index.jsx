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
                <div style={{display:"flex", justifyContent:"flex-end", alignItem:"center", position:"absolute", right:"0", top:"-2.5rem", height:"1.5rem"}}>
                  {
                    project.twitter ? <a href={project.twitter} target="_blank" rel='nonereferrer'><img src={"/icons/twitter.svg"} style={{height:"1.8rem", width:"1.8rem",marginRight:"0.8rem"}} loading="lazy"/></a>:<></>
                  }
                                    {
                    project.youtube ? <a href={project.youtube} target="_blank" rel='nonereferrer'><img src={"/icons/youtube.svg"} style={{height:"2rem", width:"2rem",marginRight:"0.8rem", marginTop:"-0.1rem"}} loading="lazy"/></a>:<></>
                  }
                                    {
                    project.github ? <a href={project.github} target="_blank" rel='nonereferrer'><img src={"/icons/github.svg"} style={{height:"1.8rem", width:"1.8rem",marginRight:"0.8rem", marginTop:"-0.1rem"}} loading="lazy"/></a>:<></>
                  }
                                    {
                    project.link ? <a href={project.link} target="_blank" rel='nonereferrer'><img src={"/icons/link.svg"} style={{height:"1.6rem", width:"1.6rem",marginRight:"0.8rem", marginTop:"0.1rem"}} loading="lazy"/></a>:<></>
                  }
                  {
                    project.link2 ? <a href={project.link2} target="_blank" rel='nonereferrer'><img src={"/icons/link.svg"} style={{height:"1.6rem", width:"1.6rem",marginRight:"0.8rem", marginTop:"0.1rem"}} loading="lazy"/></a>:<></>
                  }
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
            <Box sx={{fontSize:"2rem", fontWeight:"600",  display:"flex", justifyContent:"space-between",flexDirection: downSm ? "column-reverse" :""}}>
              <div style={{lineHeight:"2.3rem"}}>{project.name}</div>
                    <div style={{display: downLg ? "flex" : "none", justifyContent: downSm ? "flex-Start" : "flex-end", alignItem:"center", marginBottom: downSm ? "1rem" : ""}}>
                    { project.twitter ? <a href={project.twitter} target="_blank" rel='nonereferrer'><img src={"/icons/twitter.svg"} style={{height:"1.6rem", width:"1.6rem",marginRight:"0.8rem"}} loading="lazy"/></a>:<></> }
                    { project.youtube ? <a href={project.youtube} target="_blank" rel='nonereferrer'><img src={"/icons/youtube.svg"} style={{height:"1.8rem", width:"1.8rem",marginRight:"0.8rem"}} loading="lazy"/></a>:<></> }
                    { project.github ? <a href={project.github} target="_blank" rel='nonereferrer'><img src={"/icons/github.svg"} style={{height:"1.7rem", width:"1.7rem",marginRight:"0.8rem"}} loading="lazy"/></a>:<></> }
                    { project.link ? <a href={project.link} target="_blank" rel='nonereferrer'><img src={"/icons/link.svg"} style={{height:"1.5rem", width:"1.5rem",marginRight:"0.8rem"}} loading="lazy"/></a>:<></> }
                    { project.link2 ? <a href={project.link2} target="_blank" rel='nonereferrer'><img src={"/icons/link.svg"} style={{height:"1.5rem", width:"1.5remm",marginRight:"0.8rem"}} loading="lazy"/></a>:<></> }
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
                  { project.technologies.map((t) => (<Grid item><span>{t}</span></Grid>)) }
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <div style={{overflow:"hidden", width:"100%", height:"63px"}}>
                  <div className='hideScroll'>
                                      { project.technologies.map((t) => (<img
                    src={`/technologies/${t}.png`}
                    style={{height:"40px", width:"auto", marginRight:"1.5rem", marginTop:"1rem"}}
                    loading="lazy"
                  />)) }
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        </Fade>
      </Modal>
  );
}