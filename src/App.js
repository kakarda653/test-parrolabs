import React from 'react';
import {connect} from 'react-redux';
import {simpleAction} from './actions/simpleAction';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const simpleAction = (event) => {
    props.simpleAction();
  };
  return (
    <div className="App">
      <pre>{JSON.stringify(props)}</pre>
      <button onClick={simpleAction}>Test redux action</button>
    </div>
  );
}


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
