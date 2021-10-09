import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import AnsweredQuestion from './AnsweredQuestion'
import UnAnsweredQuestion from './UnAnsweredQuestion'

const EditQuestion = props => {
  const { isLogged, questions, authedUser, users } = props
  const praams = useParams()
  const question = questions[praams.question_id]
  let author = null
  let answered = null
  let countlVotes = ''
  let percentOptionOne = ''
  let percentOptionTow = ''

  // Test Answered Question
  if (question !== undefined) {
    author = users[question.author]
    if (users[authedUser] !== undefined) {
      answered = Object.keys(users[authedUser].answers).includes(question.id)
      // Votes
      countlVotes =
        question.optionOne.votes.length + question.optionTwo.votes.length
      percentOptionOne = Math.round((question.optionOne.votes.length / countlVotes) * 100)
      percentOptionTow = Math.round((question.optionTwo.votes.length / countlVotes) * 100)
    }
  }

  return (
    <div className='con'>
      {!isLogged.logged ? (
        <Login />
      ) : question === undefined ? (
        <NotFound />
      ) : (
          <div>
            {answered ? (
              <AnsweredQuestion
                author={author}
                authedUser={users[authedUser]}
                question={question}
                countlVotes={countlVotes}
                percentOptionOne={percentOptionOne}
                percentOptionTow={percentOptionTow}
              />
            ) : (
              <UnAnsweredQuestion
                author={author}
                question={question}
                questionId={praams}
              />
            )}
          </div>
      )}
    </div>
  )
}

const mapStateToProps = ({ isLogged, questions, authedUser, users }) => {
  return {
    isLogged,
    questions,
    authedUser,
    users
  }
}
export default connect(mapStateToProps)(EditQuestion)
