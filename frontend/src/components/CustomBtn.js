import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        //display: "flex",
        //alignItem: "center",
        //justifyContent: "center",
        height: "44px",
        width: "200px",
        padding: "0 25px",
        margin: "15px 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .5s,border-color .5s,color .5s",
        "&:hover": {
            transition: ".5s",
            backgroundColor: "#4f25f7"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function CustomBtn(props) {
    return (
        <StyledButton 
            variant="contained"
            disabled={props.disabled}
            onClick={ () => props.onClick() }
        >
            {props.txt}
        </StyledButton>
    )
}

export default CustomBtn
