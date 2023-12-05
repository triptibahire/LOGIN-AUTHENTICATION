import {
    Box,
    Checkbox,
    FormGroup,
    InputLabel,
    Select,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";

export const Register = (props) => {

    const [obj, setObj] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPwd: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        village: "",
        district: "",
        pinCode: "",
        state: "",
        gender: "",
        course: [],
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


    const [selectedCourse, setSelectedCourse] = useState([]);
    const [course, setCourse] = useState({
        HTML: false,
        CSS: false,
        JAVASCRIPT: false,
        REACTJS: false,
        NEXTJS: false,
        ANGULARJS: false,
        GATSBY: false,
        NODEJS: false,
        EXPRESSJS: false,
    });

    const handleAddCourses = (e) => {
        if (e.target.checked) {
            setSelectedCourse((prev) => [...prev, e.target.value]);
            setCourse((prev) => {
                return {
                    ...prev,
                    [e.target.name]: true,
                };
            });
        } else {
            const position = selectedCourse.indexOf(e.target.value);
            selectedCourse.splice(position, 1);
            setCourse((prev) => {
                return {
                    ...prev,
                    [e.target.name]: false,
                };
            });
        }
    };
    const statesList = [
        "Maharashtra",
        "Gujarat",
        "Rajasthan",
        "Uttar Pradesh",
        "Andhra Pradesh",
        "Telangana",
        "Karnataka",
        "Kerala",
        "Goa",
        "Tamil Nadu",
        "Punjab",
        "West Bengal",
    ];

    const [errorObj, setErrorObj] = useState({
        fname: { error: false, helperText: "" },
        lname: { error: false, helperText: "" },
        email: { error: false, helperText: "" },
        password: { error: false, helperText: "" },
        confirmPwd: { error: false, helperText: "" },

        city: { error: false, helperText: "" },
        village: { error: false, helperText: "" },
        district: { error: false, helperText: "" },

        pinCode: { error: false, helperText: "" },
        state: { error: false, helperText: "" },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            obj.fname &&
            obj.lname &&
            obj.email &&
            obj.password &&
            obj.confirmPwd &&
            obj.city &&
            obj.village &&
            obj.district &&
            obj.pinCode &&
            obj.state
        ) {
            if (obj.password === obj.confirmPwd) {
            } else {

                setErrorObj((prev) => {
                    return {
                        ...prev,
                        confirmPwd: {
                            ...prev.confirmPwd,
                            error: true,
                            helperText: "password is not matching",
                        },
                    };
                });

            }
        } else {
            if (!obj.fname) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        fname: {
                            ...prev.fname,
                            error: true,
                            helperText: "Please enter your first name",
                        },
                    };
                });
            }
            if (!obj.lname) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        lname: {
                            ...prev.lname,
                            error: true,
                            helperText: "Please enter your last name",
                        },
                    };
                });
            }
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
            if (!obj.confirmPwd) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        confirmPwd: {
                            ...prev.confirmPwd,
                            error: true,
                            helperText: "Please enter your confirm password",
                        },
                    };
                });
            }
            if (!obj.city) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        city: {
                            ...prev.city,
                            error: true,
                            helperText: "Please enter your city",
                        },
                    };
                });
            }
            if (!obj.village) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        village: {
                            ...prev.village,
                            error: true,
                            helperText: "Please enter your village",
                        },
                    };
                });
            }
            if (!obj.district) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        district: {
                            ...prev.district,
                            error: true,
                            helperText: "Please enter your district",
                        },
                    };
                });
            }
            if (!obj.pinCode) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        pinCode: {
                            ...prev.pinCode,
                            error: true,
                            helperText: "Please enter your pincode",
                        },
                    };
                });
            }
            if (!obj.state) {
                setErrorObj((prev) => {
                    return {
                        ...prev,
                        state: {
                            ...prev.state,
                            error: true,
                            helperText: "Please enter your state",
                        },
                    };
                });
            }
        }
    };
    return (

        <div className="RegistrationForm">
            <h1>REGISTRATION FORM</h1>
            <div className="userName">
                {/* user first name */}
                <TextField
                    error={errorObj.fname.error}
                    id="fName"
                    label="First Name"
                    helperText={errorObj.fname.helperText}
                    name="fname"
                    value={obj.fname}
                    onChange={handleChange}
                />
                {/* user last name */}
                <TextField
                    error={errorObj.lname.error}
                    id="outlined-error-helper-text"
                    label="Last Name"
                    helperText={errorObj.lname.helperText}
                    name="lname"
                    value={obj.lname}
                    onChange={handleChange}
                />
            </div>
            {/* Email id */}
            <Box
                sx={{
                    width: 720,
                    maxWidth: "100%",
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

            <div className="password">
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
                {/* confirm password */}
                <TextField
                    error={errorObj.confirmPwd.error}
                    id="cnfpwd"
                    label="Confirm Password"
                    helperText={errorObj.confirmPwd.helperText}
                    name="confirmPwd"
                    value={obj.confirmPwd}
                    onChange={handleChange}
                />
            </div>
            {/* gender */}
            <FormControl
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "20px",
                }}
            >
                <FormLabel id="gender" sx={{ marginRight: "40px", fontSize: "20px" }}>
                    Gender
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="gender"
                    name="gender"
                    value={obj.gender}
                    onChange={handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            {/* courses */}
            <div className="courses">
                <h2>Select Courses</h2>
                <FormGroup>
                    <div className="oneGroup">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="HTML"
                                    onChange={handleAddCourses}
                                    value={"HTML"}
                                    checked={course.HTML}
                                />
                            }
                            label="HTML"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="CSS"
                                    onChange={handleAddCourses}
                                    value={"CSS"}
                                    checked={course.CSS}
                                />
                            }
                            label="CSS"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="JAVASCRIPT"
                                    onChange={handleAddCourses}
                                    value={"JAVASCRIPT"}
                                    checked={course.JAVASCRIPT}
                                />
                            }
                            label="JAVASCRIPT"
                        />
                    </div>
                    <div className="oneGroup">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="REACTJS"
                                    onChange={handleAddCourses}
                                    value={"REACTJS"}
                                    checked={course.REACTJS}
                                />
                            }
                            label="REACTJS"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="NEXTJS"
                                    onChange={handleAddCourses}
                                    value={"NEXTJS"}
                                    checked={course.NEXTJS}
                                />
                            }
                            label="NEXTJS"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="ANGULARJS"
                                    onChange={handleAddCourses}
                                    value={"ANGULARJS"}
                                    checked={course.ANGULARJS}
                                />
                            }
                            label="ANGULARJS"
                        />
                    </div>
                    <div className="oneGroup">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="GATSBY"
                                    onChange={handleAddCourses}
                                    value={"GATSBY"}
                                    checked={course.GATSBY}
                                />
                            }
                            label="GATSBY"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="NODEJS"
                                    onChange={handleAddCourses}
                                    value={"NODEJS"}
                                    checked={course.NODEJS}
                                />
                            }
                            label="NODEJS"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="EXPRESSJS"
                                    onChange={handleAddCourses}
                                    value={"EXPRESSJS"}
                                    checked={course.EXPRESSJS}
                                />
                            }
                            label="EXPRESSJS"
                        />
                    </div>
                </FormGroup>
            </div>

            {/* address */}
            <div className="address">
                {/* address line 1 */}
                <Box
                    sx={{
                        width: 720,
                        margin: 2,
                        maxWidth: "100%",
                    }}
                >
                    <TextField fullWidth label="Address Line 1" id="addLine1" />
                </Box>
                {/* address line 2 */}
                <Box
                    sx={{
                        width: 720,
                        margin: 2,
                        maxWidth: "100%",
                    }}
                >
                    <TextField fullWidth label="Address Line 2" id="addLine1" />
                </Box>
                <div className="cityNVillage">
                    {/* village */}
                    <TextField
                        error={errorObj.village.error}
                        id="village"
                        label="Village"
                        // defaultValue="Hello World"
                        helperText={errorObj.village.helperText}
                        name="village"
                        value={obj.village}
                        onChange={handleChange}
                    />
                    {/* city */}
                    <TextField
                        error={errorObj.city.error}
                        id="city"
                        label="City"
                        // defaultValue="Hello World"
                        helperText={errorObj.city.helperText}
                        name="city"
                        value={obj.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="distNState">
                    {/* district */}
                    <TextField
                        error={errorObj.district.error}
                        id="district"
                        label="District"

                        helperText={errorObj.district.helperText}
                        name="district"
                        value={obj.district}
                        onChange={handleChange}
                    />
                    {/* pincode */}
                    <TextField
                        error={errorObj.pinCode.error}
                        id="pinCode"
                        label="PinCode"

                        helperText={errorObj.pinCode.helperText}
                        name="pinCode"
                        value={obj.pinCode}
                        onChange={handleChange}
                    />
                </div>
                {/* state */}
                <Box sx={{ minWidth: 120, width: "700px", marginLeft: "10px" }}>
                    <FormControl
                        fullWidth
                        error={errorObj.state.error}
                        helperText={errorObj.state.helperText}
                    >
                        <InputLabel id="selectSate">Select State</InputLabel>
                        <Select
                            labelId="selectState"
                            id="selectState"

                            label="Select State"

                            name="state"
                            value={obj.state}
                            onChange={handleChange}
                        >
                            {statesList.map((val, i) => (
                                <MenuItem key={i} value={val}>
                                    {val}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                </Box>
            </div>
            {/* Button */}
            <Button onClick={handleSubmit} variant="contained">
                Submit
            </Button>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?  Login here.</button>

        </div>
    )
}