import { useState ,useRef} from "react";

export default function Player() {
  const [inputPlayerName,setInputPlayerName]=useState('');
  const playerName=useRef();
  function handelClick()
  {
setInputPlayerName(playerName.current.value);
playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {inputPlayerName? inputPlayerName:'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
