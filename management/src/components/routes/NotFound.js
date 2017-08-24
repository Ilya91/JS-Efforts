import React from 'react'
import PropTypes from 'prop-types'

function NotFound(props) {
    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="row">
                    <section className="col-lg-12">
                        <div className="box box-danger">
                            <h2>Not found...</h2>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

NotFound.propTypes = {
}

export default NotFound