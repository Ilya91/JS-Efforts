import React from 'react'

export default Comment = ( { user, children } ) => (
    <div>
        <h6>{ user }</h6>
        <p><i>{ children }</i></p>
    </div>
)