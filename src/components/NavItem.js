import React, { Component} from 'react'
import {  NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { RESET_AUTHED } from '../actions/authedUser'
import { RESET_LOGGED } from '../actions/logged'

import { Navbar, Container,Nav  } from 'react-bootstrap';

class NavItem extends Component{
    render(){
        const logOut = () => {
            this.props.restLogged()
        }
        return (
            <div>
           
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Brand href ="#">Would You Razer</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <button onClick={()=>{logOut()}}>Log Out</button>
                                <NavLink className='nav-link' exact to="/">Home</NavLink>
                                <NavLink className='nav-link' exact to="/add">Add</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps = ({authedUser, isLogged,}) => {
  
    return {
        authedUser,
        isLogged,
    }
}
const mapdispatchToProps = dispatch => {
    return {
        restAutherUser: (id) => dispatch({ type: RESET_AUTHED, id }),
        restLogged: () => dispatch({ type: RESET_LOGGED })
    }
}

export default connect(mapStateToProps,mapdispatchToProps)(NavItem)