import React, { Component } from 'react';
import {Div,ButtonDiv,H1,CallToActionB,CallToActionA,Bold} from "./style";
import store from '../../../../store';
import { push } from 'react-router-redux';

class LeftTeaser extends Component {

    constructor(props) {
        super(props)
        this.goTo       = this.goTo.bind(this);
        this.redirectTo = this.redirectTo.bind(this);
    }

    goTo(path) {
        store.dispatch(push(path))
    }

    redirectTo(path) {
        window.location.replace(path)
    }

    render() {

        const subscribeButton  = (<CallToActionA onClick={ () => this.goTo('/signup') }>INSCREVA-SE</CallToActionA>);
        const findLawyerButton  = (<CallToActionB onClick={ () => this.goTo(`/diretorio`) } >BUSQUE UMA ADVOGADA</CallToActionB>);

        return (
            <Div>
                <H1>
                    A <Bold>advocacia</Bold> exercida <Bold>por</Bold> Mulheres <Bold>para</Bold> Mulheres
                </H1>

                <ButtonDiv className={'d-none d-lg-block'}>
                    {subscribeButton}
                    {findLawyerButton}
                </ButtonDiv>

                <ButtonDiv className={'d-lg-none'}>
                    {subscribeButton}
                    <br/><br/>
                    {findLawyerButton}
                </ButtonDiv>
            </Div>
        )
    }
}

export default LeftTeaser