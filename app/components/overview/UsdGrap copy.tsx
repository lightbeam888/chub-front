"use client"
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import dataGrouping from 'highcharts/modules/datagrouping';
dataGrouping(Highcharts);

type Props = {}

export default function UsdGrap({ }: Props) {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            backgroundColor: 'transparent',
            borderRadius: 4,
            height: 138,
        },
        plotOptions: {
            candlestick: {
                color: '#F82B37',
                upColor: '#16C777',
                lineColor: '#1B2130'
            },
            series: {
                lastPrice: {
                    color: '#c0c0c0',
                    enabled: true,
                    label: {
                        backgroundColor: '#fbfbfb',
                        borderRadius: 0,
                        enabled: true,
                        padding: 3,
                        style: {
                            color: '#000'
                        }
                    }
                }
            }
        },
        xAxis: {
            gridLineColor: '#1B2130',
            gridLineWidth: 0,
            lineColor: '#17191F',
            tickColor: '#1B2130',
            tickLength: 1,
            labels: {
                style: {
                    color: '#A6A6A6',
                },
            },
            min: Date.now() - 20 * 24 * 60 * 60 * 1000,  
            max: Date.now(),  
            formatter: function (): string {
                const context = this as unknown as Highcharts.AxisLabelsFormatterContextObject;
                const value = typeof context.value === 'string' ? Number(context.value) : context.value;
                return Highcharts.dateFormat('%I:%M %p', value);
            }

        },
        yAxis: {
            tickAmount: 5,
            opposite: false,
            crosshair: {
                label: {
                    backgroundColor: '#fbfbfb',
                    borderRadius: 0,
                    enabled: true,
                    padding: 3,
                    style: {
                        color: '#A6A6A6'
                    },
                }
            },
            gridLineColor: '#14181C',
            lineColor: '#10131F',
            gridLineWidth: 1,
            lineWidth: 0,
            labels: {
                // formatter: function (): string {
                //     const context = this as unknown as Highcharts.AxisLabelsFormatterContextObject;
                //     const value = Number(context.value);
                //     return `${value.toFixed(0)}k`;
                // },
                align: 'right',
                style: {
                    color: "#A6A6A6",
                    fontSize: '14px',
                },
            },
        },
        credits: {
            enabled: false,
        },
        rangeSelector: {
            enabled: false,
            allButtonsEnabled: true,
            buttons: [{
                type: 'day',
                count: 1,
                text: '1D',
                dataGrouping: {
                    forced: true,
                    units: [['day', [1]]]
                }
            }, {
                type: 'day',
                count: 7,
                text: '7D',
                dataGrouping: {
                    forced: true,
                    units: [['day', [7]]]
                }
            }, {
                type: 'month',
                count: 1,
                text: '1M',
                dataGrouping: {
                    forced: true,
                    units: [['month', [1]]]
                }
            }, {
                type: 'year',
                count: 1,
                text: '1Y',
                dataGrouping: {
                    forced: true,
                    units: [['year', [1]]]
                }
            }, {
                type: 'all',
                text: 'All',
                dataGrouping: {
                    forced: true,
                    units: [['year', [1]]]
                }
            }],
            buttonTheme: {
                width: 32,
                fill: '#121722',
                padding: 1,
                states: {
                    hover: {
                        style: {
                            color: '#fff',
                            fill: '#121722',
                        }
                    }
                },
                style: {
                    color: '#6B7280'
                }
            },
            selected: 7,
        },
        navigator: {
            enabled: false
        }, scrollbar: {
            enabled: false
        },
        title: {
            text: " "
        },
        series: [{
            type: 'candlestick',
            spacing: [150, 100, 150, 100, 50],
            name: 'AAPL Stock Price',
            marker: {
                enabled: null, // auto
                lineWidth: 1,
                lineColor: '#999',
                borderRadius: 6,
            },
            data: [],
        }]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json');
                const data = await response.json();

                setChartOptions(prevOptions => ({
                    ...prevOptions,
                    series: [{
                        ...prevOptions.series[0],
                        data: data
                    }]
                }));
            } catch (error) {
                console.error('Error fetching the data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={chartOptions}
                />
            </div>
        </>
    )
}