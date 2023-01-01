import { Grid } from "@mui/material"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, RoundedBox } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"
import { Box } from "@mui/system"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {Model as CardModel} from '../../models/cardModel';
import {Model as Arrow} from '../../models/Arrow';
import {Model as Disk1} from '../../models/Disk1';
import {Model as Disk2} from '../../models/Disk2';
import {Model as Disk3} from '../../models/Disk3';
import {Model as Disk4} from '../../models/Disk4';
import {Model as Disk5} from '../../models/Disk5';
import {Model as Disk6} from '../../models/Disk6';
import {Model as Disk7} from '../../models/Disk7';
import {Model as Disk8} from '../../models/Disk8';
import {Model as Disk9} from '../../models/Disk9';
import {Model as Disk10} from '../../models/Disk10';
import {Model as Disk11} from '../../models/Disk11';

import { List } from "./List"


export const FeaturedProjects = ({openModalFunc, handleNextPage}) => {

    const [video, setVideo] = useState(() => Object.assign(document.createElement('video'), { src: "/videos/Jgx.mp4", crossOrigin: 'Anonymous', muted: true, play, playsInline: true}))

    useEffect(() => {
        video.play()
    }, [video])

    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    const [percentage, setPercentage] = useState(1)
    const [speed, setSpeed] = useState(1)
    
    // CARTAS QUE NO SE VEN IZQUIERDA
    const [posCard1, setPosCard1] = useState([-26.2, 4, 0])
    const [locationCard1, setLocationCard1] = useState(1)
    const [sizeCard1, setSizeCard1] = useState([4.5,4.5,0.5])

    const [posCard2, setPosCard2] = useState([-21.4, 4, 0])
    const [sizeCard2, setSizeCard2] = useState([4.5,4.5,0.5])

    const [posCard3, setPosCard3] = useState([-16.6, 4, 0])
    const [sizeCard3, setSizeCard3] = useState([4.5,4.5,0.5])

    //CARTAS QUE SE VEN

    const [posCard4, setPosCard4] = useState([-11.8, 4, 0])
    const [sizeCard4, setSizeCard4] = useState([4.5,4.5,0.5])
    
    const [posCard5, setPosCard5] = useState([-7, 4, 0])
    const [sizeCard5, setSizeCard5] = useState([4.5,4.5,0.5])

    const [posCard6, setPosCard6] = useState([0, 4, 0])
    const [sizeCard6, setSizeCard6] = useState([9,8,0.5])

    const [posCard7, setPosCard7] = useState([7, 4, 0])
    const [sizeCard7, setSizeCard7] = useState([4.5,4.5,0.5])

    const [posCard8, setPosCard8] = useState([11.8, 4, 0])
    const [sizeCard8, setSizeCard8] = useState([4.5,4.5,0.5])

    //CARTAS QUE NO SE VEN DERECHA

    const [posCard9, setPosCard9] = useState([16.6, 4, 0])
    const [sizeCard9, setSizeCard9] = useState([4.5,4.5,0.5])

    const [posCard10, setPosCard10] = useState([21.4, 4, 0])
    const [sizeCard10, setSizeCard10] = useState([4.5,4.5,0.5])

    const [posCard11, setPosCard11] = useState([26.2, 4, 0])
    const [sizeCard11, setSizeCard11] = useState([4.5,4.5,0.5])

    
    const [movingLeft, setMovingLeft] = useState(true)
    const [loadingPosCards, setloadingPosCards] = useState(false)

    const [posGameBoy, setPosGameBoy] = useState([0, 0, -2])
    const [elevateGameBoy, setElevateGameBoy] = useState(false)
    const [ringRadius, setRingRadius] = useState(0)
    const [ringOpacity, setRingOpacity] = useState(0)

    const openModal = () =>{
        let projectToOpen = List[locationCard1 - 1]
        openModalFunc(projectToOpen)
    }

    useEffect(() =>{
        if(downSm){
            setPercentage(0.6)
            setSpeed(1.5)
        } else {
            setPercentage(1)
            setSpeed(1.5)
        }
    },[downSm])


    useFrame(()=>{
        if(loadingPosCards){
            if(posGameBoy[1] > 0 && elevateGameBoy){
                setPosGameBoy([0,0,-2])
            }
        }
        if(loadingPosCards){
            if(locationCard1 == 1){
                //ESTABA CARTA 11
                if(movingLeft){
                    if(posCard6[0] > 0){
                        if(posCard1[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            if(posCard1[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                        setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                        setSizeCard5([sizeCard5[0] - 0.064 * speed, sizeCard5[1] - 0.05 * speed,0.5])
                        setSizeCard6([sizeCard6[0] + 0.064 * speed, sizeCard6[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard5([-7, 4, 0])
                        setPosCard6([0, 4, 0])
                        setSizeCard5([4.5,4.5,0.5])
                        setSizeCard6([9,8,0.5])
                        setPosCard11([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard6[0] < 0){
                        if(posCard2[0] < -21.4 - 0.1){
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard2[0], "right");
                            if(posCard2[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard6([posCard6[0] + 0.1 , 4, 0])
                        setPosCard7([posCard7[0] + 0.1 , 4, 0])
                        setSizeCard6([sizeCard6[0] + 0.064 * speed, sizeCard6[1] + 0.06 * speed,0.5])
                        setSizeCard7([sizeCard7[0] - 0.064 * speed, sizeCard7[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard6([0, 4, 0])
                        setPosCard7([7, 4, 0])
                        setSizeCard6([9,8,0.5])
                        setSizeCard7([4.5,4.5,0.5])
                        setPosCard1([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            } 
            // LOCATION 2
            else if (locationCard1 == 2){
                if(movingLeft){
                    if(posCard5[0] > 0){
                        if(posCard11[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard11[0], "left");
                            if(posCard11[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                        setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                        setSizeCard4([sizeCard4[0] - 0.064 * speed, sizeCard4[1] - 0.05 * speed,0.5])
                        setSizeCard5([sizeCard5[0] + 0.064 * speed, sizeCard5[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard4([-7, 4, 0])
                        setPosCard5([0, 4, 0])
                        setSizeCard4([4.5,4.5,0.5])
                        setSizeCard5([9,8,0.5])
                        setPosCard10([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard5[0] < 0){
                        if(posCard1[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            //checkElevation(posCard1[0], "right");
                            if(posCard1[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard5([posCard5[0] + 0.1 , 4, 0])
                        setPosCard6([posCard6[0] + 0.1 , 4, 0])
                        setSizeCard5([sizeCard5[0] + 0.064 * speed, sizeCard5[1] + 0.06 * speed,0.5])
                        setSizeCard6([sizeCard6[0] - 0.064 * speed, sizeCard6[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard5([0, 4, 0])
                        setPosCard6([7, 4, 0])
                        setSizeCard5([9,8,0.5])
                        setSizeCard6([4.5,4.5,0.5])
                        
                        setPosCard11([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOCATION 3
            else if (locationCard1 == 3){
                if(movingLeft){
                    if(posCard4[0] > 0){
                        if(posCard10[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard10[0], "left");
                            if(posCard10[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                        setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                        setSizeCard3([sizeCard3[0] - 0.064 * speed, sizeCard3[1] - 0.05 * speed,0.5])
                        setSizeCard4([sizeCard4[0] + 0.064 * speed, sizeCard4[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard3([-7, 4, 0])
                        setPosCard4([0, 4, 0])
                        setSizeCard3([4.5,4.5,0.5])
                        setSizeCard4([9,8,0.5])
                        setPosCard9([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard4[0] < 0){
                        if(posCard11[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard11[0], "right");
                            if(posCard11[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard4([posCard4[0] + 0.1 , 4, 0])
                        setPosCard5([posCard5[0] + 0.1 , 4, 0])
                        setSizeCard4([sizeCard4[0] + 0.064 * speed, sizeCard4[1] + 0.06 * speed,0.5])
                        setSizeCard5([sizeCard5[0] - 0.064 * speed, sizeCard5[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard4([0, 4, 0])
                        setPosCard5([7, 4, 0])
                        setSizeCard4([9,8,0.5])
                        setSizeCard5([4.5,4.5,0.5])
                        setPosCard10([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOCATION 4
            else if (locationCard1 == 4){
                if(movingLeft){
                    if(posCard3[0] > 0){
                        if(posCard9[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard9[0], "left");
                            if(posCard9[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                        setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                        setSizeCard2([sizeCard2[0] - 0.064 * speed, sizeCard2[1] - 0.05 * speed,0.5])
                        setSizeCard3([sizeCard3[0] + 0.064 * speed, sizeCard3[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard2([-7, 4, 0])
                        setPosCard3([0, 4, 0])
                        setSizeCard2([4.5,4.5,0.5])
                        setSizeCard3([9,8,0.5])
                        setPosCard8([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard3[0] < 0){
                        if(posCard10[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard10[0], "right");
                            if(posCard10[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard3([posCard3[0] + 0.1 , 4, 0])
                        setPosCard4([posCard4[0] + 0.1 , 4, 0])
                        setSizeCard3([sizeCard3[0] + 0.064 * speed, sizeCard3[1] + 0.06 * speed,0.5])
                        setSizeCard4([sizeCard4[0] - 0.064 * speed, sizeCard4[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard3([0, 4, 0])
                        setPosCard4([7, 4, 0])
                        setSizeCard3([9,8,0.5])
                        setSizeCard4([4.5,4.5,0.5])
                        setPosCard9([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOCATION 5
            else if (locationCard1 == 5){
                if(movingLeft){
                    if(posCard2[0] > 0){
                        if(posCard8[0] > -26.2 + 0.1){
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard8[0], "left");
                            if(posCard8[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                        setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                        setSizeCard1([sizeCard1[0] - 0.064 * speed, sizeCard1[1] - 0.05 * speed,0.5])
                        setSizeCard2([sizeCard2[0] + 0.064 * speed, sizeCard2[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard1([-7, 4, 0])
                        setPosCard2([0, 4, 0])
                        setSizeCard1([4.5,4.5,0.5])
                        setSizeCard2([9,8,0.5])
                        setPosCard7([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard2[0] < 0){
                        if(posCard9[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard9[0], "right");
                            if(posCard9[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard2([posCard2[0] + 0.1 , 4, 0])
                        setPosCard3([posCard3[0] + 0.1 , 4, 0])
                        setSizeCard2([sizeCard2[0] + 0.064 * speed, sizeCard2[1] + 0.06 * speed,0.5])
                        setSizeCard3([sizeCard3[0] - 0.064 * speed, sizeCard3[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard2([0, 4, 0])
                        setPosCard3([7, 4, 0])
                        setSizeCard2([9,8,0.5])
                        setSizeCard3([4.5,4.5,0.5])
                        setPosCard8([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOACTION 6
            else if (locationCard1 == 6){
                if(movingLeft){
                    if(posCard1[0] > 0){
                        if(posCard7[0] > -26.2 + 0.1){
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard7[0], "left");
                            if(posCard7[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                        setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                        setSizeCard11([sizeCard11[0] - 0.064 * speed, sizeCard11[1] - 0.05 * speed,0.5])
                        setSizeCard1([sizeCard1[0] + 0.064 * speed, sizeCard1[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard11([-7, 4, 0])
                        setPosCard1([0, 4, 0])
                        setSizeCard11([4.5,4.5,0.5])
                        setSizeCard1([9,8,0.5])
                        setPosCard6([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard1[0] < 0){
                        if(posCard8[0] < -21.4 - 0.1){
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard8[0], "right");
                            if(posCard8[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard1([posCard1[0] + 0.1 , 4, 0])
                        setPosCard2([posCard2[0] + 0.1 , 4, 0])
                        setSizeCard1([sizeCard1[0] + 0.064 * speed, sizeCard1[1] + 0.06 * speed,0.5])
                        setSizeCard2([sizeCard2[0] - 0.064 * speed, sizeCard2[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard1([0, 4, 0])
                        setPosCard2([7, 4, 0])
                        setSizeCard1([9,8,0.5])
                        setSizeCard2([4.5,4.5,0.5])
                        setPosCard7([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOCATION 7
            else if (locationCard1 == 7){
                if(movingLeft){
                    if(posCard11[0] > 0){
                        if(posCard6[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard6[0], "left");
                            if(posCard6[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                        setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                        setSizeCard10([sizeCard10[0] - 0.064 * speed, sizeCard10[1] - 0.05 * speed,0.5])
                        setSizeCard11([sizeCard11[0] + 0.064 * speed, sizeCard11[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard10([-7, 4, 0])
                        setPosCard11([0, 4, 0])
                        setSizeCard10([4.5,4.5,0.5])
                        setSizeCard11([9,8,0.5])
                        setPosCard5([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard11[0] < 0){
                        if(posCard7[0] < -21.4 - 0.1){
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            //checkElevation(posCard7[0], "right");
                            if(posCard7[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard11([posCard11[0] + 0.1 , 4, 0])
                        setPosCard1([posCard1[0] + 0.1 , 4, 0])
                        setSizeCard11([sizeCard11[0] + 0.064 * speed, sizeCard11[1] + 0.06 * speed,0.5])
                        setSizeCard1([sizeCard1[0] - 0.064 * speed, sizeCard1[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard11([0, 4, 0])
                        setPosCard1([7, 4, 0])
                        setSizeCard11([9,8,0.5])
                        setSizeCard1([4.5,4.5,0.5])
                        setPosCard6([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOCATION 8
            else if (locationCard1 == 8){
                if(movingLeft){
                    if(posCard10[0] > 0){
                        if(posCard5[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard5[0], "left");
                            if(posCard5[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                        setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                        setSizeCard9([sizeCard9[0] - 0.064 * speed, sizeCard9[1] - 0.05 * speed,0.5])
                        setSizeCard10([sizeCard10[0] + 0.064 * speed, sizeCard10[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard9([-7, 4, 0])
                        setPosCard10([0, 4, 0])
                        setSizeCard9([4.5,4.5,0.5])
                        setSizeCard10([9,8,0.5])
                        setPosCard4([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard10[0] < 0){
                        if(posCard6[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            //checkElevation(posCard6[0], "right");
                            if(posCard6[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard10([posCard10[0] + 0.1 , 4, 0])
                        setPosCard11([posCard11[0] + 0.1 , 4, 0])
                        setSizeCard10([sizeCard10[0] + 0.064 * speed, sizeCard10[1] + 0.06 * speed,0.5])
                        setSizeCard11([sizeCard11[0] - 0.064 * speed, sizeCard11[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard10([0, 4, 0])
                        setPosCard11([7, 4, 0])
                        setSizeCard10([9,8,0.5])
                        setSizeCard11([4.5,4.5,0.5])
                        setPosCard5([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LCOATION 9
            else if (locationCard1 == 9){
                if(movingLeft){
                    if(posCard9[0] > 0){
                        if(posCard4[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard4[0], "left");
                            if(posCard4[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                        setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                        setSizeCard8([sizeCard8[0] - 0.064 * speed, sizeCard8[1] - 0.05 * speed,0.5])
                        setSizeCard9([sizeCard9[0] + 0.064 * speed, sizeCard9[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard8([-7, 4, 0])
                        setPosCard9([0, 4, 0])
                        setSizeCard8([4.5,4.5,0.5])
                        setSizeCard9([9,8,0.5])
                        setPosCard3([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard9[0] < 0){
                        if(posCard5[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard8([posCard8[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard5[0], "right");
                            if(posCard5[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard9([posCard9[0] + 0.1 , 4, 0])
                        setPosCard10([posCard10[0] + 0.1 , 4, 0])
                        setSizeCard9([sizeCard9[0] + 0.064 * speed, sizeCard9[1] + 0.06 * speed,0.5])
                        setSizeCard10([sizeCard10[0] - 0.064 * speed, sizeCard10[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard9([0, 4, 0])
                        setPosCard10([7, 4, 0])
                        setSizeCard9([9,8,0.5])
                        setSizeCard10([4.5,4.5,0.5])
                        setPosCard4([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOCATION 10
            else if (locationCard1 == 10){
                if(movingLeft){
                    if(posCard8[0] > 0){
                        if(posCard3[0] > -26.2 + 0.1){
                            setPosCard1([posCard1[0] - 0.1 * speed , 4, 0])
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard3[0], "left");
                            if(posCard3[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                        setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                        setSizeCard7([sizeCard7[0] - 0.064 * speed, sizeCard7[1] - 0.05 * speed,0.5])
                        setSizeCard8([sizeCard8[0] + 0.064 * speed, sizeCard8[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard7([-7, 4, 0])
                        setPosCard8([0, 4, 0])
                        setSizeCard7([4.5,4.5,0.5])
                        setSizeCard8([9,8,0.5])
                        setPosCard2([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard8[0] < 0){
                        if(posCard4[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard2([posCard2[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard7([posCard7[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard4[0], "right");
                            if(posCard4[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard8([posCard8[0] + 0.1 , 4, 0])
                        setPosCard9([posCard9[0] + 0.1 , 4, 0])
                        setSizeCard8([sizeCard8[0] + 0.064 * speed, sizeCard8[1] + 0.06 * speed,0.5])
                        setSizeCard9([sizeCard9[0] - 0.064 * speed, sizeCard9[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard8([0, 4, 0])
                        setPosCard9([7, 4, 0])
                        setSizeCard8([9,8,0.5])
                        setSizeCard9([4.5,4.5,0.5])
                        setPosCard3([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
            // LOCAITON 11
            else if (locationCard1 == 11){
                // CARTA 1 ESTABA EN LA POS 1
                if(movingLeft){
                    if(posCard7[0] > 0){
                        if(posCard2[0] > -26.2 + 0.1){
                            setPosCard2([posCard2[0] - 0.1 * speed , 4, 0])
                            setPosCard3([posCard3[0] - 0.1 * speed , 4, 0])
                            setPosCard4([posCard4[0] - 0.1 * speed , 4, 0])
                            setPosCard5([posCard5[0] - 0.1 * speed , 4, 0])
                            setPosCard8([posCard8[0] - 0.1 * speed , 4, 0])
                            setPosCard9([posCard9[0] - 0.1 * speed , 4, 0])
                            setPosCard10([posCard10[0] - 0.1 * speed , 4, 0])
                            setPosCard11([posCard11[0] - 0.1 * speed , 4, 0])
                            //checkElevation(posCard2[0], "left");
                            if(posCard2[0] < - 23.8 + 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(true)
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                                setElevateGameBoy(false)
                            }
                        }
                        setPosCard6([posCard6[0] - 0.1 * speed , 4, 0])
                        setPosCard7([posCard7[0] - 0.1 * speed , 4, 0])
                        setSizeCard6([sizeCard6[0] - 0.064 * speed, sizeCard6[1] - 0.05 * speed,0.5])
                        setSizeCard7([sizeCard7[0] + 0.064 * speed, sizeCard7[1] + 0.06 * speed,0.5])
                    }
                    else {
                        setPosCard6([-7, 4, 0])
                        setPosCard7([0, 4, 0])
                        setSizeCard6([4.5,4.5,0.5])
                        setSizeCard7([9,8,0.5])
                        setPosCard1([26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                } 
                else {
                    if(posCard7[0] < 0){
                        if(posCard3[0] < -21.4 - 0.1){
                            setPosCard1([posCard1[0] + 0.1 , 4, 0])
                            setPosCard3([posCard3[0] + 0.1 , 4, 0])
                            setPosCard4([posCard4[0] + 0.1 , 4, 0])
                            setPosCard5([posCard5[0] + 0.1 , 4, 0])
                            setPosCard6([posCard6[0] + 0.1 , 4, 0])
                            setPosCard9([posCard9[0] + 0.1 , 4, 0])
                            setPosCard10([posCard10[0] + 0.1 , 4, 0])
                            setPosCard11([posCard11[0] + 0.1 , 4, 0])
                            //checkElevation(posCard3[0], "right");
                            if(posCard3[0] > - 23.8 - 0.1){
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] + 0.3 * speed, posGameBoy[2]])
                            } else {
                                setPosGameBoy([posGameBoy[0], posGameBoy[1] - 0.3 * speed, posGameBoy[2]])
                            }
                        }
                        setPosCard7([posCard7[0] + 0.1 , 4, 0])
                        setPosCard8([posCard8[0] + 0.1 , 4, 0])
                        setSizeCard7([sizeCard7[0] + 0.064 * speed, sizeCard7[1] + 0.06 * speed,0.5])
                        setSizeCard8([sizeCard8[0] - 0.064 * speed, sizeCard8[1] - 0.05 * speed,0.5])
                    }
                    else {
                        setPosCard7([0, 4, 0])
                        setPosCard8([7, 4, 0])
                        setSizeCard7([9,8,0.5])
                        setSizeCard8([4.5,4.5,0.5])
                        setPosCard2([-26.2, 4, 0])
                        setloadingPosCards(false)
                        setPosGameBoy([0, 0, -2])
                    }
                }
            }
        }
    })

    useEffect(() => {
        if(!loadingPosCards){
            }
    }, [loadingPosCards])


    const moveCardLeft = () => {
        if(!loadingPosCards){
            let projectToOpen = 1

            if (locationCard1 == 1){
                setLocationCard1(11)
                projectToOpen = List[10]
            } else {
                setLocationCard1(locationCard1 - 1)
                projectToOpen = List[locationCard1 - 2]
            }
            setMovingLeft(true)
            setloadingPosCards(true)

            setVideo(() => Object.assign(document.createElement('video'), { src: projectToOpen.video, crossOrigin: 'Anonymous', muted: true}))
        }
    }

    const moveCardRight = () => {
        if(!loadingPosCards){
            let projectToOpen = 1
            if (locationCard1 == 11){
                setLocationCard1(1)
                projectToOpen = List[0]
            } else {
                setLocationCard1(locationCard1 + 1)
                projectToOpen = List[locationCard1]
            }
            setMovingLeft(false)
            setloadingPosCards(true)

            setVideo(() => Object.assign(document.createElement('video'), { src: projectToOpen.video, crossOrigin: 'Anonymous', muted: true}))
        
        }
    }

    return (
    <>
<spotLight position={[0, 0, 40]} angle={0.35} penumbra={1.5} intensity={1.5} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />


         <OrbitControls enableZoom={false} enablePan={false} enableDamping={false} maxAzimuthAngle={Math.PI/6} minAzimuthAngle={-Math.PI/6} maxPolarAngle={Math.PI / 2 - Math.PI / 12} minPolarAngle={Math.PI / 2 - Math.PI / 12}></OrbitControls>
        <group  position={[0, -3, 0]}>



                <CardModel rotation-x={-Math.PI/10} scale={downSm ? [140,140,140] : [140,140,140]} position={downSm ? [posGameBoy[0], posGameBoy[1] + 1, posGameBoy[2]] : posGameBoy}/>
                <mesh castShadow receiveShadow rotation-x={-Math.PI/10} position={downSm ? [posGameBoy[0], posGameBoy[1] + 7.1, posGameBoy[2] + 4.9] : [posGameBoy[0], posGameBoy[1] + 6.1, posGameBoy[2] + 4.9]} scale={[6.3,5.7,0.5]} >
                    <planeGeometry/>
                    <meshBasicMaterial roughness={0.059}>
                        <videoTexture  attach="map" args={[video]} encoding={THREE.sRGBEncoding}/> 
                    </meshBasicMaterial>
                </mesh>


                <mesh position={downSm ? [3.9, 0.1, 5.5]:[3.9, -0.9, 5.5]} rotation-x={-Math.PI/10} onClick={openModal}>
                    <circleGeometry args={[0.6,32,0,Math.PI * 2]}/>
                    <meshStandardMaterial color="#ffd500" opacity={0} transparent envMapIntensify={0.5}/>
                </mesh>


                <Disk9 rotation-x={-Math.PI/10}  position={posCard1} scale={[sizeCard1[0] / 3 * percentage, sizeCard1[1] / 3 * percentage, sizeCard1[2] / 3] }/>
                <Disk10 rotation-x={-Math.PI/10}  position={posCard2} scale={[sizeCard2[0] / 3 * percentage, sizeCard2[1] / 3 * percentage, sizeCard2[2] / 3] }/>
                <Disk11 rotation-x={-Math.PI/10}  position={posCard3} scale={[sizeCard3[0] / 3 * percentage, sizeCard3[1] / 3 * percentage, sizeCard3[2] / 3] }/>
                <Disk2 rotation-x={-Math.PI/10}  position={posCard4} scale={[sizeCard4[0] / 3 * percentage, sizeCard4[1] / 3 * percentage, sizeCard4[2] / 3] }/>
                <Disk3 rotation-x={-Math.PI/10}  position={posCard5} scale={[sizeCard5[0] / 3 * percentage, sizeCard5[1] / 3 * percentage, sizeCard5[2] / 3] }/>
                <Disk1 rotation-x={-Math.PI/10}  position={posCard6} scale={[sizeCard6[0] / 3 * percentage, sizeCard6[1] / 3 * percentage, sizeCard6[2] / 3] }/>
                <Disk4 rotation-x={-Math.PI/10}  position={posCard7} scale={[sizeCard7[0] / 3 * percentage, sizeCard7[1] / 3 * percentage, sizeCard7[2] / 3] }/>
                <Disk5 rotation-x={-Math.PI/10}  position={posCard8} scale={[sizeCard8[0] / 3 * percentage, sizeCard8[1] / 3 * percentage, sizeCard8[2] / 3] }/>
                <Disk6 rotation-x={-Math.PI/10}  position={posCard9} scale={[sizeCard9[0] / 3 * percentage, sizeCard9[1] / 3 * percentage, sizeCard9[2] / 3] }/>
                <Disk7 rotation-x={-Math.PI/10}  position={posCard10} scale={[sizeCard10[0] / 3 * percentage, sizeCard10[1] / 3 * percentage, sizeCard10[2] / 3] }/>
                <Disk8 rotation-x={-Math.PI/10}  position={posCard11} scale={[sizeCard11[0] / 3 * percentage, sizeCard11[1] / 3 * percentage, sizeCard11[2] / 3] }/>
                

                <Arrow receiveShadow castShadow position={downSm ? [posGameBoy[0] - 2, posGameBoy[1] + 1.7, posGameBoy[2] + 7.2] :  [-6.5, -1, 4.5]} rotation-x={-Math.PI/10} onClick={moveCardRight} scale={downSm ? [0.6,0.6,0.6] : [1,1,1]}/>
                <Arrow receiveShadow castShadow position={downSm ? [posGameBoy[0] + 2, posGameBoy[1] + 1.7, posGameBoy[2] + 7.2] :  [6.5, -1, 4.5]} rotation-z={Math.PI} rotation-x={-Math.PI/10} onClick={moveCardLeft} scale={downSm ? [0.6,0.6,0.6] : [1,1,1]}/>
                <Arrow receiveShadow castShadow position={downSm ? [posGameBoy[0], posGameBoy[1] - 2.3, posGameBoy[2] + 8.5] : [6.5, -1, 4.5]} rotation-z={Math.PI / 2} rotation-x={-Math.PI/10} onClick={handleNextPage} scale={downSm ? [0.6,0.6,0.6] : [0,0,0]}/>




                {/* COMPLETE CARD */}{/*



                <mesh receiveShadow castShadow position={downSm ? [-3, -3, 2] :  [-7, -1, 3.5]} rotation-z={Math.PI/2} onClick={moveCardLeft}>
                    <coneGeometry args={[0.8,1.3,20,5,false,0,Math.PI * 2]}/>
                    <meshStandardMaterial color="#ffd500" envMapIntensify={0.5}/>
                </mesh>

                <mesh receiveShadow castShadow position={downSm ? [3, -3, 2] :  [7, -1, 3.5]} rotation-z={-Math.PI/2} onClick={moveCardRight}>
                    <coneGeometry args={[0.8,1.3,20,5,false,0,Math.PI * 2]}/>
                    <meshStandardMaterial color="#ffd500" envMapIntensify={0.5} />
                </mesh>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard6} scale={[sizeCard6[0] * percentage, sizeCard6[1] * percentage, sizeCard6[2]]}>
                    <meshStandardMaterial color="#1D0060" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>                
                
                
                <mesh castShadow receiveShadow rotation-x={-Math.PI/10} position={[posCard6[0], posCard6[1] + 1, posCard6[2] + 0.05]} scale={[sizeCard6[0] - 1,sizeCard6[1] - 3,sizeCard6[2]]}>
                    <planeGeometry />
                    <meshBasicMaterial>
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding}/> 
                    </meshBasicMaterial>
                </mesh>
                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={[posCard6[0], posCard6[1] -4.3, posCard6[2] + 2]} scale={[sizeCard6[0] - 1, 1.5, sizeCard6[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
    </RoundedBox>*/}

                
                {/* COMPLETE CARD */}

                
                
                {
                    /*
                    
                    
                                    <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard2} scale={[sizeCard2[0] * percentage, sizeCard2[1] * percentage, sizeCard2[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard3} scale={[sizeCard3[0] * percentage, sizeCard3[1] * percentage, sizeCard3[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard4} scale={[sizeCard4[0] * percentage, sizeCard4[1] * percentage, sizeCard4[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard5} scale={[sizeCard5[0] * percentage, sizeCard5[1] * percentage, sizeCard5[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0} />
                </RoundedBox>

                    
                    <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard7} scale={[sizeCard7[0] * percentage, sizeCard7[1] * percentage, sizeCard7[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0} />
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard8} scale={[sizeCard8[0] * percentage, sizeCard8[1] * percentage, sizeCard8[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard9} scale={[sizeCard9[0] * percentage, sizeCard9[1] * percentage, sizeCard9[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard10} scale={[sizeCard10[0] * percentage, sizeCard10[1] * percentage, sizeCard10[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={posCard11} scale={[sizeCard11[0] * percentage, sizeCard11[1] * percentage, sizeCard11[2]]}>
                    <meshStandardMaterial color="#3900BB" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>
                    
                    
                    */
                }
                
                

                {/* BUBBLES */}
            </group>
    </>
    )
}

/*




<RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={[-11.8, 4, 0]} scale={[4.5,4.5,0.5]}>
                    <meshStandardMaterial color="#4c00a3" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={[-7, 4, 0]} scale={[4.5,4.5,0.5]}>
                    <meshStandardMaterial color="#4c00a3" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>
                
                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={[0, 4, 0]} scale={[9,8,0.5]}>
                    <meshStandardMaterial color="#4c00a3" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>

                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={[7, 4, 0]} scale={[4.5,4.5,0.5]}>
                    <meshStandardMaterial color="#4c00a3" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>
                
                <RoundedBox receiveShadow rotation-x={-Math.PI/10} castShadow smoothness={10}  radius={0.015} position={[11.8, 4, 0]} scale={[4.5,4.5,0.5]}>
                    <meshStandardMaterial color="#4c00a3" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>



*/
