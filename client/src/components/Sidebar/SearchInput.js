import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const SearchInput = () => {
    return (
        <TextField
            label="Search"
            id="outlined-size-small"
            placeholder="Search"
            size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            //   onClick={handleClickShowPassword}
                            //   onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            sx={{ margin: '10px' }}
        />
    )
}

export default SearchInput