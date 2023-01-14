import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import {ColorLensOutlined } from '@mui/icons-material';
import { changesColorNotes } from "../../services/dataservices";
type color = {
  id: any;  //👈
  listenToColorPopper:any;
  action:any;
  color:any;
  listenToColorUpdate:any;
};
export default function SimplePopper(props:color) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const selectColor = (colour: string) => {
    if (props.action === "create") {
        props.listenToColorPopper(colour)
        //console.log(colour,"Create color")
    } else if (props.action === "update") {
        let inputColor = { noteIdList: [props.id], color: colour }
        changesColorNotes(inputColor).then((response: any) => {
            console.log(response)
            //props.autoRefresh()   
            props.listenToColorUpdate()
        }).catch((error: any) => console.log(error))
        console.log(colour, "Update color")
    }
}

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <Box  aria-describedby={id}  onClick={handleClick}>
      <ColorLensOutlined  fontSize="small" color="action"/>
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                    {
                        colors.map((color) => (
                            <div style={{ height: 25, width: 25, borderRadius: 100, backgroundColor: color, marginLeft: 5 }} onClick={() => selectColor(color)}></div>
                        ))
                    }
                </Box>
            </Popper>
    </div>
  );
}