import React from 'react';
import Navigation from "./Navigation";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import "../../css/dashboard/DashboardStyle.css"
import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Chip,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import Graph from "./Graph";
import { VictoryChart, VictoryBar, VictoryAxis } from "victory";
import Bottom from "./Bottom";

const Dashboard = () => {
    const sampleData = [
        2,7,9,14,15,16,17,20
    ]

    const assets = [
        -12.30,
        -0.02,
        -0.04,
        -0.05,
        0.06
    ]

    return (
        <div>
            <Navigation />
            <div id="container">
                <div id="assetContainer">
                    <Card className="assetCard">
                        <CardContent>
                            <Typography variant="h4" component="h4">
                                Total Assets
                            </Typography>
                            <Typography variant="h6" component="h6">
                                <span className="assetPrice">USD $19,148.39</span>
                            </Typography>

                            <Chip
                                label={`+ $1,178.12 (${assets[0]}%)`}
                                className="assetBadge"
                                color="primary"
                                style={{ backgroundColor: `${assets[0] > 0.0 ? "#27ae60" : "#e74c3c"}`, fontSize: 16}}
                            />
                        </CardContent>
                    </Card>

                    <Card className="assetCard">
                        <CardContent>
                            <Typography variant="h4" component="h4">
                                Crypto
                            </Typography>
                            <Typography variant="h6" component="h6">
                                <span className="assetPrice">USD $11,760.62</span>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className="assetCard">
                        <CardContent>
                            <Typography variant="h4" component="h4">
                                Stock
                            </Typography>
                            <Typography variant="h6" component="h6">
                                <span className="assetPrice">USD $7,387.77</span>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div id="datePickerContainer">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <p style={{ margin: 0, padding: 0, fontSize: 12, color: "gray" }}>Range</p>
                        <ButtonGroup color="primary" variant="outlined" aria-label="outlined primary button group" id="monthSelector">
                            <Button>1M</Button>
                            <Button>3M</Button>
                            <Button>6M</Button>
                            <Button>YTD</Button>
                            <Button>1Y</Button>
                            <Button>ALL</Button>
                        </ButtonGroup>
                    </div>

                    <div id="durationSelector">
                        <TextField
                            id="date"
                            label="From"
                            type="date"
                            defaultValue="2020-03-03"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{ marginRight: 32 }}
                        />

                        <TextField
                            id="date"
                            label="To"
                            type="date"
                            defaultValue="2020-03-03"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </div>

                <div id="graphContainer">
                    <Graph />
                </div>

                <div style={{ flexDirection: "row", display: "flex", marginTop: 128 }}>
                    <div id="dataContainer">
                        <h1>Title</h1>
                        <ButtonGroup color="primary" variant="outlined" aria-label="outlined primary button group" style={{ width: "100%" }}>
                            <Button style={{ width: "50%" }}>STOCK</Button>
                            <Button style={{ width: "50%" }}>CRYPTO</Button>
                        </ButtonGroup>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Symbol</TableCell>
                                        <TableCell>Currency</TableCell>
                                        <TableCell># of Shares</TableCell>
                                        <TableCell>Current Price</TableCell>
                                        <TableCell>Total</TableCell>
                                        <TableCell>24H Change</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>VTI</TableCell>
                                        <TableCell>$</TableCell>
                                        <TableCell>30</TableCell>
                                        <TableCell>$205.90</TableCell>
                                        <TableCell>$6,177.00</TableCell>
                                        <TableCell><span style={{ color: `${assets[1] > 0.0 ? "green" : "red"}` }}>{assets[1]}%</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>BLK</TableCell>
                                        <TableCell>$</TableCell>
                                        <TableCell>7</TableCell>
                                        <TableCell>$720.95</TableCell>
                                        <TableCell>$5,046.65</TableCell>
                                        <TableCell><span style={{ color: `${assets[2] > 0.0 ? "green" : "red"}` }}>{assets[2]}%</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>BB</TableCell>
                                        <TableCell>$</TableCell>
                                        <TableCell>360</TableCell>
                                        <TableCell>$13.20</TableCell>
                                        <TableCell>$4,752.00</TableCell>
                                        <TableCell><span style={{ color: `${assets[3] > 0.0 ? "green" : "red"}` }}>{assets[3]}%</span></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>BEN</TableCell>
                                        <TableCell>$</TableCell>
                                        <TableCell>121</TableCell>
                                        <TableCell>$26.15</TableCell>
                                        <TableCell>$3,164.15</TableCell>
                                        <TableCell><span style={{ color: `${assets[4] > 0.0 ? "green" : "red"}` }}>{assets[4]}%</span></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div id="dataContainer">
                        <h1>Title</h1>

                        <VictoryChart
                            horizontal={true}
                            domainPadding={0}>
                            <VictoryAxis style={{
                                axis: {stroke: "transparent"},
                                ticks: {stroke: "transparent"},
                                tickLabels: { fill:"transparent"}
                            }} />
                            <VictoryBar
                                data={sampleData}
                                style={{
                                    data: {
                                        fill: ({ index }) => {
                                            switch(index) {
                                                case 7: return "#00441B"
                                                case 6: return "#006D2C"
                                                case 5: return "#238B45"
                                                case 4: return "#41AB5D"
                                                case 3: return "#74C476"
                                                case 2: return "#A1D99B"
                                                case 1: return "#C7E9C0"
                                                case 0: return "#C7E9C0"
                                                default: return "#C7E9C0"
                                            }
                                        }
                                    }
                                }}
                                barWidth={20}
                                labels={sampleData.map((val) => val + "%")}
                                />
                        </VictoryChart>
                    </div>
                </div>
            </div>

            <Bottom />
        </div>
    );
};

export default Dashboard;