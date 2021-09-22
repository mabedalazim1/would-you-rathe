import React, { Component} from "react"
import { connect } from "react-redux"
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import './../App.css'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
 render(){
  return (
    <div className="App">
      
      <h1>Learn React Rather</h1>
      <h3>Project 2</h3>
     
    </div>
  )
}}

function mapStateToProps({loadingBar, authedUser }) {
	return {
    loadingBar,
    authedUser,
	}
}

export default connect(mapStateToProps)(App)
