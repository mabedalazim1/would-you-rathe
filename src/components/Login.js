import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner, Form } from 'react-bootstrap'
import LoadingBar from 'react-redux-loading'
import { SET_AUTHED } from '../actions/authedUser'
import { IS_LOGGED } from '../actions/logged'

class Login extends Component {
    state = {
        showLoading: true,
    }
    signin = () => {
        this.props.setAuthedUser(this.select.value)
        this.props.setIsLogged()
    }
    render() {
        const { userNames, loadingBar } = this.props
        return (
            <div>
                { loadingBar.default === 1 ? (
                    <div>
                        <LoadingBar style={{backgroundColor: "green"}}/> 
                        <Spinner
                            className="spinner"
                            animation='border'
                            variant="custom" />
                        <br />
                        <i>Loading ... </i>
                    </div>
                )
                    :
                    (
                        <div className='login'>
                            <h4>Login </h4>
                            <Form.Group className="mb-3 log-form" controlId="formBasicSelect">
                                <Form.Label>Select User</Form.Label>
                                <Form.Control
                                    as="select"
                                    ref={ select => {
                                        this.select = select
                                    } }
                                >
                                     { userNames.map(item => (
                                    <option key={ item.id } value={ item.id }>
                                        { item.name }
                                    </option>
                                )) }
                                </Form.Control>
                            </Form.Group>
                            <button onClick={ () => { this.signin() } }>Sign In</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = ({ loadingBar, users, isLogged, questions }) => {
    return {
        userNames: Object.keys(users).map(id => ({
            id: id,
            name: users[id].name,
            img: users[id].avatarURL
        })),
        loadingBar,
        isLogged,
        questions,
    }
}

const mapdispatchToProps = dispatch => {
    return {
        setAuthedUser: id => dispatch({ type: SET_AUTHED, id }),
        setIsLogged: () => dispatch({ type: IS_LOGGED }),
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Login)
