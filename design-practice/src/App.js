import React, { Component } from 'react';
import {slide as Menu} from 'react-burger-menu'
import {Motion,spring,presets} from 'react-motion'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
height:100vh;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap
`

const Card = styled.div`
border-radius:10px;
box-shadow:0 0 10px black;
display:flex;
width:300px;
flex-direction:column;
box-sizing:border-box;
min-height:300px;
margin:10px 10px 10px 10px;
transform:scale(${(props)=>props.scale?props.scale:1})
`
const CardImage = styled.div`
display:flex;
align-items:flex-end;
justify-content:flex-end;
font-family:Roboto;
font-size:25px;
font-weight:400;
background:url("https://ak0.picdn.net/shutterstock/videos/9196580/thumb/1.jpg");
background-position:center;
box-sizing:border-box;
padding:10px;
background-repeat:no-repeat;
background-size:cover;
color:white;
height:150px
`

const Text = styled.p`
font-family:Roboto;
font-size:15px;
font-weight:400;
margin:10px;

`

class AnimatedCard extends Component{
  render(){
    return(
      <Motion defaultStyle={{x:0}} style={{x:spring(1,presets.wobbly)}}>
        {(value)=>{return(
          <Card scale={value.x}>
             <CardImage>Atomica</CardImage>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
          </Card>)}}
      </Motion>)
  }
}

class App extends Component {
  showSettings(e){
    e.preventDefault()
  }
  render() {
    return (
      <div className="App">
      <Container>
        <AnimatedCard/>
        <AnimatedCard/>
      </Container>
      </div>
    );
  }
}

export default App;
