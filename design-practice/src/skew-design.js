import React,{Fragment} from 'react'
import ReactDOM from 'react-dom'
import styled,{injectGlobal,ThemeProvider,keyframes} from 'styled-components'

export default class SkewDesign extends React.Component{

	constructor(props){
		super(props)
		this.state = {
				skewed:false,
				primary:this.props.primary || '#eee',
				primaryTextColor:this.props.data.primaryTextColor || '#222',
				secondary:this.props.secondary || '#222',
				secondaryTextColor:this.props.data.secondaryTextColor || '#eee',
				divider:this.props.divider|| '#fda800',
				fullscreen:this.props.fullscreen || false,
				height:'55vh'
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
		ReactDOM.findDOMNode(this.refs.topLayer).style.width = `calc(1000px + 50vw)`

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
							<Heading color={this.props.data.secondaryHeaderColor}>{this.props.data.secondaryHeader}</Heading>
							<p>{this.props.data.secondaryText || '#fff' }</p></ContentBody>
						<Image src={this.props.data.secondaryImage}/>
					</ContentWrap>
				</Layer>
					<Layer top ref='topLayer'>
					<ContentWrap top>
						<ContentBody>
							<Heading color={this.props.data.primaryHeaderColor}>{this.props.data.primaryHeader}</Heading>
							<p>{this.props.data.primaryText || '#000'}</p></ContentBody>
						<Image src={this.props.data.primaryImage}/>
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
const slideLeft  = keyframes`
0%{
	transform:translateX(-1000px)
}
100%{
	transform:translateX(0px)
}
`

const grow  = keyframes`
0%{
	transform:scale(0.1)
}
100%{
	transform:scale(1)
}
`
const Wrapper = styled.section`
position:relative;
width:100%;
min-height:${(props)=>props.theme.fullscreen?'100vh':props.theme.height};
overflow:hidden;
`

const Layer = styled.div`
position:absolute;
min-height:${(props)=>props.theme.fullscreen?'100vh':props.theme.height};
overflow:hidden;
${(props)=>{
	if(props.top){
			return(`
			background:${props.theme.primary};
			z-index:2;
			transform:skew(-30deg);
			margin-left:-1000px;
			width:calc(1000px + 50vw)
			`)
	}
	else{
	return(`
	background:${props.theme.secondary};
	z-index:1;
	width:100vw`)}
}}
`

const ContentWrap = styled.div`
position:absolute;
box-sizing:border-box;
width:100vw;
min-height:${(props)=>props.theme.fullscreen?'100vh':props.theme.height};
${(props)=>{
	if(props.top){
		return `
		transform:skew(30deg);
		margin-left:1000px`
	}
}}
@media(max-width:768px){
font-size:70%
}
`

const ContentBody = styled.div`
width:25%;
position:absolute;
top:50%;
text-align:center;
overflow-wrap:break-word;
transform:translateY(-50%);
${(props)=>{
	if(props.right){
		return(`
		right:5%;
		> p{
			color:${props.theme.secondaryTextColor};
			animation-name:${slideLeft};
			animation-duration:1s;
			
		}
		`)
	}else{
		return(`
		left:5%;
		> p{
			color:${props.theme.primaryTextColor};
			animation-name:${slideLeft};
			animation-duration:1s;

		}
		`)
	}
}}
`

const Image = styled.img`
position:absolute;
width:${(props)=>props.theme.fullscreen ? '80%' :'60%'};
top:50%;
left:50%;
transform:translate(-50%,-50%);
`

const Heading = styled.h1`
font-size:2em;
font-family:Roboto,Arial,Helvetica,sans-serif;
font-weight:400;
font-size:40px;
animation-name:${slideLeft};
animation-duration:1s;
color:${(props)=>props.color}
@media(max-width:768px){
	font-size:21px;
}
`

const Handle = styled.div`
position:absolute;
height:100%;
display:block;
background-color:${(props)=>props.theme.divider || '#fda000'};
width:5px;
top:0;
left:50%;
z-index:3;
top:50%;
transform:rotate(30deg) translateY(-50%);
transform-origin:top;
height:200%
`