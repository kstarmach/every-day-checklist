import { ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import { ReactElement } from 'react'
import Typography from '@mui/material/Typography';

interface MenuItemProps {
    mainText: string;
    secondaryText?: string;
    children: ReactElement;
    onClick: () => void;
    color?: string;
}

const MenuItemElement = ({ children, mainText, secondaryText, onClick, color }: MenuItemProps) => {
    return (
        <MenuItem sx={{ color }} onClick={onClick}>
            <ListItemIcon sx={{ color }}>
                {children}
            </ListItemIcon>
            <ListItemText>{mainText}</ListItemText>
            <Typography variant="body2" color="text.secondary">
                {secondaryText}
            </Typography>
        </MenuItem>
    )
}

export default MenuItemElement;