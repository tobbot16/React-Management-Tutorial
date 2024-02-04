import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';


const customers =[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '김윤수',
  'birthday': '991121',
  'gender':'남자',
  'job': '대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name': '김윤호',
  'birthday': '980216',
  'gender':'남자',
  'job': '회사원'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '심세연',
  'birthday': '020316',
  'gender':'여자',
  'job': '대학생'
}

]

class App extends Component{
  render(){
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          )
        })
      }

    </div>
  );
  }
}

export default App;
