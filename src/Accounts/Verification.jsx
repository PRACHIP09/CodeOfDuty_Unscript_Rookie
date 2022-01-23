import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";

export default function Verification() {

    const old_token = useParams().token
    console.log(old_token)
    const hist = useHistory()

    async function verify() {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: '127.0.0.1:8000/account/email-verify/',
            headers: {
                'Authorization': 'Bearer ' + old_token
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                hist.push('/home');
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <center style={{ margin: '100px' }}>
            <h2>To verify your Email click on below button</h2>
            <Button variant="contained" onClick={verify} component={Link} >Verify</Button>
        </center>
    );
};