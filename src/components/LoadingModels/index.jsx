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
  var showText = perfEntries[0].transferSize > 400 ? true : false;

  const textFont = () => {
    if(downMd){
      if(downSm){
        return "1rem"
      }
      return "1.4rem"
    }
    return "2rem"
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
        <>
        
        
        {showText ?  <div
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
            backgroundColor: "linear-gradient(90deg, rgba(2,0,15,1) 0%, rgba(18,0,57,1) 100%)",            overflow: "hidden"
          }}
        >
          <div style={{
            position:"relative",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
          }}>

            <div style={{fontSize:textFont(),fontWeight:600, fontFamily:"Georgia, Helvetica, serif", lineHeight:"1.2", textAlign:"center", marginBottom:"3rem"}}>
              "A great artist can come from anywhere." <br/> {downSm ? <br/> : <></>} – Anton Ego, Ratatouille
            </div>
            
        
              <div 
                  style={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{marginBottom:"1rem"}}><WaveSpinner size={30} frontColor="#3900BB" backColor="#2e0099" loading={true} />
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