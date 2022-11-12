//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './component/card-list/card-list.component'
import SearchBox from './component/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      university: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('http://universities.hipolabs.com/search?country=United+States')
      .then(response => response.json())
      .then(newList => this.setState(() => { return { university: newList } }))
  }


  onSearchChange = (e) => {
    let searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => { return { searchField } })
  }

  render() {
    let filteredList = this.state.university.filter((list) => { return list.name.toLocaleLowerCase().includes(this.state.searchField) })
    //for removing duplicate objects from the API.
    let unique1 = new Set();
    let unique = filteredList.filter(element => {
      let list = unique1.has(element.name)
      unique1.add(element.name)
      if (!list) { return true } return false;
    })

    return (
      <div className='App'>
        <h1 className = 'app-title'>Find Your Suitable University in USA !</h1>
        <SearchBox onChangeHandler = {this.onSearchChange} placeholder = "Search University" className = "university_search-box"/>
        <CardList newThing = {unique}/>
      </div>
    )
  }
}
export default App;
