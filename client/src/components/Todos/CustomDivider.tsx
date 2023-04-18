import { Divider, Typography } from "@mui/material"

const CustomDivider = () => {
    return (
        <Divider textAlign="center" variant="middle" flexItem sx={{
            "&::before, &::after": {
                borderColor: "white",
                borderWidth: '3px'
            },
            margin: '15px'
        }}>
            <Typography variant="h5" color={'white'}>Custom Divider</Typography>
        </Divider>
    )
}

export default CustomDivider