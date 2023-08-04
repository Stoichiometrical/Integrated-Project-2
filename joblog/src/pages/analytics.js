import ReactGA from 'react-ga'

//Initializing google analytics to see the number of users visiting our site
ReactGA.initialize('G-YW7BCY2X55');
ReactGA.pageview(window.location.pathname + window.location.search);
