import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RESET_AUTHED} from '../actions/authedUser'
import Login from './Login'

class Home extends Component {
    logout =()=>{
        this.props.restAutherUser("")
    }
    render() {
        const { authedUser } = this.props
        return(
            <div className='con'>
                {console.log("Home : ",authedUser)}
                { authedUser &&
                <React.Fragment>
                 <h1>Home Page</h1> 
                <button onClick={this.logout}>LogOut</button>
                </React.Fragment>
            }
            </div>
           
        )
    }
}

const mapStateToProps = state => {
  const { authedUser } = state;
  return { authedUser };
}

const mapdispatchToProps = dispatch => {
    return {
        restAutherUser: (id) => dispatch({ type: RESET_AUTHED, id })
    }
}
export default connect(mapStateToProps,mapdispatchToProps)(Home)