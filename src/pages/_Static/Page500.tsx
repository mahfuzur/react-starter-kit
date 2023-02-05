import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
function Page500() {
  document.title = 'Admin Page500'
  return (
    <React.Fragment>
      <div className='tw-mt-32'>
        <h1 className='tw-text-4xl tw-text-center tw-font-bold tw-text-gray-800'>500</h1>
      </div>
    </React.Fragment>
  )
}

Page500.propTypes = {
  t: PropTypes.any,
}
export default connect()(Page500)
