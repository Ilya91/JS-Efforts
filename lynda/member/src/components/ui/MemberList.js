import { PropTypes, Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member  from './Member'

export const MemberList = ({resort, date, powder}) => {

    let _resort, _date, _powder;
    const submit = (e) => {
        e.preventDefault()
        console.log('resort', _resort.value)
        console.log('date', _date.value)
        console.log('powder', _powder.checked)
    }

    return (
        <div className="member-list">
            <form onSubmit={submit} className="add-day-form">
                <div>
                    <label htmlFor="resort">Resort</label>
                    <input type="text" id="resort" required defaultValue={resort} ref={input => _resort = input}/>
                </div><div>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" required defaultValue={date} ref={input => _date = input}/>
            </div><div>
                <label htmlFor="powder">Powder</label>
                <input type="checkbox" id="powder" defaultChecked={powder} ref={input => _powder = input}/>
            </div>
                <button>Add day</button>
            </form>

            <Member name={'sdfgsdf'}/>
        </div>
    )
}

/*class MemberList extends Component {

    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
}

export default MemberList*/

MemberList.defaultProps = {
    resort: 'Minsk',
    date: '2017-06-26',
    powder: false
}


/*
MemberList.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    back: PropTypes.number,
    goal: PropTypes.number
}*/
