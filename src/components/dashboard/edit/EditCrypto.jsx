import React from 'react';
import Navigation from "../Navigation";
import "../../../css/dashboard/DashboardStyle.css"
import "../../../css/dashboard/edit/EditStyle.css"
import {
    ButtonGroup,
    Button,
    Card,
    CardContent,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell, TableBody, TextField
} from "@material-ui/core";
import Bottom from "../Bottom";

const EditCrypto = () => {
    const tableData = [
        ["VTI", "dollar", "30", "$", "205.90", "$6,177.00"],
        ["BLK", "dollar", "7", "$", "720.95", "$5,046.65"],
        ["BB", "dollar", "360", "$", "13.20", "$4,752.00"],
        ["BEN", "dollar", "121", "$", "26.15", "$3,164.15"],
        ["LB", "dollar", "55", "$", "50.38", "$2,770.90"],
        ["TTD", "dollar", "2", "$", "847.95", "$1,695.90"],
        ["LMT", "dollar", "4", "$", "337.24", "$1,348.96"],
        ["LMT", "dollar", "-", "$", "2,201.77", "$24,955.56"],
        ["VTI", "dollar", "16", "$", "205.90", "$3,294.40"],
        ["BLK", "dollar", "8", "$", "720.95", "$5,767.60"],
        ["BB", "dollar", "151", "$", "13.20", "$1,993.20"],
        ["BEN", "dollar", "985", "$", "26.15", "$25,757.75"],
        ["LB", "dollar", "35", "$", "50.38", "$1,763.30"],
        ["TTD", "dollar", "9", "$", "847.95", "$7,631.55"],
        ["LMT", "dollar", "8", "$", "337.24", "$2,697.92"],
        ["LMT", "dollar", "15", "$", "2,201.77", "$48,905.72"]
    ]

    return (
        <div>
            <Navigation />

            <div id="container">
                <ButtonGroup color="primary" aria-label="outlined primary button group" id="menuContainer">
                    <Button className="menuButton">Stock</Button>
                    <Button className="menuButton">Crypto</Button>
                    <Button className="menuButton">Extra</Button>
                </ButtonGroup>

                { /* TABLE OF EDIT */ }
                <Card className="menuTitleContainer">
                    <CardContent>
                        <Typography>
                            <span>EDIT</span>
                        </Typography>
                    </CardContent>
                </Card>

                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>SYMBOL</TableCell>
                                <TableCell>CURRENCY</TableCell>
                                <TableCell>NUMBER OF STOCKS</TableCell>
                                <TableCell>CURRENT</TableCell>
                                <TableCell>PRICE</TableCell>
                                <TableCell>TOTAL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                tableData.map((row) => (
                                    <TableRow>
                                        <TableCell>{row[0]}</TableCell>
                                        <TableCell>{row[1]}</TableCell>
                                        <TableCell>{row[2]}</TableCell>
                                        <TableCell>{row[3]}</TableCell>
                                        <TableCell>{row[4]}</TableCell>
                                        <TableCell>{row[5]}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

                <br /><br /><br /><br />

                <Card className="menuTitleContainer">
                    <CardContent>
                        <Typography>
                            <span>ADD</span>
                        </Typography>
                    </CardContent>
                </Card>

                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>SYMBOL</TableCell>
                                <TableCell>CURRENCY</TableCell>
                                <TableCell>NUMBER OF STOCKS</TableCell>
                                <TableCell>CURRENT PRICE</TableCell>
                                <TableCell>TOTAL</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                                <TableCell>
                                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Data" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="contained" color="primary" style={{ width: 150, margin: 16 }}>
                        SAVE
                    </Button>
                </div>

                <Bottom />
            </div>
        </div>
    );
};

export default EditCrypto;