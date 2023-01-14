import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import './signup.css'

const Signup = () => {
    const [inputValues, setInputValues] = useState<{ [x: string]: string }>()

    const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const data = {
            firstName: inputValues?.firstName,
            email: inputValues?.email,
            lastName: inputValues?.lastName,
            password: inputValues?.password,
            service: "advance",
        }
        console.log(data, "success message")

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        console.log(data, "success message")

        try {
            const response = await fetch('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', requestOptions)
            const res = await response.json()
            console.log(res)
            //  localStorage.setItem("token",data.email)

        } catch (error) {
            console.log(error)
        }
        console.log("success")
    }
    const takeUserFirstName = (event: { target: { value: any; }; }) => {
        setInputValues(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserLastName = (event: { target: { value: any; }; }) => {
        setInputValues(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUsername = (event: { target: { value: any; }; }) => {
        setInputValues(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeUserpassword = (event: { target: { value: any; }; }) => {
        setInputValues(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }
    return (
        <Box className='container'>
            <Box className="input">
                <Box className="input-child">
                    <Box className='input-child1'>
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" width={100} />
                    </Box>
                    <p>Create your Google account</p>
                    <Box className="input-child3">
                        <TextField
                            label="First name"
                            id="outlined-size-small"
                            size="small"
                            onChange={takeUserFirstName}
                        />
                        <TextField
                            label="Last name"
                            id="outlined-size-small"
                            size="small"
                            onChange={takeUserLastName}
                        />
                    </Box>
                    <Box className="input-child4">
                        <TextField
                            label="Username"
                            id="outlined-size-small"
                            size="small"
                            onChange={takeUsername}
                        />
                    </Box>
                    <Box className="input-child5">
                        <span>Use my current email address instead</span>
                    </Box>
                    <Box className="missing">
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            size="small"
                            onChange={takeUserpassword}
                        />
                        <TextField
                            label="Confirm"
                            variant="outlined"
                            size="small"
                            onChange={takeUserpassword}
                        />
                    </Box>
                    <Box className="input-child6">
                        {/* <span>Use 8 or more characters with a mix of letters, numbers & symbols</span> */}
                    </Box>
                    <Box className="checkbox">
                    </Box>
                    <Box className="input-child7">
                        <Button variant="text" >Sign in instead</Button>
                        <Button
                            id="nextbtnSU"
                            variant="contained"
                            size="medium"
                            onClick={handleFormSubmit}
                        >Next
                        </Button>
                    </Box>
                </Box>
                <Box className="img-g">
                    <Box className='logo12'>
                        <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" width={500} />
                    </Box>
                    <Box className="txr-centr">
                        <span>One account. All of Google<br></br> working for you.</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Signup