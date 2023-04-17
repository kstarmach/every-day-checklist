import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { ContentCopy } from "@mui/icons-material";
import { MenuList, Divider } from "@mui/material";

import MenuItemElement from "./MenuItemElement";


interface MenuOptionsProps {
    handleSetComplete: () => void;
    handleClickOpen: () => void;
    isDone: boolean
}

const MenuOptions = ({ handleSetComplete, handleClickOpen, isDone }: MenuOptionsProps) => {
    return (
        <MenuList sx={{ width: 300, maxWidth: '100%' }}>

            {!isDone ?
                <MenuItemElement

                    mainText={'Mark as complete'}
                    onClick={handleSetComplete}
                >
                    <CheckCircleOutlineIcon fontSize="small" />
                </MenuItemElement>
                :
                <MenuItemElement

                    mainText={'Mark as not complete'}
                    onClick={handleSetComplete}
                >
                    <RadioButtonUncheckedIcon fontSize="small" />
                </MenuItemElement>
            }

            <Divider />

            <MenuItemElement
                mainText={'Edit'}
                secondaryText={'⌘X'}
                onClick={() => console.log('Edit')}
            >
                <EditIcon fontSize="small" />
            </MenuItemElement>
            <MenuItemElement
                mainText={'Copy'}
                secondaryText={'⌘C'}
                onClick={() => console.log('Copy')}
            >
                <ContentCopy fontSize="small" />
            </MenuItemElement>
            <MenuItemElement
                mainText={'Archive'}
                secondaryText={'⌘V'}
                onClick={() => console.log('Archive')}
            >
                <ArchiveIcon fontSize="small" />
            </MenuItemElement>

            <Divider />
            <MenuItemElement
                color={'red'}
                mainText={'Delete task'}
                secondaryText={'Delete'}
                onClick={handleClickOpen}
            >
                <DeleteForeverIcon fontSize="small" />
            </MenuItemElement>

        </MenuList>
    )
}

export default MenuOptions;