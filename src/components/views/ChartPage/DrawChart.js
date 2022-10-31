import React, { useEffect, useRef } from 'react';
import preConvertData from '../Data/Price.json';
import { createChart, CrosshairMode } from 'lightweight-charts';

const styleInfo = {
    paddingLeft: '50px',
    paddingTop: '100px'
}

function DrawChart() {
    const chartContainerRef = useRef();
    const chart = useRef();

    function lowerCaseInnerKey(innerobj) {
        var tmp = {}
        Object.entries(innerobj).map(([key, value]) =>
            tmp[key.toLowerCase()] = value
        )
        return tmp
    }


    var convertedData = Object.entries(preConvertData).map(([key, value]) =>
        Object.assign({}, { "time": key }, lowerCaseInnerKey(value))
    )


    useEffect(() => {
        chart.current = createChart(chartContainerRef.current, {
            width: 1000,
            height: 400,
            layout: {
                backgroundColor: '#253248',
                textColor: 'rgba(255,255,0.9)',
            },
            grid: {
                vertLines: {
                    color: '#334158'
                }
            },
            crosshair: {
                mode: CrosshairMode.Normal
            },
            priceScale: {
                borderColor: "#485c7b"
            },
            timeScale: {
                borderColor: '#485c7b'
            }
        });

        const candleSeries = chart.current.addCandlestickSeries({
            upColor: "#4bffb5",
            downColor: "#ff4976",
            borderDownColor: "#ff4976",
            borderUpColor: "#4bffb5",
            wickDownColor: "#838ca1",
            wickUpColor: "#838ca1"
        });

        console.log(convertedData)
        candleSeries.setData(convertedData)
    }, []);

    return (
        <div ref={chartContainerRef} style={styleInfo} />
    )
}

export { DrawChart }