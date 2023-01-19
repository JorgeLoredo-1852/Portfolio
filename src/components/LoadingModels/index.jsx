import { BarLoader, MoonLoader } from "react-spinners";


export const LoadingModels = ({progress}) => {
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
          <div style={{
            position:"relative"
          }}>
            <div
              style={{
                color: "#3900BB",
                fontSize: "1.4rem",
                lineHeight: "1.1",
                position:"absolute",
                top:0,
                left:0,
                transform: "translate(-50%, -50%)"
              }}
            >
              {Math.round(progress * 10) / 10}%
            </div>
            <div style={{
                position:"absolute",
                top:0,
                left:0,
                transform: "translate(-50%, -50%)"
            }}>
            <MoonLoader
              color={"#3900BB"}
              loading={true}
              size = {100}
            />
            </div>
          </div>
        </div>    )
}