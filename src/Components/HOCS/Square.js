import React from 'react'
import AuthHOC from './AuthHOC'

const Square = props => {
  return (
    <div {...props} style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default AuthHOC(Square)
