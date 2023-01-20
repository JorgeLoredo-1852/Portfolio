import { BarLoader, MoonLoader } from "react-spinners";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export const LoadingModels = ({progress}) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  const textFont = () => {
    if(downMd){
      if(downSm){
        return "1.4rem"
      }
      return "1.8rem"
    }
    return "2.6rem"
  }
  const textFont2 = () => {
    if(downMd){
      if(downSm){
        return "1.2rem"
      }
      return "1.6rem"
    }
    return "2rem"
  }
  const textFont3 = () => {
    if(downMd){
      if(downSm){
        return "1rem"
      }
      return "1.2rem"
    }
    return "1.4rem"
  }
  const loaderSize = () => {
    if(downMd){
      if(downSm){
        return 60
      }
      return 80
    }
    return 90
  }

    return (
        <div
          style={{
            display: "flex",
            position:"relative",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            background: "rgb(30,12,71)",
            background: "linear-gradient(0deg, rgba(3,0,24,1) 0%, rgba(24,9,121,1) 50%, rgba(57,0,187,1) 100%)",
            zIndex: 100,
          }}
        >
          <div style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
          }}>
            <div style={{fontSize:textFont(),fontWeight:600, fontFamily:"Georgia, Helvetica, serif", lineHeight:"1.2", textAlign:"center", marginBottom:"1.8rem"}}>
              "A great artist can come from anywhere." <br/> {downSm ? <br/> : <></>} – Anton Ego, Ratatouille
            </div>
            
              
<div 
                  style={{position:"relative", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div
                style={{
                  color: "#ffffff",
                  fontSize: textFont3(),
                  lineHeight: "1.1",
                  position: "absolute"
                    }}
                  >
                    {Math.round(progress * 10) / 10}%
                </div>
                  <div style={{
                  }}>
                  <MoonLoader
                    color={"#ffffff"}
                    loading={true}
                    size = {loaderSize()}
                  />
                  </div>
                </div>
         
            </div>
            
        </div>    )
}