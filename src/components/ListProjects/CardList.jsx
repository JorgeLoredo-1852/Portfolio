import { Grid } from "@mui/material"

import { ListProjects } from "./ListProjects"
import { Card } from "../../organisms"

export const CardList = ({tags, openFunc}) => {
    return(
        <Grid container spacing={2} className={"card__container"}>
            {ListProjects.map((info) => (
                <Card info={info} key={info.name} openFunc={openFunc}/>
            ))}
        </Grid>
    )
}