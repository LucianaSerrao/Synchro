import React, { Component } from 'react';
import {Form} from 'reactstrap';
import { InputForm, ButtonForm } from './style';

class LawyerContacForm extends Component {
    render() {
        return (
            <Form>
                <InputForm placeholder="Assunto*" type="text" name="subject"/>
                <InputForm height="135px" placeholder="Mensagem*" type="textarea" name="content"/>
                <InputForm placeholder="Nome*" type="text" name="name"/>
                <InputForm placeholder="Email*" type="email" name="email"/>
                <InputForm placeholder="Telefone*" type="phone" name="phone"/>
                <InputForm placeholder="Cidade*" type="text" name="city"/>
                <ButtonForm block>enviar</ButtonForm>
            </Form>
        );
    }
}

export default LawyerContacForm;
