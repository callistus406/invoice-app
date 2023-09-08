import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Inputs.css"
interface InputProps {
    label: string
}
export const Input: React.FC<InputProps> = ({ label }) => {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <label htmlFor="fullWidth"> {label}</label>
            <TextField fullWidth id="fullWidth" sx={{ height: "46px" }} />
        </Box>
    )
}


