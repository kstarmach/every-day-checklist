import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const UserInfo = () => {
    return (
        <>
           
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            KS
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Kamil Starmach"
                    subheader="starmil96@gmail.com"
                />
           


            {/* <ListItemText
                primary="Kamil Starmach"
                secondary={

                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"

                    >
                        starmil96@gmail.com
                    </Typography>
                }
            /> */}
        </>
    )
}

export default UserInfo