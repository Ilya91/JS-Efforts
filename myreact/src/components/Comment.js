import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

/*export default connect((state, ownProps) => {
    return {
        comment: state.comments.find(comment => comment.id == ownProps.id)
    }
})(Comment)*/


const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps) // ownProps - то, что реально приходит в props (в данном случае id)
        }
    }
}

export default connect(mapStateToProps)(Comment)
