import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import "./header.css"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';

type HeaderProps = {  //👈
    litentoHeader: any;
    
    
};
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,.05)',
    marginRight: theme.spacing(2),
    border: '0px solid blue',
    marginLeft: 0,
    width: '100%',

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    border: '0px solid black',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5f6368',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'default',
    border: '0px solid yellow',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));
function Header(props: HeaderProps) {

    return (
        <Box sx={{ border: '0px solid blue', width: '100vw' }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'white', width: '100%' }} >
                <Toolbar>
                    <IconButton
                        sx={{ border: '0px solid black', marginLeft: -2 }}
                        size="medium"
                        color="default"
                        onClick={props.litentoHeader}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ border: '0px solid black', }} >
                        <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt="" width={40} /></Box>
                    <Typography
                        variant="h6"
                        component="div"
                        width="20%"
                        color="#5f6368"
                        sx={{ border: '0px solid black', }}
                    >
                         Keep 

                    </Typography >
                    <Box sx={{ width: '27%', border: '0px solid red' }} />
                    <Search>
                        <SearchIconWrapper  >
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                        />
                    </Search>
                    <Box sx={{ border: '0px solid black', width: '70%', justifyContent: "space-evenly", marginLeft: 18 }}>
                        <IconButton
                            sx={{ border: '0px solid black', marginLeft: 0 }}
                            size="medium"
                            color="default"

                        >
                            <RefreshIcon />
                        </IconButton>
                        <IconButton
                            sx={{ border: '0px solid black', marginLeft: 3 }}
                            size="medium"
                            color="default"

                        >
                            <ViewStreamSharpIcon />
                        </IconButton>
                        <IconButton
                            sx={{ border: '0px solid black', marginLeft: 3 }}
                            size="medium"
                            color="default"
                            href="https://mui.com/material-ui/api/button/"
                        >
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton
                            sx={{ border: '0px solid black', marginLeft: 10 }}
                            size="medium"
                            color="default"
                        >
                            <AppsSharpIcon />
                        </IconButton>
                        <IconButton
                            sx={{ border: '0px solid black', marginLeft: 1 }}
                            size="medium"
                            color="default"
                        >
                            <img src='https://lh3.googleusercontent.com/ogw/AOh-ky0vkn3ZAZgug3RRoKTSbc62jmHMQF3elZIHjSQoyA=s32-c-mo'
                                alt="" style={{ borderRadius: 30 }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Header;