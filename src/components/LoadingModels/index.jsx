import { BarLoader, BounceLoader, MoonLoader } from "react-spinners";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CubeSpinner, GooSpinner, PongSpinner, WaveSpinner } from "react-spinners-kit";
import { useEffect, useState } from "react";


export const LoadingModels = ({progress}) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  const [onlyOnce, setOnlyOne] = useState(progress == 100 ? false : true)
  
  var perfEntries = window.performance.getEntriesByType("navigation");
  var showText = perfEntries[0].transferSize > 700 ? true : false;
console.log(perfEntries[0].transferSize)

  useEffect(()=>{
    if(progress == 100){
      setOnlyOne(false)
    }
  }, [progress])

  const classHide = () => {
    if(progress == 100){
      if(onlyOnce){
        return "hideLoading"
      }
      return "hideForever"
    }
    return ""
  }

  const textFont = () => {
    if(downMd){
      if(downSm){
        return "1.4rem"
      }
      return "1.9rem"
    }
    return "2.4rem"
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
        return "1.1rem"
      }
      return "1.3rem"
    }
    return "1.6rem"
  }
  const loaderSize = () => {
    if(downMd){
      if(downSm){
        return 30
      }
      return 35
    }
    return 45
  }
    return (
        <>
        
        
        {showText ?  <div
        //className={progress == 100 ? "hideLoading" :""}
          style={{
            position:"absolute",
            display:"flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 140,
            background: "#000",            overflow: "hidden"
          }}
        >
          <div style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            overflow: "hidden",
            padding: downSm ? "0 2rem" :"0"
          }}>

            <div style={{fontSize:textFont(),textTransform:"uppercase", fontWeight:500, fontFamily:"Bahnschrift, Helvetica, sans-serif", lineHeight:"1.6", textAlign:"center", marginBottom: downMd ? "2rem" : "1rem"}}>
              "A great artist can come from anywhere." <br/> {downSm ? <br/> : <></>}  – Anton Ego, Ratatouille
            </div>
            
        
              <div 
                  style={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{marginBottom:"1.5rem"}}>
                <BarLoader height={4} width={100} color="#3900BB" />
                </div>
                <div
                style={{
                  color: "#ababab",
                  fontSize: textFont3(),
                  lineHeight: "1.1",
                  fontFamily:"Bahnschrift, Helvetica, sans-serif"
                    }}
                  >
                    {Math.round(progress * 10) / 10}%
                </div>

                </div>
            </div>
        </div>      
        : 
        
        <div
        className={progress == 100 ? "hideLoading" :""}
          style={{
            position:"absolute",
            display:"flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 140,
            background: "#000",            overflow: "hidden"
          }}
        >
          <div style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
          }}>
            
        
              <div 
                  style={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

                <div
                style={{
                  color: "#ffffff",
                  fontSize: "1.4rem",
                  lineHeight: "1.1",
                  marginBottom:"1rem"
                    }}
                  >
                    { downSm ? Math.round(progress) : Math.round(progress * 10) / 10}%
                </div>
                <div >                <BarLoader height={4} width={100} color="#3900BB" />

                </div>
                </div>
            </div>
        </div>
        
    
        }
        
        </>)
}