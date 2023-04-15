import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import UserInfo from './UserInfo';
import SearchInput from './SearchInput';

const ListItemOptionIcon = ({ name }) => {

    if (name === 'Statistics') {
        return <AnalyticsOutlinedIcon />
    } else {
        return <WbSunnyOutlinedIcon />
    }

}

const ListItemOption = ({ name, idx, isactive }) => {

    return (
        <ListItem key={idx} disablePadding selected={isactive}>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemOptionIcon name={name} />
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}

const SidebarOptions = () => {
    return (
        <>
            <UserInfo />
            <SearchInput />
            <List>
                <ListItemOption name={'My Day'} idx='1' isactive={true} />
                <Divider />
                <ListItemOption name={'Statistics'} idx='2' active={false} />
            </List>
        </>
    )
}

export default SidebarOptions