import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import TaskBar from '../components/TaskBar';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import * as lineChart from "../components/lineChart";
import * as barChart from "../components/barChart";
import { getNews } from './api/finance';
import { DropDownOption, DropDownButton } from "../components/buttons";
import { Line, Bar } from 'react-chartjs-2';
import * as Highcharts from 'highcharts';
import Box from '@mui/material/Box';
import TradingViewWidget from '../components/candle';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function about() {
  // let data = [];
  // let data = {};
  // async function handle() {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/finance', {

  //     });
  //     data = await response.text();
  //     console.log(data);
  //     if (response.status !== 200) {
  //       throw (
  //         data.error ||
  //         new Error(`Request failed with status ${response.status}`)
  //       );
  //     }


  //   } catch (error) {
  //     // Consider implementing your own error handling logic here
  //     console.error(error);

  //   }
  // }

  // useEffect(() => {
  //   handle();
  // }, [])
  // if (window.screen.availWidth >= 840) {

  return (
    <>
      <TaskBar />
      <main className="container">
        <Box pt="18px" height="90vh" width="90vw">
          <Item>
            <TradingViewWidget />
          </Item>


        </Box>
      </main>
    </>
  );
  // }

}