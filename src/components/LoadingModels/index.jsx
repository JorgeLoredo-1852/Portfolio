import { BarLoader, MoonLoader } from "react-spinners";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CubeSpinner, GooSpinner, PongSpinner, WaveSpinner } from "react-spinners-kit";


export const LoadingModels = ({progress}) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  
  var perfEntries = window.performance.getEntriesByType("navigation");
  var showText = perfEntries[0].transferSize > 700 ? true : false;
console.log(perfEntries[0].transferSize)
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
        return "1rem"
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
        className={progress == 100 ? "hideLoading" :""}
          style={{
            position:"absolute",
            display:"flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 110,
            background: "rgb(3,0,24)",
            background: "linear-gradient(0, rgba(2,0,15,1) 0%, rgba(57,0,187,1) 100%)",            overflow: "hidden"
          }}
        >
          <div style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
          }}>

            <div style={{fontSize:textFont(),fontWeight:600, fontFamily:"Copperplate Gothic Light, Helvetica, sans-serif", lineHeight:"1.6", textAlign:"center", marginBottom: downMd ? "2rem" : "3rem"}}>
              "A great artist can come from anywhere." <br/> {downSm ? <br/> : <></>}  – Anton Ego, Ratatouille
            </div>
            
        
              <div 
                  style={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{marginBottom:"1rem"}}><WaveSpinner size={loaderSize()} color="#3900BB" loading={true} />
                </div>
                <div
                style={{
                  color: "#c2c2c2",
                  fontSize: textFont3(),
                  lineHeight: "1.1",
                  fontFamily:"Copperplate Gothic Light, Helvetica, sans-serif"
                    }}
                  >
                    {Math.round(progress * 10) / 10}%
                </div>

                </div>
            </div>
        </div>      
        : 
        
        <div
          style={{
            display: "flex",
            position:"relative",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
                background: "rgb(3,0,24)",
                backgroundColor: "#05000f",
            overflow: "hidden"
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
                <div style={{marginBottom:"1rem"}}><PongSpinner size={100} color="#4700e8" backColor="white" loading={true} />
                </div>
                <div
                style={{
                  color: "#ffffff",
                  fontSize: textFont3(),
                  lineHeight: "1.1",
                    }}
                  >
                    {Math.round(progress * 10) / 10}%
                </div>

                </div>
            </div>
        </div>
        
    
        }
        
        </>)
}