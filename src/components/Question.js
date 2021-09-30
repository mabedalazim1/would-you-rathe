import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Question extends Component {
  render () {
    const { question, questionId, author } = this.props
   
    return (
      <div className='question-con'>
        <Card className='q-card'>
          <Card.Header>
            <img
              className='mr-3'
              src={author.avatarURL}
              alt={`${author.name} img`}
            />
            <h6>{`${author.name} asks`}</h6>
            <p>Would you rather</p>
          </Card.Header>
          <Card.Body>
            {question.optionOne.text}
            <br />
            or...
          </Card.Body>
          <Card.Footer>
            <Link to={`/questions/${questionId}`}> 
              {/* <Button className='q-btn'>View Question</Button> */ }
              View Question
            </Link>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}
export default Question
