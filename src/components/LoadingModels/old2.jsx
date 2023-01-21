import { useEffect, useState } from "react";
import { CubeSpinner } from "react-spinners-kit";


export const LoadingModels = ({progress}) => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if(progress == 100){
      setLoading(true)
    }
  },[progress])
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
            background: "rgb(3,0,24)",
            background: "linear-gradient(90deg, rgba(3,0,24,1) 0%, rgba(15,0,55,1) 49%, rgba(38,0,124,1) 100%)",
            zIndex: 100,
          }}
        >
          <div style={{marginBottom:"2rem"}}><CubeSpinner size={50} frontColor="#3900BB" backColor="#2e0099" loading={loading} />
</div>

            <div
              style={{
                color: "#2e0099",
                fontSize: "1.4rem",
                lineHeight: "1.1",
                
              }}
            >
              {Math.round(progress * 10) / 10}%
            </div>
            <div style={{

            }}>
            </div>

        </div>    )
}