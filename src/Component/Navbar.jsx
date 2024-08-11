import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import videoSrc from "../assets/animationReact.mp4";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';

function DropdownMenu({ open, handleClick }) {
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText style={{textAlign:"center"}} primary="اختر الصف" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton component={RouterLink} to="/classOne" sx={{ pl: 4 }}>
                        <ListItemText primary="الصف الأول الثانوي" />
                    </ListItemButton>
                    <ListItemButton component={RouterLink} to="/classTwo" sx={{ pl: 4 }}>
                        <ListItemText primary="الصف الثاني الثانوي" />
                    </ListItemButton>
                    <ListItemButton component={RouterLink} to="/classThree" sx={{ pl: 4 }}>
                        <ListItemText primary="الصف الثالث الثانوي" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkMode);
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        if (newDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <>
            <div className="Navbarme px-2 px-md-5 py-3 d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-center">
                    <h2 className="Dr" style={{ margin: 0 }}>Dr <span className="Genius">Genius</span></h2>
                    <img className="LogoImg me-2" src={logo} alt="logo" />
                </div>
                <div className="links">
                    <ul className="d-flex">
                        <li><Link className="mx-sm-1 mx-lg-2" to="/home">الرئيسية</Link></li>
                        <li className="dropdown">
                            <Link className="mx-sm-1 mx-lg-2" to="#">اختر الصف</Link>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><Link to="/classOne">الصف الأول الثانوي</Link></li>
                                    <li><Link to="/classTwo">الصف الثاني الثانوي</Link></li>
                                    <li><Link to="/classThree">الصف الثالث الثانوي</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link className="mx-sm-1 mx-lg-2" to="/goodStudent">الأوائل</Link></li>
                        <li><Link className="mx-sm-1 mx-lg-2" to="/contact">تواصل معنا</Link></li>
                    </ul>
                </div>
                <div className="dark-mode-toggle">
                    <button onClick={toggleDarkMode} className="btn btn-secondary">
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <div className="toggoler">
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <FaBars />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header d-flex justify-content-between align-items-center">
                            <h5 className="offcanvas-title" id="offcanvasTopLabel">
                                <div className="video-container" style={{ position: 'relative', width: '100px', height: '40px', overflow: 'hidden' }}>
                                    <video
                                        src={videoSrc}
                                        autoPlay
                                        loop
                                        muted
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'center'}}
                                    />
                                </div>
                            </h5>
                            <button type="button" className="btn-close m-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" style={{ direction: "rtl"}}>
                            <div className="btn-group">
                                <ul>
                                    <li><Link to="/home">الرئيسية</Link></li>
                                    <DropdownMenu open={openDropdown} handleClick={() => setOpenDropdown(prev => !prev)} />
                                    <li><Link className="mx-sm-1 mx-lg-2" to="/goodStudent">الأوائل</Link></li>
                                    <li><Link className="mx-sm-1 mx-lg-2" to="/contact">تواصل معنا</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
