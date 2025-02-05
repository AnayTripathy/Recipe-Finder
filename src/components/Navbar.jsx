

import { Menu } from 'semantic-ui-react';
import A from  '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
    <Menu borderless fixed='top'>
        <Menu.Item>
            <img src={A} alt="logo" style={ {width: 50, height: 50}}/>
        </Menu.Item>
        <Menu.Item name='Home' as={Link} to="/"/>
        <Menu.Item name='Recipes' as={Link} to="/recipes"/>
    </Menu>
    )
}

export default Navbar;