import React, { useEffect, useRef } from 'react';
import preConvertData from '../Data/Price.json';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { Paper } from '@mui/material';

function DrawChart() {
    const chartContainerRef = useRef();
    const chart = useRef();
    const resizeObserver = useRef();

    function lowerCaseInnerKey(innerobj) {
        var tmp = {}
        Object.entries(innerobj).slice(0).reverse().map(([key, value]) => {
            if (value === 0) value = tmp['close']
            tmp[key.toLowerCase()] = value
            return 0;
        }
        )
        return tmp
    }

    if (typeof preConvertData === 'string') preConvertData = JSON.parse(preConvertData)
    var convertedData = Object.entries(preConvertData).map(([key, value]) =>
        Object.assign({}, { "time": key }, lowerCaseInnerKey(value))
    )


    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, {
            layout: {
                backgroundColor: '#283237',
                textColor: '#cae797', //#f7cd7a  cae797
            },
            grid: {
                vertLines: {
                    color: '#334158'
                }
            },
            crosshair: {
                mode: CrosshairMode.Normal,
            },
            priceScale: {
                borderColor: "#485c7b"
            },
            timeScale: {
                borderColor: '#485c7b'
            }
        });

        const candleSeries = chart.current.addCandlestickSeries({
            upColor: "#ec6a5e", // rgba 형식으로 쓰면 느림... 왜느린지는 모름
            downColor: "#4a9df8",
            borderDownColor: "#4a9df8",
            borderUpColor: "#ec6a5e",
            wickDownColor: "#4a9df8",
            wickUpColor: "#ec6a5e"
        });

        console.log(convertedData)
        candleSeries.setData(convertedData)
    }, [convertedData]);
    useEffect(() => {
        resizeObserver.current = new ResizeObserver(entries => {
            const { width, height } = entries[0].contentRect;
            chart.current.applyOptions({ width, height });
            setTimeout(() => {
                chart.current.timeScale().fitContent();
            }, 0)
        });
        resizeObserver.current.observe(chartContainerRef.current);
        return () => resizeObserver.current.disconnect();
    }, []);
    return (
        <Paper ref={chartContainerRef}
            sx={{ padding: 0, width: 1, height: 1 }} />
    )
}

export { DrawChart }