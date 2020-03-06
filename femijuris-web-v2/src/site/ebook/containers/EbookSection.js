import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchByUri,fetchSectionByUri} from '../../../actions/ebookActions'
import Loader from "../components/loader/loader"
import ReactQuill from 'react-quill'

class EbookSection extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        if (!this.props.ebook.book) {
            this.props.fetchByUri(`/ebook/${this.props.match.params.ebookUri}`)
        } else {
            let section = this.props.ebook.book.sections.find(it => it.uri === this.props.match.params.sectionUri)
            if (!section.delta) {
                this.props.fetchSectionByUri(this.props.match.params.sectionUri, section.fileUrl)
            }
        }
    }

    componentDidUpdate() {
        if (this.props.ebook.book) {
            let section = this.props.ebook.book.sections.find(it => it.uri === this.props.match.params.sectionUri)
            if (!section.delta) {
                this.props.fetchSectionByUri(this.props.match.params.sectionUri, section.fileUrl)
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.ebook.book)
            return {...state,loadingSection:true}

        let section = props.ebook.book.sections.find(it => it.uri === props.match.params.sectionUri)
        if ( !section )
            return {...state, loadingSection: true}

        if (typeof section.delta === 'undefined' || !section.delta)
            return {...state,loadingSection:true}

        return {...state,delta:section.delta,loadingSection:false}
    }

    render() {
        if ( this.state.loadingSection )
            return (<Loader/>)

        return (
            <div>
                <ReactQuill
                    theme="bubble"
                    ref={(quill) => { this.quill = quill; }}
                    modules={{toolbar:[]}}
                    value={this.state.delta}
                    readOnly={true} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ebook: state.ebook
})

const mapDispatchToProps = dispatch => bindActionCreators({fetchByUri,fetchSectionByUri}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(EbookSection)