import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { useParams } from 'react-router-dom'

const EditQuestion = props => {
  const id = useParams()

  console.log('IDDDD', id.question_id)
  const { isLogged, questions, authedUser, users } = props
  console.log(props)
  return (
    <div className='con'>
      {!isLogged.logged ? <Login /> : <h1>EditQuestion</h1>}
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
