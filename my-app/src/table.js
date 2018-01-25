import React, { Component } from 'react';
import AppActions from './lib/AppActions';

class Grid extends Component {
   constructor(props) {
    super(props);
  
        this.handleClick = this.handleClick.bind(this);
  }
     handleClick(key) {
        AppActions.removeTodoItem(key)       
    }

    render() {
        var items = this.props.items != undefined ? this.props.items.map((item,i) => {
            return <li key={i}> 
            Item {i+1}:{item} 
            <input type='button' value='X'  onClick={this.handleClick}/>
            </li> 
        }) :[];
        
        return (
            <div>                
                <ul>
                    {items} 
                </ul>
            </div>
        );
    }
}


export default Grid;