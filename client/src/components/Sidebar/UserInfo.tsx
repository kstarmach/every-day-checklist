import { useState } from 'react';
import { red } from '@mui/material/colors';
import AccountMenu from './AccountMenu';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserInfo = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        KS
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Kamil Starmach"
                subheader="starmil96@gmail.com"
            />
            <AccountMenu
                handleClose={handleClose}
                anchorEl={anchorEl}
                open={open}
            />

        </>
    )
}

export default UserInfo