import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer, Field, reduxForm } from 'redux-form';


const store = createStore(combineReducers({
  form: formReducer,
}));


const Component = connect(props => ({
  initialValues: {
    somefield: 'test',
  },
}))(reduxForm({
  form: 'someform',
})((props) => {
  return (
    <form>
      <Field component='input' name='somefield' />
    </form>
  );
}));


ReactDOM.render((
  <Provider store={store}>
    <Component />
  </Provider>
), document.body);
