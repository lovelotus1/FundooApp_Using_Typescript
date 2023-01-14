import axios from 'axios'
const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

// export const addNote = (takeNote2Obj) => {

//     let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',takeNote2Obj,headerConfig)
//     return response;
// }
export const getNotes = () => {

    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerConfig)

    return response;
}
export const UpdateArchive = (updatearchiveObj: { noteIdList: any[]; isArchived: boolean; }) => {

    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', updatearchiveObj, headerConfig)
    return response;
}
export const UpdateTrash = (updatetrashObj: any) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', updatetrashObj, headerConfig)
    return response;
}
export const changesColorNotes = (noteObj: any) => {
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', noteObj,
        headerConfig)
    return response
}