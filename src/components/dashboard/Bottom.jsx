import React from 'react';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Bottom = () => {
    return (
        <>
            <div id="about">
                <span style={{ fontSize: 24, fontWeight: "100", color: "#535c68" }}>About MyTaurus</span>
                <br />
                <ArrowRightAltIcon fontStyle={{ fontSize: 24 }}/>
            </div>
            <div id="menu">
                <table width={500}>
                    <tr style={{ height: 70, color: "#535c68" }}>
                        <td>MAIN MENU</td>
                        <td>COMPANY</td>
                        <td>DISCOVER</td>
                        <td>FIND US ON</td>
                    </tr>
                    <tr style={{ color: "#535c68" }}>
                        <td></td>
                        <td>The Team</td>
                        <td>Facebook</td>
                        <td>Press</td>
                    </tr>
                    <tr style={{ color: "#535c68" }}>
                        <td></td>
                        <td>Careers</td>
                        <td>Out History</td>
                        <td>Twitter</td>
                    </tr>
                    <tr style={{ color: "#535c68" }}>
                        <td></td>
                        <td>Press</td>
                        <td>Brand Motto</td>
                        <td>Instagram</td>
                    </tr>
                </table>
            </div>
        </>
    );
};

export default Bottom;