import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import LoadingBar from 'react-redux-loading'

import { SET_AUTHED } from '../actions/authedUser'

class Login extends Component {
    state = {
        showLoading: false
    }

    signin = () => {
        this.props.setAuthedUser(this.select.value)
    }
    render() {

        const { loadingBar } = this.props
        let showLoading = false
        if (loadingBar.default === undefined || loadingBar.default === 1) {
            showLoading = true
        }
        const { userNames } = this.props
        return (
            <div>
                { showLoading ? (
                    <div>
                        <LoadingBar />
                        <Spinner animation='border' variant='warning' />
                        <br />
                        <i>Loading ... </i>
                    </div>
                )
                    :
                    (
                        <div>
                            <h2>Login </h2>
                            <select
                                defaultValue={ this.state.selectValue }
                                ref={ select => {
                                    this.select = select
                                } }
                            >
                                { userNames.map(item => (
                                    <option key={ item.id } value={ item.id }>
                                        { item.name }
                                    </option>
                                )) }
                            </select>
                            <button onClick={ this.signin }>SignIn</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = ({ loadingBar, users }) => {
    return {
        userNames: Object.keys(users).map(id => ({
            id: id,
            name: users[id].name,
            img: users[id].avatarURL
        })),
        loadingBar,
    }
}

const mapdispatchToProps = dispatch => {
    return {
        setAuthedUser: id => dispatch({ type: SET_AUTHED, id })
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Login)
