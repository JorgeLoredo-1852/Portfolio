import { NewNav, JGx } from './components'
import { AppRoutes } from './AppRoutes'
import { useProgress} from '@react-three/drei'
import { useState, useRef, useEffect } from "react";
import { LoadingModels } from './components';
import {useReactPath} from './utils/pathHook';
import { useLocation } from 'react-router';

export const App = () => {

    const [inView3DProjects, setInView3DProjects] = useState(false)
    
    const { active, progress, errors, item, loaded, total } = useProgress()
    const [chargeComplete, setChargeComplete] = useState(false)
    const [hideLoading, setHideLoading] = useState(false)
    const [hideClass, setHideClass] = useState("navbar")

    const location = useLocation();

    //const scrollRef = useRef(null);
    //useScrollSnap({ ref: scrollRef, duration: 1, delay: 0 });

    useEffect(()=>{
        if(progress == 100){
            setChargeComplete(true)
            const timer = setTimeout(() => {setHideLoading(true)}, 4000);
            return () => clearTimeout(timer);
        }
    },[progress])

    useEffect(()=>{
        if(location.pathname == "/projects"){
            if(!inView3DProjects){
                setHideClass("navbar navbar--hide")
            } else {
                setHideClass("navbar")    
            }
        }
        else {
            setHideClass("navbar")
        }
    },[location.pathname, inView3DProjects])

 
    return(<>
    {!hideLoading ? <LoadingModels progress={progress}/> : <></>}
    <JGx notHide={inView3DProjects}/>
        <NewNav/>
        <AppRoutes setInView = {setInView3DProjects}/>
        
    </>)
}