import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchAllLawyers,sendMsgToLawyer} from "../directory-actions"
import {Helmet} from "react-helmet"
import DetailedLawyerList from "../components/DetailedLawyerList/DetailedLawyerList";
import Menu from "../../home/components/menu/menu";
import {Container,Row,Col} from "reactstrap";
import { DirectoryRoot, LawyerListContainer} from './style'
import SearchBar from "../components/SearchBar/searchbar";

class Directory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            lawyerToMsg: null,
            randomizedLawyers: [],
            selectedArea: null
        };

        if ( this.props.lawyers.length === 0 ) {
            this.props.fetchAllLawyers()
        }

        this.getSelectedAreaLawyers = this.getSelectedAreaLawyers.bind(this)
        this.randomLawyers = this.randomLawyers.bind(this)
        this.onSelectFilterChange = this.onSelectFilterChange.bind(this)
    }

    componentDidMount() {
        if ( this.state.randomizedLawyers.length === 0)
            this.getSelectedAreaLawyers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( (prevState.randomizedLawyers.length === 0 || this.props.match.params.id !== prevState.selectedArea) && this.props.lawyers.length !== 0 )
            this.getSelectedAreaLawyers()
    }

    getSelectedAreaLawyers() {
        let randomizedLawyers = this.randomLawyers();
        if ( this.props.match.params.id ) {
            this.setState({...this.state,selectedArea: this.props.match.params.id,randomizedLawyers: randomizedLawyers.filter( l => l.areas.includes(this.props.match.params.id))})
        } else {
            this.setState({...this.state,selectedArea: this.props.match.params.id,randomizedLawyers})
        }
    }

    randomLawyers() {
        let randomLawyers = []
        let tempCopy = [...this.props.lawyers]
        let maxSize = this.props.lawyers.length

        while (tempCopy.length > 0 && randomLawyers.length <= maxSize) {
            let idx = Math.floor(Math.random() * (tempCopy.length))
            randomLawyers.push( tempCopy[idx] )
            tempCopy.splice(idx,1)
        }

        return randomLawyers;
    }

    onSelectFilterChange(cities,specialties) {
        this.setState({...this.state,citiesFilter: cities,specialtiesFilter: specialties});
        this.props.fetchAllLawyers(cities,specialties)
    }

    render() {

        return (
            <DirectoryRoot>
                <Helmet>
                    <title>Diretório de Advogadas</title>
                    <meta name="description" content="Busque no diretório de advogadas Femijuris e encontre auxílio jurídico empático e acolhedor" />
                </Helmet>

                <Container>
                    <Row>
                        <Col>
                            <Menu/>
                        </Col>
                    </Row>
                </Container>

                <LawyerListContainer fluid>
                    <Row>
                        <Col>
                            <SearchBar onSelectFilterChange={this.onSelectFilterChange} areas={this.props.areas} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" lg="12">
                            <DetailedLawyerList
                                onSelectLawyerToMsg={this.setCurrentLawyerToMsg}
                                lawyers={this.props.lawyers}
                                areas={this.props.areas} />
                        </Col>
                    </Row>
                </LawyerListContainer>
            </DirectoryRoot>
        )
    }

}

const mapStateToProps = state => {
    return {
        lawyers: state.lawyers,
        areas: state.areas,
        directory: state.directory
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchAllLawyers,sendMsgToLawyer}, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Directory)