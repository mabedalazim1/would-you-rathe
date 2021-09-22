import React, { Component } from "react"
import { connect } from 'react-redux'

class Login extends Component {
    state ={
        errMsg: "  ..   Mohamed"
    }
    
    render() {

        const { userNames } = this.props;
		const { errMsg } = this.state;
        console.log(this.state)
        console.log('props',this.props)
        return (
            <div>
            <h2>Login Project</h2>
                {
                    userNames.map((item) =>
                        <li key={ item.id }>
                            { item.name }
                            {errMsg}
                    </li>
                    )
               }
            </div>
        )
    }
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			id: id,
			name: users[id].name
		}))
	}
}

export default connect(mapStateToProps)(Login);