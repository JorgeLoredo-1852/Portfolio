import { NewNav, JGx } from './components'
import { AppRoutes } from './AppRoutes'
import { useProgress} from '@react-three/drei'
import { useState, useRef, useEffect } from "react";
import { LoadingModels } from './components';

export const App = () => {

    const [inView3DProjects, setInView3DProjects] = useState(false)
    
    const { active, progress, errors, item, loaded, total } = useProgress()
    const [chargeComplete, setChargeComplete] = useState(false)
    const [hideLoading, setHideLoading] = useState(false)
    //const scrollRef = useRef(null);
    //useScrollSnap({ ref: scrollRef, duration: 1, delay: 0 });

    useEffect(()=>{
        if(progress == 100){
            setChargeComplete(true)
            const timer = setTimeout(() => {setHideLoading(true)}, 3000);
            return () => clearTimeout(timer);
        }
    },[progress])

    return(<>
    {!hideLoading ? <LoadingModels progress={progress}/> : <></>}
        <NewNav/>
        <AppRoutes setInView = {setInView3DProjects}/>
        
    </>)
}