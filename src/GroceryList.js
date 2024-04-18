import { Component } from 'react';
import icon from './icon.png';
import Swal from 'sweetalert2';



export class GroceryList extends Component {
  state = {
    userInput: "",
    groceryList: []
  }

  onChangeEvent(e) {
    this.setState({ userInput: e })
  }

  addItem(input) {
    if (input === '') {
      Swal.fire("Please enter an item");
    } else {
    let listArray = this.state.groceryList;
    listArray.push(input);
      this.setState({ groceryList: listArray, userInput: "" })
    }
  }

  deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
  }

  crosserdWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='groceryCont'>
        <input type='text'
          placeholder='new item...'
          onChange={(e) => {this.onChangeEvent(e.target.value)}}
          value={this.state.userInput}
          className='UserInput'
        />

        <button className='btnAdd' onClick={() => this.addItem(this.state.userInput)}>Add</button>

        <ul>
          {this.state.groceryList.map((item, index) => (
            <li onClick={this.crosserdWord} key={index}>
              <img className='Icon' src={icon} width='30px' alt='cutlery'/>
              {item}
            </li>
          ))}
        </ul>

        <button className='btnDelete' onClick={() => this.deleteItem()}>Clear all</button>
      </form>
    )
  }
}