import axios from "../../axiosInstance"
import React, { useState, useEffect } from "react";
import {Input} from "@mui/material"

const Profile = () => {
    useEffect(() => {
        axios.post("/getuser", localStorage.getItem("email")).then(res => {
        })
    })

    return <>
        <Input placeholder="Email" />
        <Input placeholder="FirstName" />
        <Input placeholder="LastName" />
    </>
}

export default Profile;