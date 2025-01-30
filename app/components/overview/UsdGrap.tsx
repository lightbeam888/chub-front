import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts to prevent SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface CandlestickData {
  x: Date;
  y: [number, number, number, number];
}

const generateCandlestickData = (count: number): CandlestickData[] => {
  const data: CandlestickData[] = [];
  const baseTime = new Date(2024, 0, 1).getTime();
  const dayMs = 24 * 60 * 60 * 1000;

  for (let i = 0; i < count; i++) {
    const open = Math.random() * 100 + 6500;
    const close = open + (Math.random() * 200 - 100);
    const high = Math.max(open, close) + Math.random() * 50;
    const low = Math.min(open, close) - Math.random() * 50;

    data.push({
      x: new Date(baseTime + i * dayMs),
      y: [open, high, low, close],
    });
  }

  return data;
};

const UsdGrap: React.FC = () => {
  const [chartData] = useState<{
    series: { name: string; data: CandlestickData[] }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: 'Candles',
        data: generateCandlestickData(20),
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 100,
        toolbar: { show: false },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#00B746',
            downward: '#EF403C',
          },
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            fontSize: '14px',
            colors: ['#A6A6A6'],
            fontFamily: 'Lufga',
          },
        },
      },
      yaxis: {
        tooltip: { enabled: true },
        opposite: false,
        reversed: false,
        axisBorder: {
          show: true,
          color: '#17191F',
        },
        labels: {
          style: {
            fontSize: '14px',
            colors: ['#A6A6A6'],
            fontFamily: 'Plus Jakarta Sans',
          },
          formatter: (value: number) => {
            return value >= 1000 ? (value / 1000).toFixed(1) + '0' : value.toString();
          },
        },
      },
      grid: {
        borderColor: '#e0e0e0',
      },
      tooltip: {
        theme: 'dark', // Sets default theme (dark or light)
        style: {
          fontSize: '14px',
          fontFamily: 'Plus Jakarta Sans',
        },
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          return `<div style="background: #24292F; color: #FFF; padding: 10px; border-radius: 5px;">
                    <strong>Date:</strong> ${new Date(
                      w.globals.seriesX[seriesIndex][dataPointIndex]
                    ).toLocaleDateString()}<br>
                    <strong>Open:</strong> ${w.globals.series[seriesIndex][dataPointIndex]}
                  </div>`;
        },
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="candlestick"
        height={160}
      />
    </div>
  );
};

export default UsdGrap;
