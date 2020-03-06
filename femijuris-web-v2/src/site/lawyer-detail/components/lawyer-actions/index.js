import React, { Component } from 'react';

import moment from 'moment';
import { ActionIcon, WrapActions, WrapActionText } from "./style";
import { LawyerDetail } from "../../../../common/typography";
import { RowNoPadding } from "../../containers/style";
import IconeFaq from "../../../../common/images/icon/img-faq.svg";


class LawyerActions extends Component {
    //TODO pegar referencia do height da coluna da esquerda
    render(){
        if(this.props.action){
            return(
            <WrapActions>
                <ActionIcon src={IconeFaq}/>
                <WrapActionText>
                    <RowNoPadding style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <LawyerDetail.actionCategory>{ this.props.action.type }</LawyerDetail.actionCategory>
                        <LawyerDetail.actionCategory>{ moment(this.props.action.time, "YYYYMMDD").lang('pt-br').fromNow() }</LawyerDetail.actionCategory>
                    </RowNoPadding>
                    <RowNoPadding>
                        <LawyerDetail.actionCategoryLink target="_blank" rel="noreferrer" href={this.props.action.link}>{ this.props.action.title }</LawyerDetail.actionCategoryLink>
                    </RowNoPadding>
                </WrapActionText>
            </WrapActions>
        )} else { return <div></div>}
    }
}

export default LawyerActions;