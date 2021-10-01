import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AnsweredQuestion = (props) => {
    const {
        author,
        authedUser,
        question,
        countlVotes,
        percentOptionOne,
        percentOptionTow
    } = props
    const title = "Your Answer is : "
    return (
        <div className='con'>
            <div className='question-con'>
                <Card className='q-card'>
                    <Card.Header>
                        <img
                            className='mr-3'
                            src={ `../${author.avatarURL}` }
                            alt={ `${author.name} img ` }
                        />
                        <h5 className='asks'>{ `${author.name} asks :` }</h5>
                    </Card.Header>
                    { authedUser.answers[question.id] === 'optionOne' && (
                        <Card.Header>
                            <Card.Title><h6>{ title }</h6></Card.Title>
                        </Card.Header>
                    ) }
                    <Card.Body>
                        { question.optionOne.text }
                        <ProgressBar
                            className="progress"
                            label={ `${percentOptionOne}%` }
                            now={ percentOptionOne }
                            striped
                            variant="success"
                        />
                        { question.optionOne.votes.length } of { countlVotes } votes.
                    </Card.Body>
                    { authedUser.answers[question.id] === 'optionTwo' && (
                        <Card.Header>
                            <Card.Title><h6>{ title }</h6></Card.Title>
                        </Card.Header>
                    ) }
                    <Card.Body>
                        { question.optionTwo.text }
                        <ProgressBar
                            className="progress"
                            label={ `${percentOptionTow}%` }
                            now={ percentOptionTow }
                            striped
                            variant="success"
                        />
                        { question.optionTwo.votes.length } of { countlVotes } votes.
                    </Card.Body>
                </Card>
            </div>
            <Link to='/'> Home </Link>
        </div>
    )
}

export default AnsweredQuestion
