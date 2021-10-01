import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddUserAnswer } from '../actions/questions'
import { addUserAnswer } from '../actions/users'
import { RESET_AUTHED } from '../actions/authedUser'

class UnAnsweredQuestion extends Component {
  state = {
    selected: 'none'
  }

  onChange = e => {
    this.setState({
        selected: e.target.id
    })
    }
    
    handleSubmit = e => {
        e.preventDefault()
    }

  render () {
    const { author, question } = this.props
    return (
      <div className='question-con'>
        <Card className='q-card'>
          <Card.Header>
            <img
              className='mr-3'
              src={`../${author.avatarURL}`}
              alt={`${author.name} img`}
            />
            <h6>{`${author.name} asks`}</h6>
            <p>Would you rather!</p>
          </Card.Header>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Card.Body>
              <Form.Group>
                <Form.Check
                  type='radio'
                  label={question.optionOne.text}
                  name='q-radio'
                  id='optionOne'
                  onChange={e => this.onChange(e)}
                />
              </Form.Group>
            </Card.Body>
          </Form>
        </Card>
      </div>
    )
  }
}

const  mapStateToProps = ({users, questions, authedUser })=> {
    return {
        users,
      questions,
      authedUser,
      
    };
}
  
const mapdispatchToProps = dispatch => {
    return {
       /// Edit Hear
    }
}
export default connect(mapStateToProps,mapdispatchToProps)(UnAnsweredQuestion)
