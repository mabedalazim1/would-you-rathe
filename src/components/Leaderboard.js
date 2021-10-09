import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Login from './Login'

class Leaderboard extends Component {

  render() {
    const { isLogged, sortUsers, users, } = this.props
    return (
      <div className='con'>
        { !isLogged.logged ? <Login />
          :
          <div className="leader-board-con">
          <ul>
            { sortUsers.map(user => (
              <li key={ user }>
                    <Card>
                      <Card.Body>
                        <Container>
                          <div>
                            <Image
                            src={ users[user].avatarURL }
                            rounded
                            />
                          </div>
                          <div>
                            <h6>{ users[user].name }</h6>
                          </div>
                          <div>
                            Questions Answered :{' '}
                            {
                              Object.keys(users[user].answers)
                                .length
                            }
                          </div>
                          <div>
                            Questions Created :{' '}
                            { users[user].questions.length }
                          </div>
                          <Card>
                            <Card.Header className='title'>
                              <Card.Title>Score</Card.Title>
                            </Card.Header>
                            <Card.Body className="score-no">
                              { Object.keys(users[user].answers)
                                .length + users[user].questions.length }
                            </Card.Body>
                          </Card>
                        </Container>
                      </Card.Body>
                    </Card>
              </li>
            )) }
            </ul>
            <div className='link'>
              <Link to='/'> Home </Link>
              </div>
          </div>
        }
      
      </div>
    )
  }
}
const mapStateToProps = ({ authedUser, isLogged, users }) => {
  let sortUsers = Object.keys(users).sort((a, b) => {
    return (
      Object.keys(users[b].answers).length + users[b].questions.length -
      (Object.keys(users[a].answers).length + users[a].questions.length)
    )
  })
  return {
    authedUser,
    users,
    isLogged,
    sortUsers,
  }
}
export default connect(mapStateToProps)(Leaderboard)
