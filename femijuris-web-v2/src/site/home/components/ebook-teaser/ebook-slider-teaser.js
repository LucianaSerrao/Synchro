import React, { Component } from 'react';
import {TeaserRow} from "./style";
import {Col,Container} from 'reactstrap'
import Teaser from "../../../ebook/components/ebook-teaser/ebook-teaser";

class EbookTeaser extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <TeaserRow>
                    <Teaser
                        showDownload={this.props.showDownload}
                        files={this.props.book.files}
                        title={this.props.book.title}
                        subTitle={this.props.book.subTitle}
                        actionText={this.props.book.actionText}
                        actionButtonText={this.props.book.actionButtonText}
                        actionPlaceHolder={this.props.book.actionPlaceHolder}
                        cover={this.props.book.bookCover}
                        action={this.registerEmailForEbook} />
                </TeaserRow>
            </Container>
        )
    }
}

export default EbookTeaser