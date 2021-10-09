import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Button } from 'react-bootstrap'
import { handleSaveQuestion } from '../actions/questions'
import { handleInitialData } from '../actions/shared'
import { Redirect } from 'react-router'

import Login from './Login'

class NewQuestion extends Component {
  state = {
    submit:false,
    optionOne: "",
    optionTwo: "",
  }

  onOptionOneChange = e => {
    this.setState({
      optionOne: e.target.value
    })
  }

  onOptionTwoChange = e => {
    this.setState({
      optionTwo: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    const {optionOne, optionTwo} = this.state
    dispatch(
      handleSaveQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUser
      })
    )
    dispatch(handleInitialData(true))
    this.setState({
      submit: true
    })
  }
  render() {
    const {submit, optionOne, optionTwo} = this.state
   
    const { isLogged } = this.props
    return (
      <div className='con'>
        { submit && (<div> <Redirect to= "/" /> </div>) }
        { !isLogged.logged ? <Login /> :
          <div className="new-q-con">          
            <Card>
            <Card.Header>
              <Card.Title>Add New Question</Card.Title>
            </Card.Header>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Card.Body>
                  <Card.Subtitle>Enter Your Options...</Card.Subtitle>
                <br />
                <Form.Group controlId="formBasicOptionOne">
                  <Form.Control
                    type="optionOne"
                    placeholder="Enter option one"
                    onChange={e => this.onOptionOneChange(e)}
                  />
                </Form.Group>
                Or
                <Form.Group controlId="formBasicOptionTwo">
                  <Form.Control
                    type="optionTwo"
                    placeholder="Enter option two"
                    onChange={e => this.onOptionTwoChange(e)}
                  />
                </Form.Group>
              </Card.Body>
              <Card.Footer>
                <Button
                  className="btn-submit"
                  type="submit"
                  disabled={optionOne === "" || optionTwo === ""}
                >
                  Submit
                </Button>
              </Card.Footer>
            </Form>
          </Card>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ isLogged, questions, authedUser, users }) => {
  return {
    isLogged,
    questions,
    authedUser,
    users,
  }
}


export default connect(mapStateToProps)(NewQuestion)
