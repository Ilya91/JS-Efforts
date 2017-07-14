import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'


class Member extends Component {

render() {

    const { name, thumbnail, email, admin, makeAdmin } = this.props
    return (
        <div className="member">

        <h1>{name} {(admin) ? <FaShield/> : null}</h1>
            <a onClick={thumbnail}>Make Admin</a>
            <img src={thumbnail} alt="pic"/>
            <p><a href={`mailto`}>{email}</a></p>
        </div>
    )
}
}

export default Member