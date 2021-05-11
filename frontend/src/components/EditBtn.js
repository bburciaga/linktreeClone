import React from 'react'
import {IconButton} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';

import { useState } from 'react';

const StyledIcon = withStyles ({
    root: {
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        height: "44px",
        width: "44px",
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .5s,border-color .5s,color .5s",
        "&:hover": {
            transition: ".5s",
            backgroundColor: "#4f25f7",
            boxShadow: "0 0 0 0",
        },
    },
})(IconButton)

function EditBtn() {
    const [state, setCount] = useState(true);
    var text;

    if(state === true)
        text = "ON";
    else text = "OFF";

    return (
        <div>
            <p>{text}</p>
            <StyledIcon onClick={() => setCount(!state)}>
                <EditIcon />
            </StyledIcon>
        </div>
    )
}

export default EditBtn
