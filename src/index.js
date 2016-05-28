import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const store = createStore(combineReducers({
  form: formReducer,
}));


const Component = (props) => {
  return <div>Hello World</div>;
}


ReactDOM.render(<Component />, document.body);
