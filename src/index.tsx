import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './common/theme';
import {responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';


ReactDOM.render(
    <ThemeProvider  theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <App/>
    </ThemeProvider >,
    document.getElementById('root')
);

reportWebVitals();
