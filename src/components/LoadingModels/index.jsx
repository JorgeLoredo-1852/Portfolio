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
            backgroundColor: "#000",
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