import React, { useEffect, useState } from 'react'
import { PushPinOutlined, ArchiveOutlined, AddAlertOutlined, PersonAddAltOutlined, UndoOutlined, MoreVertOutlined, RedoOutlined, ImageOutlined } from '@mui/icons-material';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
//  import {
//     AddAlertOutlined,
//     DeleteIcon,
//     ColorLensOutlinedIcon,
//      ArchiveOutlined,
//      MoreVertOutlined
//  }from '@mui/icons-material';
import axios from 'axios';

import { Box, Button, Typography, Paper, InputBase } from '@mui/material';
import { UpdateArchive, UpdateTrash } from '../../services/dataservices';
import ColorPopper from '../colorpopper/colorpopper';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
type BioProps = {  //👈
    name: any;
    location: string;
    GetNote:any;
    id:any;
    
};

export const Takenote3 = (props: BioProps) => {

    const updateArchive = () => {
        let data = {
            noteIdList: [props.name.id],
            isArchived: true
        }
        UpdateArchive(data).then((response) => props.GetNote())
            .catch((error) => console.log(error))
    }
    const updateTrash = () => {
        let data1 = {
            noteIdList: [props.name.id],
            isDeleted: true
        }
        UpdateTrash(data1).then((response) =>  props.GetNote())
            .catch((error) => console.log(error))
    }
    const listenToColorUpdate = () => {
        props.GetNote()
    }
    

    console.log(props, "what")
    return (
        <Paper elevation={0}
            sx={{
                height: 150,
                width: 250,
                backgroundColor: 'white',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                border: '0px solid red',
                top: '0px',
                right: '0px',
                position: 'relative',
                margin: 1,

            }}
        >
            <Box sx={{
                border: '1px solid #cecdcd',
                borderRadius: '10px',
                height: 150,
                width: 250,
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Box style={{ backgroundColor: props.name.color }} sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'coulmn',
                    justifyContent: 'space-evenly',
                    color: '#202124',
                    fontWeight: '400',
                    border: '0px solid yellow',
                    flexWrap: 'wrap',
                    borderRadius:"5px"
                }}>
                    <Box  sx={{
                        width: '100%',
                        height: '20%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        border: '0px solid black',
                        marginLeft: 1,
                        marginTop: 1

                    }}>
                        <Box
                            sx={{
                                width: '15%',
                                height: '100%',
                                textAlign: 'flex-end',
                                border: '0px solid yellow',
                            }}>
                            <Typography variant="h6" gutterBottom sx={{ border: '0px solid yellow', }}>
                                {props.name.title}

                            </Typography>
                            

                        </Box>
                        <Box sx={{
                            width: '15%',
                            height: '80%',
                            border: '0px solid red',
                            display: 'flex-start',
                            alignItems: 'center',

                        }}>
                            {/* <PushPinOutlined color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", marginRight: 2, borderRadius: "50%" } }} /> */}
                        </Box>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        height: '40%',
                        textAlign: 'start',
                        marginLeft: 1,

                        border: '0px solid red',
                    }}>
                        <Typography variant="h6" gutterBottom sx={{ border: '0px solid yellow' }}>
                            {props.name.description}
                        </Typography>


                    </Box>
                    <Box sx={{ width: '11%', border: '0px solid red' }}><AddAlertOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '11%', border: '0px solid red' }}><PersonAddAltOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <ColorPopper id={props.name.id} action="update"
                    listenToColorUpdate={listenToColorUpdate} listenToColorPopper={undefined} color={undefined}                    />
                    <Box sx={{ width: '11%', border: '0px solid red' }}><DeleteOutlineOutlinedIcon
                        onClick={updateTrash}
                        fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '11%' }}><ArchiveOutlined
                        onClick={updateArchive}
                        fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '11%' }}><MoreVertOutlined fontSize="small" color="action"  /></Box>
                    


                    {/* <Box sx={{ width: '13%', border: '0px solid red' }}><AddAlertOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '13%', border: '0px solid red' }}><AddAlertOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '13%', border: '0px solid red' }}><ColorLensOutlinedIcon  action="update"
                         sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box> 
                    <Box sx={{ width: '13%', border: '0px solid red' }}><DeleteIcon fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '13%' }}><ArchiveOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                    <Box sx={{ width: '8%', border: '0px solid red', }}><MoreVertOutlined fontSize="small" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box> */}
                </Box>
            </Box>

        </Paper>
    )
}
