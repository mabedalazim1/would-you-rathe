import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RESET_AUTHED} from '../actions/authedUser'
import { RESET_LOGGED} from '../actions/logged'
import Login from './Login'

class Home extends Component {
    
    logout =()=>{
        this.props.restAutherUser("")
        this.props.restLogged()
    }
    render() {
        const { authedUser, users, isLogged } = this.props
        return(
            <div className='con'>
                 {!isLogged.logged ?  <Login/>:
                <React.Fragment>
                        <h1>Home Page</h1>
                        <h4>{ Object.keys(users)[0]}</h4>
                <button onClick={this.logout}>LogOut</button>
                </React.Fragment>
           }
            </div>
           
        )
    }
}

const mapStateToProps = ({authedUser,users, isLogged,}) => {
  
    return {
        authedUser,
        users,
        isLogged,
    }
}

const mapdispatchToProps = dispatch => {
    return {
        restAutherUser: (id) => dispatch({ type: RESET_AUTHED, id }),
        restLogged: () => dispatch({ type: RESET_LOGGED })
    }
}
export default connect(mapStateToProps,mapdispatchToProps)(Home)