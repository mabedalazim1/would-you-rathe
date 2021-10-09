import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleSaveAnswer } from "../actions/questions"
import { addUserAnswer } from "../actions/users"

class UnAnsweredQuestion extends Component {
  state = {
    selected: 'none'
  }

  onChange = e => {
    this.setState({
        selected: e.target.id
    })
    const qid= this.props.questionId.question_id
    console.log(qid)
  }
  
  handleSubmit = e => {
    const { dispatch, authedUser } = this.props
    const qid= this.props.questionId.question_id
    const answer = this.state.selected
    e.preventDefault()
      dispatch(
        addUserAnswer({
          authedUser,
          qid,
          answer,
        })
      )

      dispatch(
        handleSaveAnswer({
          authedUser,
          qid,
          answer,
        })
    )
}

  render() {
    const { author, question} = this.props
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
                <Form.Check
                  type='radio'
                  label={question.optionTwo.text}
                  name='q-radio'
                  id='optionTwo'
                  onChange={e => this.onChange(e)}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
            <Button
              className="btn-submit"
              type="submit"
              disabled={this.state.selected === "none"}
            >
              Submit
            </Button>
          </Card.Footer>
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
  


export default connect(mapStateToProps)(UnAnsweredQuestion)
