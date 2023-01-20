import { NewNav, JGx } from './components'
import { AppRoutes } from './AppRoutes'
import { useProgress} from '@react-three/drei'
import { useState, useRef, useEffect } from "react";
import { LoadingModels } from './components';


export const App = () => {

    const [inView3DProjects, setInView3DProjects] = useState(false)

    return(<>

    <NewNav/>
        <AppRoutes setInView = {setInView3DProjects}/>
        
    </>)
}