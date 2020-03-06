import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchLawyers,changeLawyerPendingStatus} from "../../../actions/adminActions"

class AdminLawyersList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secret: ''
        }
        this.approveUser = this.approveUser.bind(this)
    }

    componentDidMount() {
        const action = this.props.match.params.action

        // /admin/lawyers/list/:action
        switch (action) {
            case 'pending':
                this.props.fetchLawyers(true)
            break;

            case 'approved':
                this.props.fetchLawyers(false)
            break;

            default: break;
        }
    }

    approveUser(id) {
        const action = this.props.match.params.action
        if (action !== 'pending' && action !== 'approved') {
            return;
        }
        this.props.changeLawyerPendingStatus(id,(action!=='pending'),this.state.secret)
    }

    render() {
        return (
            <div>
                <h1>ADMIN</h1>
                <input type={"text"} value={this.state.secret} onChange={e => this.setState({...this.state,secret:e.target.value})}/>
                <table>
                    <tbody>
                        {this.props.lawyers.map((it,i) => (
                            <tr key={i}>
                                <td><button onClick={() => this.approveUser(it.id)}>APPROVAR</button></td>
                                <td><p>{it.id} ,</p></td>
                                <td><p>{it.name} ,</p></td>
                                <td><p>{it.email} ,</p></td>
                                <td><p>Phone: {it.phone} ,</p></td>
                                <td><p>OAB: {it.oab_uf}/{it.oab} ,</p></td>
                                <td><p>{JSON.stringify(it.addresses)}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    lawyers: state.admin.lawyers || [],
})

const mapDispatchToProps = dispatch => bindActionCreators({fetchLawyers,changeLawyerPendingStatus}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(AdminLawyersList)