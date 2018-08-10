import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SkewDesign from './skew-design'
import registerServiceWorker from './registerServiceWorker';
import Image1 from './Assets/sigil-purple.png'
import Image2 from './Assets/sigil-light.png'

const data ={
primaryImage:Image2,
primaryHeader:'Ian Macharia',
primaryHeaderColor:'white',
primaryText:'Web & Mobile developer(Android and iOS),UX designer,Science enthusiast and proud introvert.Currently doing a Bachelor of Pharmacy degree,',
primaryTextColor:'white',
secondaryImage:Image1,
secondaryHeader:'Bio',
secondaryHeaderColor:'#eee',
secondaryText:`Over the years(I'm 20),I've picked up Java,C++,Javascript,HTML,CSS,React,React-Native,Node.js,Visual Basic and a bit of PHP(not a PHP fan)`,
secondaryTextColor:'#eee',
}

ReactDOM.render(
<React.Fragment>
<SkewDesign 
primary='linear-gradient(to right,#8e3de3,#4a00e0)'
secondary='linear-gradient(45deg,#111,#000)' 
data={data}
divider='#fdga800'
fullscreen={false}
/>
</React.Fragment>
, document.getElementById('root'));
registerServiceWorker();
