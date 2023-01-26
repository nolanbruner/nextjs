import styles from '../styles/Home.module.css'
import dotted from "./dotted.svg"
import Image from "next/image"
// import Icon from '@mui/material/Icon'
import Box from "@mui/material/Box"
export default function Animation() {
    return (
        <Box>
            <div className="container">
                <Image src={dotted} className="AppLogo" alt="logo" width="150" height="150" />
                <Image src={dotted} className="AppLogoReverse" alt="logo" height="100" />
                <Image src={dotted} className="AppLogo" alt="logo" height="50" />
                <Image src={dotted} className="AppLogoReverse" alt="logo" height="15%" />
                <Image src={dotted} className="AppLogo" alt="logo" height="10%" />
                <Image src={dotted} className={styles.AppLogoReverse} alt="logo" height="5%" />

            </div>
        </Box>
    )
}