import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { RESET_AUTHED } from '../actions/authedUser'
import { RESET_LOGGED } from '../actions/logged'

import { Navbar, Container, Nav } from 'react-bootstrap'

class NavItem extends Component {
    render() {
        const logOut = () => {
            this.props.restLogged()
        }
        const { isLogged, users, authedUser } = this.props
        return (
            <Navbar className='nav' expand='md'>
                <Container>
                    <Navbar.Brand href='#'>Would You Razer</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse className=''  id='basic-navbar-nav'>
                        <Nav className='nav-con' >
                            <NavLink className='nav-link' exact to='/'>
                                Home
                            </NavLink>
                            <NavLink className='nav-link' exact to='/add'>
                                Add
                            </NavLink>
                            <NavLink className='nav-link' exact to='/leaderboard'>
                                Leaderboard
                            </NavLink>
                            { isLogged.logged && (
                                <div className='loged-con'>
                                    <p> Hello {`${users[authedUser].name}`}</p>
                                    <img className="user-img mr-3"
                                        src={ `../${users[authedUser].avatarURL}` }
                                        alt={ `${users[authedUser].avatarURL} user img` }
                                    />
                                    <button onClick={ () => { logOut() } } >
                                        Log Out
                                    </button>

                                </div>
                            ) }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
const mapStateToProps = ({ authedUser, isLogged, users }) => {

    return {
        authedUser,
        isLogged,
        users,
    }
}
const mapdispatchToProps = dispatch => {
    return {
        restAutherUser: id => dispatch({ type: RESET_AUTHED, id }),
        restLogged: () => dispatch({ type: RESET_LOGGED })
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(NavItem)
