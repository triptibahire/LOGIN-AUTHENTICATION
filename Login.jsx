import {
    Box,

    TextField,
} from "@mui/material";
import React, { useState } from "react";

import Button from "@mui/material/Button";

export const Login = (props) => {


    const [obj, setObj] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setObj((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
        setErrorObj((prev) => {
            return {
                ...prev,
                [e.target.name]: {
                    ...prev[e.target.name],
                    error: false,
                    helperText: "",
                },
            };
        });
    };



    const [errorObj, setErrorObj] = useState({
        email: { error: false, helperText: "" },
        password: { error: false, helperText: "" },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (obj.email && obj.password) {
            console.log('success');
        } else {

            if (!obj.email) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        email: {
                            ...prev.email,
                            error: true,
                            helperText: "Please enter your email",
                        },
                    };
                });
            }
            if (!obj.password) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        password: {
                            ...prev.password,
                            error: true,
                            helperText: "Please enter your password",
                        },
                    };
                });
            }

        }
    };
    return (

        <div className="LoginForm">
            <h2>LOGIN FORM</h2>
            {/* Email id */}
            <Box
                sx={{
                    width: 225,
                    maxWidth: "100%",
                    marginBottom: "20px"
                }}
            >
                <TextField
                    error={errorObj.email.error}
                    helperText={errorObj.email.helperText}
                    fullWidth
                    label="Email Id"
                    id="emailId"
                    name="email"
                    value={obj.email}
                    onChange={handleChange}
                />
            </Box>
            {/* password */}
            <TextField
                error={errorObj.password.error}
                id="pwd"
                label="Password"
                helperText={errorObj.password.helperText}
                name="password"
                value={obj.password}
                onChange={handleChange}
            />


            {/* Button */}
            <Button onClick={handleSubmit} variant="contained">
                Submit
            </Button>

            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>

        </div>
    )
}