import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './table';
import AppActions from './lib/AppActions';
import AppStore from './lib/AppStore'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={ todoList: [],n1:''};
     this.handleChange = this.handleChange.bind(this);
    this.submitTodo=this.submitTodo.bind(this);
    //this.listTodoItems= this.listTodoItems.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);
  }
componentWillMount(){
  AppStore.addChangeListener('STORE_SUBMIT_TODO', this.onSubmit);
    AppStore.addChangeListener('STORE_REMOVE_TODO', this.onRemove);
}
componentDidMount(){
  AppStore.addChangeListener('STORE_SUBMIT_TODO', this.onSubmit);
    AppStore.addChangeListener('STORE_REMOVE_TODO', this.onRemove);
}
 handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }
submitTodo(){
 AppActions.addTodoItem(this.state.n1);
}

onSubmit() {
        this.listTodoItems()
    }
     onRemove() {
        this.listTodoItems()
    }

    listTodoItems() {             
        this.setState({
            todoList: AppStore.getAll(),           
        })
    }

  render() {
    console.log("render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
        ToDo App
          <div>
             <input type="text" name="n1" value={this.state.n1} onChange={this.handleChange}/>    
             <input type="button" name="Add" value="Add" onClick={this.submitTodo} />        
          </div>
               <Grid items={this.state.todoList} ></Grid>    
        </div>
        
      </div>
    );
  }
}

export default App;
