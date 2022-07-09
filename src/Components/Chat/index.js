import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Grid, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../Loader";
import firebase from 'firebase/compat/app';
import Message from "../Message";

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }
    return (
        <Grid container
              style={{height: window.innerHeight - 50, marginTop: '20px'}}
              justifyContent={'center'}
        >
            <div style={{width: '80%', height: '70vh', border: '2px solid #4865d9', overflowY: 'auto', borderRadius: 5}}>
                {loading && <Loader/>}
                {messages?.map((message, index) =>
                    <Message key={user.uid + index} message={message} user={user}/>
                )}
            </div>
            <Grid container
                  direction={"column"}
                  alignItems={"flex-end"}
                  style={{width: '80%'}}
            >
                <TextField fullWidth
                           id={"standard-basic"}
                           label={"Message"}
                           focused
                           value={value}
                           onChange={e => setValue(e.target.value)}
                           maxRows={2}
                           variant={"outlined"}/>
                <Button onClick={sendMessage} disabled={!value.trim()} variant={"outlined"} color={"primary"}>Send</Button>
            </Grid>
        </Grid>
    );
};

export default Chat;