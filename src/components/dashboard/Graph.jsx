import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LineMarkSeries} from 'react-vis';

const Graph = () => {
    return (
        <XYPlot width={1200} height={400}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            {/*<LineMarkSeries
                style={{
                    strokeWidth: '3px',
                    fill: "#00000000"
                }}
                lineStyle={{stroke: 'red'}}
                markStyle={{stroke: 'blue'}}
                data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 10}, {x: 5, y: 5}, {x: 6, y: 15}]}
            />*/}
            <LineMarkSeries
                style={{
                    fill: "#00000000"
                }}
                curve={'curveMonotoneX'}
                data={[{x: 1, y: 11}, {x: 2, y: 29}, {x: 3, y: 7},{x: 4, y: 11}, {x: 5, y: 29}, {x: 6, y: 7}]}
            />
        </XYPlot>
    );
};

export default Graph;