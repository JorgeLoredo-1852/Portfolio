import { useState } from "react"
import { NewNav, JGx } from './components'
import { AppRoutes } from './AppRoutes'


export const App = () => {

    const [inView3DProjects, setInView3DProjects] = useState(true)

    return(<>
        <NewNav inView3D = {inView3DProjects}/>
        <AppRoutes setInView = {setInView3DProjects}/>
    </>)
}