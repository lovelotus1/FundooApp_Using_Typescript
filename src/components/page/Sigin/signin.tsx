import { Box, TextField, Button } from '@mui/material';
import React, {  useState } from 'react';
export { }

export default function Signin() {
  const [inputValues, setInputValues] = useState<{ [x: string]: string }>()

  const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      const data = {
          email: inputValues?.email,
          password: inputValues?.password,
          
      }
      console.log(data, "success message")

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)

      };
      console.log(data, "success message")

      try {
          const response = await fetch('http://fundoonotes.incubation.bridgelabz.com/api/user/login', requestOptions)
          const res = await response.json()
          console.log(res,"hello")
           localStorage.setItem("token",res.id)

      } catch (error) {
          console.log(error)
      }
      console.log("success")
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
    <div className='abc'>
      <Box style={{
        "display": "flex",
        "border": "2px solid black",
        "width": "auto",
        "height": "100vh",
        "justifyContent": "center",
        "alignItems": "center",
      }}>
        <Box style={{
          "display": "flex",
          "border": "1px solid grey",
          "width": "35%",
          "height": "80%",
          "flexDirection": "column",
          "borderRadius": "15px",
        }}>
          <Box style={{
            "display": "flex",
            "border": "0px solid red",
            "width": "100%",
            "height": "15%",
            "position": "relative",
          }}>
            <img style={{
              "display": "flex",
              "alignItems": "center",
              "justifyContent": "center",
              "width": "50%",
              "height": "90%",
              "marginTop": "30px",
              "marginLeft": "110px",
            }} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
          </Box>
          <Box style={{
            "display": "flex",
            "flexDirection": "column",
          }} >
            <Box >
              <h2 style={{ "color": "grey" }}>Sign in </h2>
            </Box>
            <Box style={{ "marginTop": "-30px", "color": "grey" }} >
              <h3>Use your Google Account</h3>
            </Box>
            <TextField style={{ "marginLeft": "70px", "width": "70%" }} 
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={takeUsername}
               />
            <span style={{ "marginLeft": "-230px", "marginTop": "0px", "marginBottom": "5px", "color": "blue" }}>Forgot email?</span>
            <TextField style={{ "marginLeft": "70px", "width": "70%" }} 
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              onChange={takeUserpassword}
            />
            <span style={{ "marginLeft": "-205px", "marginTop": "0px", "marginBottom": "5px", "color": "blue" }}>Forget password?</span>
            <span style={{ "marginLeft": "64px", "marginTop": " 10px", "color": "grey" }}>Not your computer? Use Guest mode to sign in privately. </span>
            <span style={{ "marginLeft": "-245px", "color": "blue" }}>Learn more ? </span>
            <Box style={{
              "display": "flex",
              "flexDirection": "row",
              "position": "relative",
            }}>
              <Button style={{ "marginLeft": "60px", "marginTop": "10px" }} variant="text"  >Create account</Button>
              <Button style={{ "marginLeft": "150px", "marginTop": "13px" ,"height" : "30px"}} variant="contained"
                size="small"
                color="primary"
                onClick={handleFormSubmit}
                >Next</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
