import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

interface MenuProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleClose: () => void;
}

const AccountMenuOptions = ({ handleClose }: { handleClose: () => void }) => {
    return (
        <>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </>
    )
}

const AccountMenu = ({ anchorEl, open, handleClose }: MenuProps) => {

    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}

            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <AccountMenuOptions handleClose={handleClose} />

        </Menu>
    )
}

export default AccountMenu;