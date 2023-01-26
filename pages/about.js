import styles from '../styles/Home.module.css'
import Link from "next/link"
import dayjs from 'dayjs';
import React, {useState } from 'react'
import TaskBar from '../components/TaskBar';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import * as layouts from "./style"
import  Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function about() {
    const [value, setValue] = useState("")
    return (
        <>
            <TaskBar />

            <main className={styles.main}>
                <layouts.Bod background="white" height="auto" width="80vw" >
                    <h1>hi</h1>
                <layouts.grid display="grid" grid-gap="5px" padding="10px" width="100%">

                    <layouts.Bod background="grey" width="25vw" height="25vh" m="5px"><iframe src="https://weather.com/weather/hourbyhour/l/8be8bdd801c0f9c8b772c4cf0ae8702b177837870df34376f89130ac14fb8e12#detailIndex4"></iframe></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw"  height="25vh" m="5px"><iframe src="https://weather.com/weather/radar/interactive/l/8be8bdd801c0f9c8b772c4cf0ae8702b177837870df34376f89130ac14fb8e12"></iframe></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw"  height="25vh" m="5px"><iframe src="https://reactjs.org/docs/components-and-props.html" width="100%" height="100%"></iframe></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw"  height="25vh" m="5px"><iframe src="http://google.com"></iframe></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw" height="25vh" m="5px"><iframe src=""></iframe></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw" height="25vh" m="5px"></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw"  height="25vh" m="5px"></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw" height="25vh" m="5px"></layouts.Bod>
                    <layouts.Bod background="grey" width="25vw" height="25vh" m="5px"></layouts.Bod>
{/*                    
                        <Item>
                            <LocalizationProvider sx={{ color: "black" }} dateAdapter={AdapterDayjs} >
                                <StaticDatePicker
                                    // orientation="landscape"

                                    openTo="day"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}

                                    renderInput={(params) => <TextField {...params} sx={{ color: "black" }} />}
                                />
                            </LocalizationProvider>
                        </Item> */}
                    </layouts.grid>
                    </layouts.Bod>
            </main>
        </>
    )
} 