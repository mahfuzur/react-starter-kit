import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
function Page404() {
  document.title = 'Admin Page404 '
  return (
    <React.Fragment>
      <div className='tw-mt-32'>
        <h1 className='tw-text-4xl tw-text-center tw-font-bold tw-text-gray-800'>404</h1>
      </div>
    </React.Fragment>
  )
}

Page404.propTypes = {
  t: PropTypes.any,
}
export default connect()(Page404)
