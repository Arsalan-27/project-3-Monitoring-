// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register Chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#2c3e50',
    padding: '16px',
    color: '#ecf0f1',
  },
  content: {
    flexGrow: 1,
    padding: '24px',
    backgroundColor: '#34495e',
    color: '#ecf0f1',
  },
  chartContainer: {
    marginBottom: '16px',
    backgroundColor: '#2c3e50',
    padding: '16px',
    borderRadius: '8px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px',
  },
  button: {
    color: '#ecf0f1',
    backgroundColor: '#2980b9',
    margin: '8px',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const data = {
    labels: ['22:14', '22:34', '22:54', '23:14', '23:34', '23:54', '00:14'],
    datasets: [
      {
        label: 'Internet Speed (Mbps)',
        data: [40, 50, 45, 60, 55, 65, 60],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.sidebar}>
        <Typography variant="h6">CREATIVE TIM</Typography>
        <Typography>Dashboard</Typography>
        <Typography>Icons</Typography>
        <Typography>Map</Typography>
        <Typography>Notifications</Typography>
        <Typography>User Profile</Typography>
        <Typography>Table List</Typography>
        <Typography>Typography</Typography>
        <Typography>RTL Support</Typography>
        <Typography>Upgrade to PRO</Typography>
      </Box>

      <Box className={classes.content}>
        <Box className={classes.chartContainer}>
          <Typography variant="h6">Internet Sensor Graph</Typography>
          <Box className={classes.buttonGroup}>
            <Button className={classes.button}>Last 3 hours</Button>
            <Button className={classes.button}>Last 24 hours</Button>
            <Button className={classes.button}>Last 7 days</Button>
            <Button className={classes.button}>Last 30 days</Button>
          </Box>
          <Line data={data} options={options} />
        </Box>

        <Box className={classes.chartContainer}>
          <Typography variant="h6">Motion Graph Sensor</Typography>
          <Line data={data} options={options} />
        </Box>

        <Box className={classes.chartContainer}>
          <Typography variant="h6">Latency Sensor Graph</Typography>
          <Line data={data} options={options} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
