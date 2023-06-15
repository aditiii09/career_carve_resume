import React, { useState,useRef,useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton } from '@mui/material';
import Popover from '@mui/material/Popover';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Button from '@mui/material/Button';
import YesTogg from '../photos/on.png';
import NoTogg from '../photos/off.png';

const Card = ({ parameters, description, setEdit, index, edit, updateParams, updateDisplay, isdisplay }) => {
    const [params, setParams] = useState(parameters);
    const [isDisplay, setIsDisplay] = useState(true);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    //on clicking the edit button
    const handleChange = (e) => {
        setParams(e.target.value);
    }

    //image
    const handleDisplay = () => {
        setIsDisplay(!isDisplay)
    }

    const inputRef = useRef(null);

    useEffect(() => {
        if (edit) {
            inputRef.current.focus();
        }
    }, [edit]);

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.style.width = `${params.length * 8}px`; 
        }
      }, [params]);
    console.log(edit);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2vh', width: "100%" }}>
            <Box sx={{ borderBottom: '0.15px solid #E6E6E6' }}>
                <Box sx={{display:'felx', alignItems:'center',justifyContent:'center', marginBottom: '10px', backgroundColor: edit ? 'white' : '#B6B6B6', height:'40px'}}>
                    <Stack direction="row" spacing={1} paddingTop='6px'>
                        <Typography>
                            <MenuIcon />
                        </Typography>
                        <Typography sx={{
                            ml: "0.5vw",
                            mr: "0.5vw"
                        }}>

                            <InfoOutlinedIcon style={{ color: 'black' }} onClick={handleClick} cursor="default"/> {/* Set desired color */}

                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography sx={{ p: 1 }}>{description}</Typography>
                            </Popover>
                        </Typography>

                        <Typography sx={{ width: '40vw',paddingTop:'0'}} ml="40px">
                            <input
                                name={"params"}
                                type={parameters}
                                value={params}
                                style={{ marginRight: '30vw', border: 'none',height:"25px",paddingLeft: '8px', backgroundColor: edit ? 'white' : '#B6B6B6',display:'flex',                                
                                justifyContent: 'flex-start' }}
                                onChange={handleChange}
                                readOnly={!edit}
                                disabled={!isDisplay}
                                ref={inputRef}
                            />
                        </Typography>
                        <Typography sx={{ width: "5vw" }}>
                            {

                                edit ? (
                                    <Button
                                        onClick={() => {
                                            setEdit(false, index)
                                            updateParams(index,params)
                                        }}
                                        sx={{ color: 'black', mr:"10px" ,pt:"1px" }}
                                        disabled={!isdisplay}>

                                        <Typography sx={{ textTransform: 'none', paddingBottom: '0', paddingTop:"0"}}>Save</Typography>
                                    </Button>
                                ) : (
                                    <Typography>
                                        <IconButton onClick={() => {
                                            setEdit(true, index)
                                        }}
                                            sx={{ ml: '3vw', paddingTop: '0' }} 
                                            disabled={!isDisplay}>
                                            <EditOutlinedIcon cursor="pointer" />
                                        </IconButton>

                                    </Typography>
                                )
                            }</Typography>
                        <Typography sx={{ ml: "30px", marginBottom: "0.1vw" }}>
                            {

                                isDisplay ? (
                                    <img
                                        src={YesTogg}
                                        alt="Yes"
                                        width="40vw"
                                        
                                        sx={{
                                            position: 'fixed',
                                            top: '9px',
                                            left: '10px',
                                            

                                            paddingTop: '0',

                                        }}
                                        onClick={handleDisplay}
                                        style={{ cursor: 'pointer' }}
                                    />

                                ) : (
                                    <img src={NoTogg}
                                        alt="Yes"
                                        width="40vw" // Increase the width as desired
                                        sx={{
                                            position: 'fixed', // Make the position fixed
                                            top: '10px', // Adjust the top position as needed
                                            left: '10px',
                                            paddingTop: '0',
                                        }}
                                        onClick={handleDisplay}
                                        style={{ cursor: 'pointer' }}
                                    />

                                )

                            }</Typography>

                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Card;
