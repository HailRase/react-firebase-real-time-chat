import React from 'react';
import {Avatar, Grid, Paper, Typography} from "@material-ui/core";

const Message = ({user, message}) => {
    return (
        <Paper style={{
            margin: 10,
            border: user.uid === message?.uid ? '2px solid green' : '2px solid #4865d9',
            marginLeft: user.uid === message?.uid ? 'auto' : '10px',
            maxWidth: '30%',
            padding: 5,
        }}
        >
            <Grid container alignItems={"flex-start"} wrap={"wrap"} spacing={1} zeroMinWidth>
                <Grid item>
                    <Avatar src={message?.photoURL} variant={"circular"}/>
                </Grid>
                <Grid item>{message?.displayName}</Grid>
            </Grid>
            <Grid item xs zeroMinWidth>
                <Typography wrap={"wrap"}>{message?.text}</Typography>
            </Grid>
        </Paper>
    );
};

export default Message;