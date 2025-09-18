import {useState} from "react";
import {AppBar, Toolbar, IconButton, Box, Stack} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";

export default function MobileHeader() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white', top: 0 }}>
            <Toolbar sx={{ position: 'relative', minHeight: '3rem'}}>
                <IconButton
                    edge="start"
                    aria-label="menu"
                    onClick={toggleMenu}
                    sx={{ position: 'absolute', color: "var(--dark-green)"}}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        px: '10%'
                    }}
                >
                    <img src={"/assets/Element 100@4x.webp"} alt={"Logo von Floral Bite"} width={'100%'}/>
                </Box>
            </Toolbar>
            {menuOpen ?
                <Stack sx={{ width: '100%', color: 'var(--dark-green)', '& a': {color: 'var(--dark-green) !important'},
                    padding: '1rem', borderTop: '1px solid var(--light-sage-green)'}}>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/angebot"}>Angebot</Link>
                    <Link to={"/ueber-uns"}>Über uns</Link>
                    <Link to={"/galerie"}>Galerie</Link>
                    <Link to={"/kontakt"}>Kontakt</Link>
                </Stack> : null}
        </AppBar>
    )
}