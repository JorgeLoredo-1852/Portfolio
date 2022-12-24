import { Grid, Box } from "@mui/material"

import { List } from "./List"
import { Card } from "../../organisms"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const CardList = ({tags, openFunc}) => {
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
    return(
            <Grid container spacing={3} rowSpacing={3} className={"card__container"} sx={{display:"flex", justifyContent: downLg ? "center" : ""}}>
                {List.map((info) => (
                    <Card info={info} key={`${info.id}-dasdada`} openFunc={openFunc}/>
                ))}   
            </Grid>
    )
}