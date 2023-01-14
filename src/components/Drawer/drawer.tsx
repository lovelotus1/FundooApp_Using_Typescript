import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Header from '../Header/header';

type drawer = {  //👈
    drawertoggle: any;
    litentoDrawer:any;
    
};
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    marginTop: 65,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    marginTop: 65,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});







const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer(props: drawer) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const selectOne = (choice: string) => {
        props.litentoDrawer(choice)
        
    }

    return (
        <>
        
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <Drawer variant="permanent" open={props.drawertoggle}>
            <List>
                    <ListItem onClick={() => selectOne("Notes")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton >
                            <ListItemIcon >
                                <Box ><LightbulbOutlinedIcon  /></Box>
                            </ListItemIcon>
                            <ListItemText primary="Notes" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => selectOne("Reminders")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton >
                            <ListItemIcon >
                                <Box ><NotificationsNoneOutlinedIcon /></Box>
                            </ListItemIcon>
                            <ListItemText primary="Reminders" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => selectOne("Edit Label")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton >
                            <ListItemIcon >
                                <Box ><ModeOutlinedIcon /></Box>
                            </ListItemIcon>
                            <ListItemText primary="Edit Label" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => selectOne("Archive")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton >
                            <ListItemIcon >
                                <Box  ><InboxIcon  /></Box>
                            </ListItemIcon>
                            <ListItemText primary="Archive" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => selectOne("Trash")} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton >
                            <ListItemIcon >
                                <Box ><DeleteOutlineOutlinedIcon /></Box>
                            </ListItemIcon>
                            <ListItemText primary="Trash" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
        </>
    );
}