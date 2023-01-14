import { PushPinOutlined, ArchiveOutlined, AddAlertOutlined, PersonAddAltOutlined, UndoOutlined, MoreVertOutlined, RedoOutlined, ImageOutlined } from '@mui/icons-material';
import { Box, Button, Paper, InputBase } from '@mui/material';
import { useState } from 'react';
import ColorPopper from "../colorpopper/colorpopper"
export { }
type Button = {  //👈
    closeButton:any;
    
};

const Takenote2 = (props: Button) => {
    const [inputValues, setInputValues] = useState<{ [x: string]: string }>()
    const [inputFields, setInputFields] = useState({ title: '', description: '', color: '', isArchived: false, isDeleted: false })
    const handleFormSubmit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const data = {
            title: inputValues?.tittle,
            description: inputValues?.description,

        }
        console.log(data, "success message")
        fetch("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization:` ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.warn("resp",resp);;
            resp.json().then((result) => {
                console.log("result", result)
            })
        })

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),
        // };
        // console.log(data, "success message")

        // try {
        //     const response = await fetch('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', requestOptions)
        //     const res = await response.json()
        //     console.log(res)
        //     // localStorage.setItem("token",data.)

        // } catch (error) {
        //     console.log(error)
        // }
        // console.log("success")
        {props.closeButton()}
    }


    const taketittle = (event: { target: { value: any; }; }) => {
        setInputValues(prevState => ({
            ...prevState,
            tittle: event.target.value
        }))
        console.log(event.target.value)
    }
    const takedescription = (event: { target: { value: any; }; }) => {
        setInputValues(prevState => ({
            ...prevState,
            description: event.target.value
        }))
        console.log(event.target.value)
    }
    const listenToColorPopper = (colour: any) => {
        setInputFields(prevState => ({
            ...prevState,
            color: colour
        }))
    }

    return (
        <Box sx={{
            border: '0px solid red',
            width: '49vw',
            height: '18vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
        }}>
            <Paper  elevation={3} sx={{
                width: '100%',
                height: '120%',
                border: '0px solid blue',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                left: '430px',
                top: '75px'
            }}>
                <Box sx={{
                    width: '95%',
                    height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    color: '#202124',
                    fontWeight: '400',
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '35%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            width: '50%',
                            height: '100%',
                            textAlign: 'start',
                        }}>
                            <InputBase onChange={taketittle} placeholder='Title' />
                        </Box>
                        <Box sx={{
                            width: '7%',
                            border: '0px solid red'
                        }}>
                            <PushPinOutlined color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "6px", borderRadius: "50%" } }} />
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '30%',
                        textAlign: 'start',
                    }}>
                        <InputBase onChange={takedescription} placeholder='Take a note...' />
                    </Box>
                </Box>
                <Box sx={{
                    width: '97%',
                    height: '30%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        width: '65%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '0px solid red'
                    }}>
                        <Box sx={{ width: '11%', border: '0px solid red' }}><AddAlertOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%', border: '0px solid red' }}><PersonAddAltOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%', border: '0px solid red' }}><ColorPopper listenToColorPopper={listenToColorPopper} action="create" color="action" id={undefined} listenToColorUpdate={undefined}  /></Box> 
                        <Box sx={{ width: '11%', border: '0px solid red' }}><ImageOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><ArchiveOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><MoreVertOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><UndoOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                        <Box sx={{ width: '11%' }}><RedoOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    </Box>
                    <Button onClick={handleFormSubmit}  variant="contained">Close</Button>
                </Box>
            </Paper >
        </Box >
    )
}

export default Takenote2