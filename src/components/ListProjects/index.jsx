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

import { ListTags } from './ListTags';
import { CardList } from './CardList';
import { Tag } from '../../organisms';

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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const onClickSearchBar = (e) => {
        e.preventDefault();
    }

    return(
        <div style={{backgroundColor:"#110728", width: "100%", display:"flex", justifyContent:"center", paddingBottom:"3rem"}}>
            <div style={{maxWidth: '1260px', width:"100%"}}>
                <Grid container>
                    <Grid item xs = {12} mt={6}>
                        <Paper
                            sx={{ p: '0px 4px', border:"2px solid #560293" }}
                        >                            
                            <form onSubmit={onClickSearchBar} style={{display: 'flex', alignItems: 'center',}}>

                            <InputBase
                                sx={{ ml: 1, flex: 1, input: {color:"#560293"} }}
                                placeholder="Search Project"
                                inputProps={{ 'aria-label': 'search project' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon sx={{color:"#560293"}} />
                            </IconButton>
                            </form>
                        </Paper>
                        </Grid>
                        <Grid item xs = {12} mt={2}>
                        <Grid container spacing={2} sx={{display:"flex"}}>
                            {ListTags.map((e) => (<Tag text={e.name} key={e.name}/>))}
                        </Grid>
                    </Grid>
                    <Grid item xs = {12} mt={4}>
                        <CardList tags={["Frontend", "Backend"]} openFunc={handleOpen}/>
                    </Grid>
                </Grid>
            </div>
            <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
            </div>
        </div>  

    )
}