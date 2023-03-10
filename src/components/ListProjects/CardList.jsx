import { Grid, Box } from "@mui/material"

import { List } from "./List"
import { Card } from "../../organisms"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from "react";

export const CardList = ({tags, openFunc, showAll, search}) => {
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    let founded = 0;

    const foundAtLeastOne = () =>{
        founded = founded + 1
    }

    return(
            <Grid container spacing={3} rowSpacing={3} className={"card__container"} sx={{display:"flex", height:"100%", justifyContent: downLg ? "center" : ""}}>
                {List.map((info) => {
                    if(search){
                        if(info.name.toLowerCase().includes(search.toLowerCase()) || info.description.toLowerCase().includes(search.toLowerCase()) || info.date.toLowerCase().includes(search.toLowerCase())){
                            foundAtLeastOne()
                            return(<Card info={info} key={`${info.id}-dasdada`} openFunc={openFunc}/>)
                        }
                        for(let idx = 0; idx < info.technologies.length; idx++){
                            if(info.technologies[idx].toLowerCase().includes(search.toLowerCase())){
                                foundAtLeastOne()
                                return(<Card info={info} key={`${info.id}-dasdada`} openFunc={openFunc}/>)
                            }
                        }
                    }
                    else if(showAll){
                        return(<Card info={info} key={`${info.id}-dasdada`} openFunc={openFunc}/>)
                    } else {
                        for(let idx = 0; idx < info.tags.length; idx++){
                            if(tags[`${info.tags[idx]}`]){
                                return(<Card info={info} key={`${info.id}-dasdada`} openFunc={openFunc}/>)
                            }
                        }
                    }  
                })}
                {
                    founded == 0 && search ? 
                        <Grid item xs={12} sx={{display:"flex",justifyContent:"center"}}>
                        <div style={{width:downMd ? "80%" : "50%",marginTop:"4rem", display:"flex", alignItems:"center", flexDirection: downSm ? "column" : "row"}}>
                            <img src={"/icons/Group.svg"} style={{height:"5rem", width:"5rem",marginRight: downSm ? "0":"2rem", marginBottom: downSm ? "2rem":"0"}}/>
                            <div style={{fontSize:downMd?"1.6rem":"2rem", lineHeight:"2.5rem", color:"#BBA9CE", textAlign:downSm?"center":"start"}}>Didn't find a project with that name, technology, date or description :(((</div>
                        </div> 
                        </Grid>
                        : <></>
                }
            </Grid>
    )
}