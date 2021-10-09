import React from 'react'
import { Spinner } from 'react-bootstrap'
import LoadingBar from 'react-redux-loading'

const LoadingBarItem = () => {
  return (
    <div>
      <LoadingBar style={{ backgroundColor: 'green' }} />
      <Spinner className='spinner' animation='border' variant='custom' />
      <br />
      <i>Loading ... </i>
    </div>
  )
}
export default LoadingBarItem
