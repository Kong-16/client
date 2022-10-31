import React from 'react';

export const PriceData = ({ data }) => {

    var convertedData = [Object.keys(data).map((key) =>
        Object.assign({}, { "time": key }, data[key])
    )]
    return (
        convertedData
    )
}