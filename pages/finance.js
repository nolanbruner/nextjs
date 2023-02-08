import styles from '../styles/Home.module.css';
import React from 'react';
import TaskBar from '../components/TaskBar';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import * as lineChart from "../components/lineChart"
import * as barChart from "../components/barChart"

import { Line, Bar } from 'react-chartjs-2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function about() {
  return (
    <>
      <TaskBar />
      <main className={styles.main}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
            <Bar options={barChart.options} data={barChart.data} />
              {/* <LocalizationProvider
                sx={{ color: 'black' }}
                dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                  // orientation="landscape"
                  openTo="day"
                  // value={Value}
                  // onChange={(newValue) => {
                  //     setValue(newValue);
                  // }}
                  renderInput={params => (
                    <TextField {...params} sx={{ color: 'black' }} />
                  )}
                />
              </LocalizationProvider> */}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Line options={lineChart.options} data={lineChart.data} />
          </Grid>
          <Grid item xs={4}>
          
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
