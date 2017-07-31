import React from 'react'

export default Comment = ( { user, children } ) => (
    <div>
        <h5>{ user }</h5>
        <p><i>{ children }</i></p>
    </div>
)