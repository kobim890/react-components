import React from "react";
import './Sidebar.css'
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';


class Sidebar extends React.Component {

    render() {
        return (<div className="Sidebar">
            <Menu>
                <MenuItem>
                    <a href="#">Item one</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Item two</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">Item three</a>
                </MenuItem>
            </Menu>
        </div>);
    }
}
export default Sidebar;