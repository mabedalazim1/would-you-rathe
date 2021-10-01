import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'
import { RESET_AUTHED } from '../actions/authedUser'
import { RESET_LOGGED } from '../actions/logged'
import Login from './Login'
import Question from './Question'

class Home extends Component {
    logout = () => {
        this.props.restAutherUser('')
        this.props.restLogged()
    }
    render() {
        const {
            users,
            isLogged,
            unansweredQues,
            answeredQues,
            questions,
        } = this.props
        return (
            <div className='con'>
                { !isLogged.logged ? (
                    <Login />
                ) : (
                    <React.Fragment>
                        <h2 className="home-title">Pick a Question</h2>
                        <Tabs className="q-tap"
                            defaultActiveKey='unanswer'>
                            <Tab eventKey='unanswer' title='Unanswered Questions'>
                                <ul>
                                    { unansweredQues.map(qid => (
                                        <li key={ qid } className="tab-list">
                                            <Question
                                                questionId={ qid }
                                                question={ questions[qid] }
                                                author={ users[questions[qid].author] }
                                            />
                                        </li>
                                    )) }
                                </ul>
                            </Tab>
                            <Tab eventKey='answer' title='Answered Questions'>
                                <ul>
                                    { answeredQues.map(qid => (
                                        <li key={ qid } className="tab-list">
                                            <Question
                                                questionId={ qid }
                                                question={ questions[qid] }
                                                author={ users[questions[qid].author] }
                                            />
                                        </li>
                                    )) }
                                </ul>
                            </Tab>
                        </Tabs>
                    </React.Fragment>
                ) }
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users, questions, isLogged }) => {
    let sortQuestions = Object.keys(questions).sort((a, b) => {
        return questions[b].timestamp - questions[a].timestamp
    })
    return {
        unansweredQues: sortQuestions.filter(
            a =>
                !questions[a].optionOne.votes.includes(authedUser) &&
                !questions[a].optionTwo.votes.includes(authedUser)
        ),
        answeredQues: sortQuestions.filter(
            a =>
                questions[a].optionOne.votes.includes(authedUser) ||
                questions[a].optionTwo.votes.includes(authedUser)
        ),
        authedUser,
        users,
        questions,
        isLogged
    }
}

const mapdispatchToProps = dispatch => {
    return {
        restAutherUser: id => dispatch({ type: RESET_AUTHED, id }),
        restLogged: () => dispatch({ type: RESET_LOGGED })
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Home)
