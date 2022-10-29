import React from 'react';
import menuJson from "../data/menu.json";

export default class Menu extends React.Component {

    constructor() {
        super();
        this.state = {menuItems: menuJson.data};
    }

    render() {

        const menuItemElements = [];
        
        for (let i = 0; i < this.state.menuItems.length; i++) {
            menuItemElements.push(<p key={this.state.menuItems[i].title}>{this.state.menuItems[i].title}</p>);
        }

      return (
        <div className='menuContainer'>
            {menuItemElements}
        </div>
      );
    }
}