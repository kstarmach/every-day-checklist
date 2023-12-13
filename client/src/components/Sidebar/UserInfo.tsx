import { useEffect, useState } from 'react';
import { red } from '@mui/material/colors';
import AccountMenu from './AccountMenu';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';



interface userData {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    email: string
}

const UserInfo = () => {
    const [userData, setUserData] = useState<null | userData>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        const newUserData = {
            id: 12345,
            name: {
                firstName: "Kamil",
                lastName: "Starmach",
            },
            email: "starmil96@gmail.com",
        }

        setUserData(newUserData);
    }, [])


    if (userData) {

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
                    title={userData.name.firstName + ' ' + userData.name.lastName}
                    subheader={userData.email}
                />
                <AccountMenu
                    handleClose={handleClose}
                    anchorEl={anchorEl}
                    open={open}
                />

            </>
        )
    }
    return '';
}

export default UserInfo