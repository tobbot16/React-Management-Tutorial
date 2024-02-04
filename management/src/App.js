import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';


const customer ={
  'name': '김윤수',
  'birthday': '991121',
  'gender':'남자',
  'job': '대학생'
}

class App extends Component{
  render(){
  return (
    <Customer>
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    </Customer>
  );
  }
}

export default App;
