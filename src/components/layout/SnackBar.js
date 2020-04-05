import React from 'react'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import { hideSnack } from '../../actions/snackAction'
import PropTypes from 'prop-types'

const SnackBar = ({ hideSnack, displaySnack, message }) => {
  const handleClose = () => {
    hideSnack()
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={displaySnack}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
    />
  )
}

const mapStateToProps = state => ({
  message: state.snack.message,
  displaySnack: state.snack.displaySnack,
})

SnackBar.propTypes = {
  message: PropTypes.string.isRequired,
  displaySnack: PropTypes.bool.isRequired,
  hideSnack: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { hideSnack })(SnackBar)
