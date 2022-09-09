import React,{Component} from 'react';
import { presidents,searchPresidents,searchPresidentsByParty } from "us-presidents";
import Cardlist from './Components/card-list';
import SearchBox from './Components/search-box';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      presidents: presidents,
      searchByName: '',
      searchByParty: '',
    }
  }

  display(filteredPresidents,filteredPresidentsByParty,president) {
    const a = filteredPresidents.length;
    const b = filteredPresidentsByParty.length;
    const c = president.length;
    console.log(a,b,c);
    if(a===c && b===c){
      return president;
    }
    else if(a===c && b!==c){
      return filteredPresidentsByParty;
    }
    else if(a!==c && b===c){
      return filteredPresidents;
    } else if(a!==c && b!==c){
      return filteredPresidents.filter(president => filteredPresidentsByParty.indexOf(president) !== -1);
    }
}
  render() {
    const {presidents , searchByName,searchByParty} = this.state;
    const filteredPresidents = presidents.filter(president => president.name.toLowerCase().includes(searchByName.toLowerCase()));
    const filteredPresidentsByParty = presidents.filter(president => president.party.toLowerCase().includes(searchByParty.toLowerCase()));
    console.log(filteredPresidentsByParty);
    

    return (
      <div className="App flex flex-col p-8 gap-y-16 justify-center bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen ">
      <h1 className='uppercase text-5xl font-medium font-serif text-white'>Us presidents</h1>
      <div className="searchbox flex flex-row justify-center flex-wrap gap-x-20 gap-y-4 ">
      <SearchBox
      placeholder='Search by name'
      handleChange={e => this.setState({searchByName: e.target.value})}
      />
      <SearchBox
      placeholder='Search by party name'
      handleChange={e => this.setState({searchByParty: e.target.value})}
      />
      </div>
        <Cardlist presidents={
          this.display(filteredPresidents,filteredPresidentsByParty,presidents)
      }>
        </Cardlist>
      </div>
    );
  }
}

export default App;
