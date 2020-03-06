import React, { Component } from 'react';
import {SpecialtyItem,SpecialtiesList,SpecialtiesTitle} from './style'

class Specialties extends Component {

    render() {
        return (
            <div>
                <SpecialtiesTitle>Especialidade</SpecialtiesTitle>
                <SpecialtiesList>
                    {
                        this.props.areas.map((it,key) => (<SpecialtyItem key={key}>{it.name}</SpecialtyItem>))
                    }
                </SpecialtiesList>
            </div>
        )
    }

}

export default Specialties;