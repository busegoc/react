import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Mehmet")
  const [age, setAge] = useState(29)
  const [friends, setFriends] = useState(["Ahmet", "Murat"])
  const [address, setAddress] = useState({ title: "İstanbul", zip: 12354 })
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>
      <hr></hr>
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend,index)=>(
          <div key={index}>{friend}</div>
        ))
      }
      <br></br>

        <button onClick={() => setFriends([...friends,"Ayşe"])}>add new friend</button>
      

      <hr></hr>
      <br></br>
      <h2>Address</h2>
        {address.title} - {address.zip}
        <br></br>
      <button onClick={() => setAddress({title:"Ankara",zip:123456})}>change the address</button>

    
    </div>
  );
}

export default App;
