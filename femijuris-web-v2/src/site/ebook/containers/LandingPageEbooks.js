import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Header from '../components/ebook-header/ebook-header'
import Teaser from '../components/ebook-teaser/ebook-teaser'
import {Col, Container, Row} from 'reactstrap';
import {RowLPHeader, RowLPTeaserOuter} from '../../../common/style/landpaging'
import {fetchByUri, registerEmail} from '../../../actions/ebookActions'
import Loader from "../components/loader/loader"
import SecondaryContent from "../components/secundary-content/SecondaryContent"

class LandingPageEbooks extends Component {

    constructor(props) {
        super(props)
        this.registerEmailForEbook = this.registerEmailForEbook.bind(this)
    }

    componentDidMount() {
        const ebookIdOnUrl = `/ebook/${this.props.match.params.ebookUri}`
        this.props.fetchByUri(ebookIdOnUrl)
    }

    registerEmailForEbook(email,canSendNews) {
        let ebook = this.props.ebook.book.uri.split('/')[2]
        this.props.registerEmail(email,canSendNews,ebook)
    }

    render() {
        const {book,error,loading} = this.props.ebook
        let sponsors;

        if (book && book.sponsors)
            sponsors = book.sponsors.map((it,i) => (
                <Col key={i}>
                    <a href={it.link}>
                        <img alt="" height={'200px'} className={'mx-auto d-block'} src={it.logoImg}/>
                    </a>
                </Col>
            ))

        if (loading)        return (<Loader/>)
        if (error)          return (<h1>ERROR</h1>)
        if (book)           return (<Container fluid>
                                        <RowLPHeader><Header/></RowLPHeader>
                                        <RowLPTeaserOuter bg={book.teaserBackground}>
                                            <Teaser
                                                showDownload={this.props.showDownload}
                                                files={book.files}
                                                title={book.title}
                                                subTitle={book.subTitle}
                                                actionText={book.actionText}
                                                actionButtonText={book.actionButtonText}
                                                actionPlaceHolder={book.actionPlaceHolder}
                                                cover={book.bookCover}
                                                action={this.registerEmailForEbook}/>
                                        </RowLPTeaserOuter>

                                        {(() => book.sponsors && book.sponsors.length > 0 ?
                                            <Container>
                                                <h3>Patrocinadores</h3>
                                                <Row>
                                                    {(()=> sponsors.map(it => it))()}
                                                </Row>
                                            </Container>
                                            : null)()
                                        }

                                        {(() => book.introdutoryVideo ?
                                            <Row><SecondaryContent introdutoryVideo={book.introdutoryVideo}/></Row>
                                            : null)()
                                        }

                                    </Container>)
        return (<h1>NOT FOUND</h1>)
    }
}

const mapStateToProps = state => ({
    ebook: state.ebook,
    showDownload: state.ebook.showDownloadButtons
})

const mapDispatchToProps = dispatch => bindActionCreators({fetchByUri,registerEmail}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(LandingPageEbooks)