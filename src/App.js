import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import './App.css';

const BIRD_SIZE =20
const GAME_HEIHT = 500
const GAME_WIDTH =500

function App() {
  const[birdPasition,setBirdPosition] = useState(250)
  return (
    <Div>
      <GameBox height={GAME_HEIHT} width={GAME_WIDTH}/>
      <Bird size={BIRD_SIZE} top={birdPasition}/>
    </Div>
  );
}

export default App;

const Bird = styled.div`
position:absolute;
background-color:red;
height:${(props)=>props.size}px;
width:${(props)=>props.size}px;
top:${(props)=>props.top}px;
border-radius:50%
`
const Div =styled.div`

display:flex;
width:100%;
justify-content:center;
`
const GameBox =styled.div`
height:${(props)=>props.height}px;
width:${(props)=>props.width}px;
background-color:blue
`