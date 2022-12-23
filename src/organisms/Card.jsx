import { Grid, Box, Divider } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Tag } from "./Tag"

export const Card = ({ info, key, openFunc }) => {
  return (
    <Grid item xs = {3} key={key}>
        <div className="card">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Box container sx={{padding:"15px", width:"100%"}}>
                <Box item>
                    <div sx={{position:"relative"}}>
                        <h2 className="card__number">{info.name}</h2>
                        <img src={info.img} className="card__image" alt="dasd" />
                    </div>
                </Box>
                <Divider sx={{marginTop:"5px"}} color="#BBA9CE"/>
                {/*<div style={{overflowX:"hidden", width:"100%", whiteSpace:"nowrap"}}>*/}
                <Carousel autoplay cycleNavigation navButtonsAlwaysInvisible indicators={false}>
                    {info.tags.map((e) => (
                        <div style={{display:"inline-block", textAlign:"center", width:"100%", fontWeight:"300", color:"#BBA9CE"}}>
                            {e}
                        </div>
                    ))}
                </Carousel>
                <Divider color="#BBA9CE"/>

                <Box>
                    <div className="card__date">
                        {info.date}
                    </div>
                    <div className="card__description">
                        {info.description}
                    </div>
                </Box>
                <Box item xs={12} sx={{display:"flex", justifyContent:"center"}}>
                    <div className="card__button" onClick={openFunc}>
                        <p>View Details</p>
                    </div>
                </Box>
            </Box>
        </div>
    </Grid>
  );
};

