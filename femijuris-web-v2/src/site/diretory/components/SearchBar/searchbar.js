import React, { Component } from 'react';
import {Container,Row,Col,Form,FormGroup} from 'reactstrap'
import constants from '../../../../config/constants'
import AsyncSelect from 'react-select/lib/Async';
import axios from 'axios'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.handleMultiSelectForCityChange = this.handleMultiSelectForCityChange.bind(this)
        this.loadCityOptions = this.loadCityOptions.bind(this)
        this.loadSpecialtiesOptions = this.loadSpecialtiesOptions.bind(this)
        this.onSelectFilterChange = this.onSelectFilterChange.bind(this)
    }

    handleMultiSelectForCityChange (cityInput) {
        this.setState({ ...this.state, form: {...this.state.form,cityInput}});
    }

    loadCityOptions(inputValue, callback) {
        axios.get(`${constants.api.getFilteredCityOptions[process.env.NODE_ENV]}?name=${inputValue}`)
            .then(response => {
                let options = response.data.data.map(it => ({value:it.id,label:`${it.name} (${it.state})`}))
                callback(options)
            })
    };

    loadSpecialtiesOptions(inputValue,callback) {
        axios.get(`${constants.api.getFilteredSpecialtiesOptions[process.env.NODE_ENV]}?name=${inputValue}`)
            .then(response => {
                let options = response.data.data.map(it => ({value:it.id,label:`${it.name}`}))
                callback(options)
            })
    }

    onSelectFilterChange(filter,val) {
        let reducerFunc = (acc,it) => {
            acc.push(it.value);
            return acc
        };

        if (filter === 'cities') {
            this.setState({...this.state,cities:val});
            this.props.onSelectFilterChange(val.reduce(reducerFunc,[]),this.state.specialties.reduce(reducerFunc,[]));
        }

        if (filter === 'specialties') {
            this.setState({...this.state,specialties:val});
            this.props.onSelectFilterChange(this.state.cities.reduce(reducerFunc,[]),val.reduce(reducerFunc,[]));
        }
    }

    componentWillMount() {
        let state = {
            cities: [],
            specialties: [],
            selectedOptions: this.props.areas.map( a => ({value:a.id,label:a.name}) )
        };
        this.setState(_ => (state))
    }

    render() {
        return (
            <Container fluid>
                <Form>
                    <Row>
                        <Col md="8">
                            <FormGroup>
                                <AsyncSelect
                                    placeholder="Especialidades"
                                    isMulti
                                    defaultOptions
                                    loadOptions={ this.loadSpecialtiesOptions }
                                    value={this.state.specialties}
                                    onChange={val => this.onSelectFilterChange('specialties',val)} />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <AsyncSelect
                                    placeholder="Cidades"
                                    isMulti
                                    defaultOptions
                                    loadOptions={ this.loadCityOptions }
                                    value={this.state.cities}
                                    onChange={val => this.onSelectFilterChange('cities',val)} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }

}

export default SearchBar;