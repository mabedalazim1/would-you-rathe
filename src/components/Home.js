import React, { Component } from 'react'
import {connect} from 'react-redux'
import Login from './Login'

class Home extends Component {
    logout =()=>{
        console.log('LogOut')
    }
    render(){
        console.log(this.props)
        return(
            <div> 
                <div>Home Page</div>
                <button onClick={this.logout}>LogOut</button>
            </div>
           
        )
    }
}

const mapStateToProps = state => {
  const { authedUser } = state;
  return { authedUser };
}
export default connect(mapStateToProps)(Home)