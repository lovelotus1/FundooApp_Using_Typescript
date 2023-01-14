import {CheckBoxOutlined,BrushOutlined,ImageOutlined} from '@mui/icons-material';
import { Box, Paper } from '@mui/material';
import { useState } from 'react';
import Takenote2 from '../TakeNote2/takenote2';
export {}
const Takenote1 = () => {
  const [view, setview] = useState<Boolean>(false)
  const openNoteTwo = () => {
    setview(!view)
    // console.log(view,"ok")
}
  return (
    <>
    <Box sx={{
      width: '49vw',
      height: '6vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
  }} >
      <Paper elevation={3} onClick={openNoteTwo} sx={{
          width: '200%',
          height: '120%',
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '5px',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          left: '430px',
          top: '120px',
      }} >
          <Box sx={{
              width: '95%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
          }} >
              <Box sx={{
                  width: '40%',
                  height: '50%',
                  textAlign: 'start',
                  fontWeight: '400',
                  color: '#202124',
              }} >
                  <span>Take a note...</span>
              </Box>
              <Box sx={{
                  width: '25%',
                  height: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  textAlign: 'center',
              }} >
                  <Box sx={{ width: '33%' }} ><CheckBoxOutlined color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                  <Box sx={{ width: '33%' }} ><BrushOutlined color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
                  <Box sx={{ width: '33%' }}><ImageOutlined color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></Box>
              </Box>
          </Box>
      </Paper> 
  </Box>
  
  {view?<Takenote2 closeButton={openNoteTwo} />:""}
  </>
  )
}

export default Takenote1