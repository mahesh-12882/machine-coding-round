// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import {PersonList} from "./components/PersonList";
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
import { AbilityList } from './components/MachineRounds/APIs/AbilityList';
import { Form } from './components/reusableComponents/Form';
import { User } from './components/User';
import { LoadMoreApi } from './components/MachineRounds/OptimizeApiCall/loadMore';
// let personList = [
//   {
//     first:"mahesh",
//     last:"kumar",
//     address:"agra"
//   },
//   {
//     first:"shivam",
//     last:"kumar",
//     address:"mathura"

//   }
// ]

function App() {
  // const [count, setCount] = useState<number>(0)
  // let personName = {
  //   first:"mahesh",
  //   last:"pandey"
  // }

  return (
    <>
      <div>
        {/* <Greet name={"mahesh"}/>
        <Person name={personName}/>
        <PersonList names ={personList}/>
        <Status status="error"/>
        <Heading>Children text pass</Heading>
        <Oscar>
           <Heading>Children Component of OSCAR</Heading>
        </Oscar> */}
        <AbilityList/>
        <Form/>
        <User/>
        <LoadMoreApi/>
      </div>
    </>
  )
}

export default App
