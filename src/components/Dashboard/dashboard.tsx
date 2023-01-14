import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Takenote3 } from '../TakeNote3/takenote3'
import { getNotes } from '../../services/dataservices'
import MiniDrawer from '../Drawer/drawer'
import Header from '../Header/header'
const Dashboard = () => {
    const [noteList, setNoteList] = useState([])
    const [drawertoggle, setdrawerToggle] = useState<boolean>(false)
    const [choice, setChoice] = useState<any>('Notes')
    // const headerConfig = {
    //     headers: {
    //         Authorization: localStorage.getItem('token')
    //     }
    // }


    // const getNote = () => {
    //     let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerConfig)
    //     // .then(res => setnote(res.data.data.data))
    //     return response;

    // }
    const litentoHeader = () => {
        setdrawerToggle(!drawertoggle)
    }
    const litentoDrawer = (event: any) => {
        setChoice(event)
    }
    console.log(choice)

    useEffect(() => {
        GetNote()
    }, [choice])
    const GetNote = () => {
        getNotes().then((response) => {
            let filterNotes: any = []

            if (choice === 'Notes') {
                filterNotes = response.data.data.data.filter((notes: { isDeleted: boolean; isArchived: boolean }) => {
                    console.log(notes.isDeleted, "deletedNotes")
                    if (notes.isArchived === false && notes.isDeleted === false) {
                        console.log(notes, "hell")
                        return notes
                    }
                }, console.log(filterNotes, "hello"))
            }
            else if (choice === 'Archive') {
                filterNotes = response.data.data.data.filter((notes: { isArchived: boolean; isDeleted: boolean }) => {
                    if (notes.isArchived === true && notes.isDeleted === false) {
                        return notes
                    }
                })
            }
            else if (choice === 'Trash') {
                filterNotes = response.data.data.data.filter((notes: { isArchived: boolean; isDeleted: boolean }) => {
                    if (notes.isArchived === false || notes.isDeleted === true) {
                        console.log(notes, "deletedNotes")
                        return notes
                    }
                })
            }
            console.log(response)//trigger use effect hook
            setNoteList(filterNotes)//fetching data 

        })
            .catch((error: any) => {
                console.log(error)
            })
    }
    console.log(noteList, "hi")
    // .map((val: any) =>
    //      setnote(val.title)
    //      ));
    // console.log(note,"hi")


    //  note.map((val: any, index: any) =>{
    //     console.log(val.title,"prem")
    //      })

    return (
        <>
            <Header litentoHeader={litentoHeader} /> 
            <MiniDrawer drawertoggle={drawertoggle} litentoDrawer={litentoDrawer} />
            <div style={{ display: 'flex', flexDirection: 'row', border: '0px solid red', flexWrap: 'wrap', justifyContent: 'centre' ,width: '90vw', height: 'auto', marginLeft: '250px', marginTop: '70px'  }}>
            {noteList.map((val: any, index: number) =><Takenote3 name={val} location={val.description} GetNote={GetNote} id={undefined} />)}
                {/* {note.map((val: any, index: number) => <Takenote3 name={val} location={val.description} />)} */}
            
            </div>
        </>
    )
}

export default Dashboard