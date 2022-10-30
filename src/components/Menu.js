import React from 'react';
import menuJson from "../data/menu.json";
import '../App.css';
import { Outlet, Link } from "react-router-dom";

export default class Menu extends React.Component {

    constructor() {
        super();
        this.state = {menuItems: menuJson.data};
    }

    render() {

        const menuItemElements = [];
        
        for (let i = 0; i < this.state.menuItems.length; i++) {
            menuItemElements.push(
                <Link key={this.state.menuItems[i].title} className='menuItem' to={"/" + this.state.menuItems[i].title}>{this.state.menuItems[i].title}</Link>
            );
        }

      return (
        <div className='menuContainer'>
            {menuItemElements}
        </div>
      );
    }
}