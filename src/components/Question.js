import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const  Question = (props)=>  {
  const { question, questionId, author } = props
    return (
      <div className = 'question-con' >
        <Card className='q-card'>
          <Card.Header>
            <img
              className='mr-3'
              src={author.avatarURL}
              alt={`${author.name} img`}
            />
            <h6>{`${author.name} asks`}</h6>
            <p>Would you rather!</p>
          </Card.Header>
          <Card.Body>
            {question.optionOne.text}
            <br />
            or...
          </Card.Body>
          <Card.Footer>
            <Link to={`/questions/${questionId}`}> 
              <Button className='btn-submit'>View Question</Button> 
            </Link>
          </Card.Footer>
        </Card>
      </div>
    )
  
}
export default Question
