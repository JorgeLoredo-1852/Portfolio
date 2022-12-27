import { useState, useRef, useEffect } from 'react'
import { Grid, Button } from "@mui/material"


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#1D0060',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      secondary: {
          main: "#F2E5FF"
      }
    },
  });

export const Tag = ({text, changeActive, initialActive}) =>{
    const [active, setActive] = useState(false)

    useEffect(()=>{
      if(initialActive){
        setActive(false)
      }
    },[initialActive])

    const onCLickButton = () =>{
        changeActive(text)
        setActive(!active)
    }

    //console.log(active)

    return(
        <Grid item key={text}> 
            <ThemeProvider theme={theme}>
                <Button variant={active ? "contained" : "outlined"} color= {active ? 'primary' : 'secondary'} onClick={onCLickButton}>
                    {text}
                </Button>
            </ThemeProvider>
        </Grid>
    )
}