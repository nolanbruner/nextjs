import styles from '../styles/Home.module.css'
import Link from "next/link"
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import TaskBar from '../components/TaskBar';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

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
    const [value, setValue] = useState(dayjs())
    return (
        <>
            <TaskBar />

            <main className={styles.main}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
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
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </main>
        </>
    )
} 