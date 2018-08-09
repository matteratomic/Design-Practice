import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SkewDesign from './skew-design'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SkewDesign/>, document.getElementById('root'));
registerServiceWorker();
