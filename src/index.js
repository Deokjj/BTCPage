import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import 'semantic-ui-css/semantic.min.css';

WebFont.load({
  google: {
    families: ['Source Sans Pro:400,500,600', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
