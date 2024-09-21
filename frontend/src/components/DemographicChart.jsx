import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'; // Chart.js component for React
// import '../../../backend/routes/metrics.routes'

import 'chart.js/auto';  // Automatically registers the necessary components for Chart.js
const DemographicsChart = () => {
  const [chartData, setChartData] = useState(null);
  // Fetch demographic data from API
  useEffect(() => {
    const fetchDemographics = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/metrics/getMetrics', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });// Adjust the API path based on your server config
        const data = await response.json();
        console.log(data)
        // Prepare data for the chart
        /** */
       // const labels = [data.length && data.map(item => item.student.race);]  // Racial groups (labels)
       // const populations = data.length && data.map(item => item.question1);  // Population counts
       const labels = ["Black", "White", "Black", "Asian"]
       const populations = [10, 20, 30, 40]
        // Set chart data in state
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Question 1',
              data: populations,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching demographic data:', error);
      }
    };
    fetchDemographics();
  }, []);  // Empty dependency array to ensure the effect runs once on component mount
  // If chart data hasn't loaded yet, show a loading message
  if (!chartData) {
    return <div>Loading...</div>;
  }
  // Return the Chart.js pie chart
  return (
    <div>
    <h1>Student Metrics</h1>
      <h2 style={{color:"white"}}>Racial Demographics Chart</h2>
      <Pie data={chartData} options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
                color: 'white',
            }
          },
          title: {
            display: true,
            text: 'Racial Demographics by Population',
            color: 'white,'
          }
        }
      }} />
    </div>
  );
};
export default DemographicsChart;