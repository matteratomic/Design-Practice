import React,{Fragment} from 'react'
import ReactDOM from 'react-dom'
import styled,{injectGlobal,ThemeProvider} from 'styled-components'
import Image1 from './Assets/600t1.png'
import Image2 from './Assets/600t2.png'


export default class SkewDesign extends React.Component{
	constructor(props){
		super(props)
		this.state = {
				skewed:false
		
		}
	}

	handleMouseMove = (e)=>{
		this.setState({skewed:true})
		let delta = (e.clientX-window.innerWidth/2)
		ReactDOM.findDOMNode(this.refs.handle).style.left = e.clientX+delta+'px'
		ReactDOM.findDOMNode(this.refs.topLayer).style.width = e.clientX+delta+1000+'px'
		
	}

	handleMouseOut = (e)=>{
		this.setState({skewed:false})
		ReactDOM.findDOMNode(this.refs.handle).style.left='50%'
		ReactDOM.findDOMNode(this.refs.topLayer).style.width ='50%'

	}

	render(){
		return(
			<ThemeProvider theme={{...this.state}}>
			<Wrapper 
			onMouseOut={this.handleMouseOut} 
			onMouseMove={this.handleMouseMove}
			>
				<Layer bottom>
					<ContentWrap bottom>
						<ContentBody right>
							<Heading color="#fda800">Look Sharp</Heading>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis non nesciunt obcaecati ea iste aspernatur qui tenetur ex soluta ducimus.</p>
						</ContentBody>
						<Image src={Image1}/>
					</ContentWrap>
				</Layer>
					<Layer top ref='topLayer'>
					<ContentWrap top>
						<ContentBody>
							<Heading color="black">Look Sharp</Heading>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis non nesciunt obcaecati ea iste aspernatur qui tenetur ex soluta ducimus.</p>
						</ContentBody>
						<Image src={Image2}/>
					</ContentWrap>
				</Layer>
				<Handle ref='handle'/>
			</Wrapper>
			</ThemeProvider>
)
	}
}

injectGlobal`
body{
	margin:0;
	padding:0;
	font-size:100%;
	font-family: Roboto, Helvetica,sans-serif
}
`
const Navbar = styled.div`
position:relative;
box-sizing:border-box;
padding:10px 5px 10px 5px;
color:#222;
z-index:10;
top:0;
left:0;
display:flex;
justify-content:space-between;
align-items:center;
width:100vw;
min-height:60px;
box-shadow: 0 0 10px #000;
background:#eee;
`

const Wrapper = styled.section`
position:relative;
width:100%;
min-height:100vh;
overflow:hidden;
`

const Layer = styled.div`
position:absolute;
min-height:100vh;
overflow:hidden;
${(props)=>{
	if(props.top){
		if(!props.theme.skewed){
			return (`
			background:#eee;
			z-index:2;
			width:50vw`)
		}else{
			return(`
			background:#eee;
			z-index:2;
			width:50vw
			transform:skew(-30deg);
			margin-left:-1000px;
			width:calc(50vw + 1000px)
			`)
		}
	}
	else{
	return(`
	background:#222;
	z-index:1;
	width:100vw`)}
}}
`

const ContentWrap = styled.div`
position:absolute;
width:100vw;
min-height:100vh;
${(props)=>{
	if(props.theme.skewed && props.top){
		return `
		transform:skew(30deg);
		margin-left:1000px`
	}
}}
@media(max-width:768px){
font-size:75%
}
`

const ContentBody = styled.div`
width:25%;
position:absolute;
top:50%;
text-align:center;
transform:translateY(-50%);
${(props)=>props.right ?'right:5%;color:white':'left:5%;color:#222'}
`

const Image = styled.img`
position:absolute;
width:35%;
top:50%;
left:50%;
transform:translate(-50%,-50%)
`

const Heading = styled.h1`
font-size:2em;
font-family:Arial,Helvetica,sans-serif;
font-weight:bold;
${(props)=>props.color ? 'color:'+props.color : 'color:black'}
`

const Handle = styled.div`
position:absolute;
height:100%;
display:block;
background-color:#fda800;
width:5px;
top:0;
left:50%;
z-index:3;
${(props)=>props.theme.skewed ? `
top:50%;
transform:rotate(30deg) translateY(-50%);
transform-origin:top;
height:200%`:null}

`