import React, { Component } from "react"
import { connect } from 'react-redux'
import { SET_AUTHED }from '../actions/authedUser'
import Home from './Home'

class Login extends Component {
 
        state ={
            errMsg: "",
            user:"",
            category:{}
        }
   
    handleChange(event) {
    console.log( event.target.value)
  }
  signin = ()=>{
     this.props.dd(this.input.value)
  }
    render() {
    console.log('Data',this.props)
        const { userNames } = this.props;
		const { errMsg } = this.state;
        return (
            <div>
            <h2>Login </h2>  
                <select 
                defaultValue={this.state.selectValue} 
                onChange={this.handleChange}
                ref={input => {
                  this.input = input
                }}
                >
                {
                    userNames.map((item) =>
                      <option
                        key={item.id} value={item.id}
                        >
                        {item.name}              
                     </option>
                    )
               }  
                </select>
                <button onClick={this.signin}>SignIn</button>
            </div>
        )
    }
}

const  mapStateToProps =({ users }) =>{
	return {
		userNames: Object.keys(users).map((id) => ({
			id: id,
			name: users[id].name,
            img: users[id].avatarURL
		}))
	}
}

const  mapdispatchToProps =(dispatch)=> {
	return {
        dd: (id)=> dispatch({type: SET_AUTHED,id})
}
}
export default connect(mapStateToProps, mapdispatchToProps)(Login);