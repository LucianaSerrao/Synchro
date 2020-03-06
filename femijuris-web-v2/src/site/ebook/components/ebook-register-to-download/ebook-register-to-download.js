import React, { Component } from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {InputEmail} from './style'

class EbookRegisterToDownload extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.isEmailValid = this.isEmailValid.bind(this)
        this.state = {
            canSendNews: true,
            email: "",
            emailValid: null,
            showDownloadOptions: false
        }
    }

    isEmailValid(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    handleSubmit(event) {
        event.preventDefault()

        if ( !this.isEmailValid(this.state.email) ) {
            return this.setState({...this.state, emailValid: false})
        }

        this.setState({...this.state,emailValid: true,showDownloadOptions:true})
        this.props.action(this.state.email,this.state.canSendNews)

        // show download options

    }

    render() {
        return (
            <Form inline={!this.props.mobile} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputEmail
                        value={this.state.email}
                        onChange={e => this.setState({...this.state,email:e.target.value})}
                        type="email"  placeholder={this.props.actionPlaceHolder} />
                    {(() => (this.props.mobile) ? null:<Button type="submit">{this.props.actionButtonText}</Button>)()}
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input
                            onChange={e => this.setState({...this.state,canSendNews:e.target.checked})}
                            value={this.state.canSendNews}
                            checked={this.state.canSendNews}
                            type="checkbox" />{' '}
                        Quero receber novidades sobre a Femijuris
                    </Label>
                </FormGroup>
                {(() => (this.props.mobile) ? <Button type="submit">{this.props.actionButtonText}</Button>:null)()}
            </Form>
        );
    }
}

export default EbookRegisterToDownload;