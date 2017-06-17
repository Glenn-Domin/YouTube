import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA00wNubOZQocyFAp3kkp6KZasn1T70JMo';


// Create a new component. This component should produce some HTML

const App = () => {
  return (
    <div className='george'>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)

// const Appy = React.createElement(App);

ReactDOM.render(<App />, document.querySelector('.container'));