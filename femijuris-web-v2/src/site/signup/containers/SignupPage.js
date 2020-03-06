import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Col, Row} from 'reactstrap';
import {
    Background
    , WrapContent
    , WrapBox
    , RowNoPadding
    , ColNoPadding
    , WrapFlex
    , LawyerDetailImages
    , SocialIcon
    , CustomImageUploader
    , InputForm
    , ButtonForm
    , MaskedtInput
} from "./style";
import Rx from 'rx'
import mailIcon from "../../../common/images/icon/ic-email.svg";
import phoneIcon from "../../../common/images/icon/ic-telefone.svg";
import linkedinIcon from "../../../common/images/icon/ic-linkedin.svg"
import instagramIcon from "../../../common/images/icon/ic-instagram.svg"
import facebookIcon from "../../../common/images/icon/ic-facebook.svg"
import { LawyerDetail } from '../../../common/typography';
import ProfileImage from "../components/profile-image";
import ImageCropModal from "../components/ImageCropModal/ImageCropModal";
import AsyncSelect from "react-select/lib/Async";
import { createNewProfile } from "../../../actions/signupActions";
import Menu from "../../home/components/menu/menu";
import axios from "axios";
import constants from "../../../config/constants";


const NoneProfile = (function(){
    switch(Math.floor(1 + Math.random()*(4+1 - 1))) {
        case 1:
            return require("../../../common/images/none_profile_1.svg");
        case 2:
            return require("../../../common/images/none_profile_2.svg");
        case 3:
            return require("../../../common/images/none_profile_3.svg");
        case 4:
            return require("../../../common/images/none_profile_4.svg");
        default:
            return require("../../../common/images/none_profile_4.svg");
    }
})()

class SignupPage extends Component {

    constructor(props) {
        super(props);

        this.submitNewProfile = this.submitNewProfile.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddressChipInput = this.handleAddressChipInput.bind(this);
        this.handleSpecialtyChipInput = this.handleSpecialtyChipInput.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onCropImageComplete = this.onCropImageComplete.bind(this);
        this.validateFormAndSubmit = this.validateFormAndSubmit.bind(this);
        this.onSelectFilterChange = this.onSelectFilterChange.bind(this);
        this.loadCityOptions = this.loadCityOptions.bind(this);
        this.loadSpecialtiesOptions = this.loadSpecialtiesOptions.bind(this);
        this.loadAddressesOptions = this.loadAddressesOptions.bind(this);

        this.state = {
            profile: {
                cities: [],
                specialties: [],
                address: null
            },
            showCropModal: false,
            imageToCrop: null,
        };
    }

    submitNewProfile() {
        this.setState().profile["image"] = this.state.croppedImageBlobUrl || NoneProfile;
        this.props.createNewProfile(this.state.profile);

        this.validateFormAndSubmit()
    }

    handleInput(e) {
        this.setState().profile[e.target.name] = e.target.value;
    }

    handleAddressChipInput(e) {
        this.setState().profile["actuation-cities"] = e;
    }

    handleSpecialtyChipInput(e) {
        this.setState().profile["specialty"] = e;
    }

    onDrop(picture, pictureDataURLs) {
        this.setState({
            imageToCrop: pictureDataURLs[0],
            showCropModal: true
        })
    }

    onCropImageComplete = (file,imageUrl) => {
        this.setState({
            ...this.state,
            croppedImageBlobUrl: imageUrl,
            croppedImageFile: file,
            showCropModal: false,
            isWrongFileType:false
        });
    };

    loadCityOptions(inputValue, callback) {
        axios.get(`${constants.api.getFilteredCityOptions[process.env.NODE_ENV]}?name=${inputValue}`)
            .then(response => {
                let options = response.data.data.map(it => ({value:it.id,label:`${it.name} (${it.state})`}))
                callback(options)
            })
    }

    loadSpecialtiesOptions(inputValue,callback) {
        axios.get(`${constants.api.getFilteredSpecialtiesOptions[process.env.NODE_ENV]}?name=${inputValue}`)
            .then(response => {
                let options = response.data.data.map(it => ({value:it.id,label:`${it.name}`}))
                callback(options)
            })
    }

    loadAddressesOptions(inputValue,callback) {
        axios.get(`${constants.api.getGeocodingAddress[process.env.NODE_ENV]}?address=${inputValue}`)
            .then(response => {
                let options = response.data.data.map(it => ({value:it.location,label:it.label}))
                callback(options)
            })
    }



    onSelectFilterChange(filter,val) {
        if (filter === 'cities')
            this.setState({...this.state,profile: {...this.state.profile,cities: val}});

        if (filter === 'specialties')
            this.setState({...this.state,profile: {...this.state.profile,specialties: val}});

        if (filter === 'address')
            this.setState({...this.state,profile: {...this.state.profile,address: val}});
    }

    validateFormAndSubmit() {

        var errors = null

        let validateEmail = (email) => {
            let response = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return response.test(email);
        }
        let validateCel = (cel) => (typeof cel !== 'undefined' && cel.length >= 14)
        let isValidUf = (uf) => (typeof uf !== 'undefined' && uf !== "options")
        let isEmptyField = (field) => (typeof field === 'undefined' ||  field.replace(/ /g,'').length === 0 );
        let isPasswordConfirmationOk = (pass1,pass2) => ( pass1 === pass2 );
        let isMultiValueFieldEmpty = (multiField) => (multiField.length === 0);

        if ( isEmptyField(this.state.profile.password) || isEmptyField(this.state.profile.password_confirmation)
            || !isPasswordConfirmationOk(this.state.profile.password,this.state.profile.password_confirmation) ) {
            errors = {...errors,password:"Campo senha sem preenchimento ou sem confirmação"}
        }

        if ( !isValidUf(this.state.profile.oab_uf) )
            errors = {...errors,uf:"Estado inválido"}

        if (!validateEmail(this.state.profile.email))
            errors = {...errors,email:"Email inválido"}

        if (!validateCel(this.state.profile.cel))
            errors = {...errors,cel:"O campo telefone é obrigatório e precisa ser válido"}

        if (isEmptyField(this.state.profile.name))
            errors = {...errors,name:"O campo nome é obrigatório"}

        if (isEmptyField(this.state.profile.oab) || !/^\d+(\.\d+)*$/.test(this.state.profile.oab))
            errors = {...errors,oab:"O número da OAB é obrigatório"}

        if (isMultiValueFieldEmpty(this.state.profile.cities))
            errors = {...errors,cities:"Escolha ao menos 1 cidade de atuação"}

        if (isMultiValueFieldEmpty(this.state.profile.specialties))
            errors = {...errors,specialties:"Escolha ao menos 1 área de atuação"}

        let reducerFunc = (acc,it) => {
            acc.push(it.value);
            return acc
        };
        console.log()

        if ( errors === null ) {

            let data = {
                name: this.state.profile.name,
                email: this.state.profile.email,
                phone: parseInt(`${this.state.profile.cel}`.replace("(","").replace(")","").replace(" ","").replace("-",""), 10),
                oab_uf: this.state.profile.oab_uf,
                oab: this.state.profile.oab,
                areas: this.state.profile.specialties.reduce( reducerFunc ,[]),
                cities: this.state.profile.cities.reduce( reducerFunc , []),
                addressLocation: this.state.profile.address.value ? this.state.profile.address.value: null
            };

            console.log(data)

//eslint-disable-next-line
            let responseObserver = Rx.Observer.create( data => {
                // this.showModalSuccess('Seu cadastro foi efetuado, mas esta pendente para aprovação')
                // this.resetForm()
                // sendLawyerSuccessEmail(data.params.data)
                //     .subscribe(()=>{},
                //         ()=>{
                //             this.showModalError('Ops, você foi cadastrada mas tivemos um problema no envio do seu e-mail')
                //             trackEvent('failed_return_for_lawyer_subscription',{ errorCode: constant.errorCodes.SEND_LAWYER_SUCC_EMAIL_FAILED })
                //         })

            },e => {
                console.log('error')
                // switch (e.error) {
                //     case constant.errorCodes.EMAIL_ALREADY_EXISTS:
                //         this.showModalError('Este email já esta cadastrado. Caso você ainda não apareça no diretório sua aprovação deve estar pendente')
                //         break;

                //     case constant.errorCodes.SEND_LAWYER_SUCC_EMAIL_FAILED:
                //         this.showModalError('Ops, você foi cadastrada mas tivemos um problema no envio do seu e-mail')
                //         break;

                //     case constant.errorCodes.EMAIL_CHECKS_FAILED:
                //         this.showModalError('Ops, tivemos problemas para verificar seu usuário. Tente novamente!')
                //         break;

                //     case constant.errorCodes.REGISTER_LAWYER_ERROR:
                //         this.showModalError('Ops, tivemos problemas no registro. Por favor, tente novamente mais tarde!')
                //         break;
                // }
            })

            // if (this.state.croppedImageFile) {
            //     upload(this.state.croppedImageFile,this.state.croppedImageFile.type.split('/').pop())
            //         .flatMap(r => registerLawyer({data:{...data,picture_path: r.key}}))
            //         .subscribe(responseObserver)
            // } else {
            //     registerLawyer({data:{...data}})
            //         .subscribe(responseObserver)
            // }

        } else {
            // this.setState({...this.state,loading:false,shouldStopShaking:false,form:{...this.state.form,errors:errors,formSubmitted: (errors===null)  }})
            // this.startShakesCountDown()
            console.log('form error, verify!')
            console.log(errors)
        }
    }


    render() {
        const { error, loading } = this.props.lawyer;
        if ( loading ) return (
            <p>Carregando</p>
        );
        if ( error ) return (
            <p>Erro</p>
        );
       
        return (
        <Background>
            <Menu />
            <ImageCropModal
                onCropImageComplete={ this.onCropImageComplete }
                src={ this.state.imageToCrop }
                show={ this.state.showCropModal }
                onCloseClick={()=>this.setState({...this.state, showCropModal:false })} />
            <WrapContent>
                <Row>
                    <WrapBox>
                        <LawyerDetail.centerTitle>NOVO PERFIL</LawyerDetail.centerTitle>
                        <RowNoPadding>
                            <ColNoPadding xs="12" md="2" lg="2" xl="2">
                                <ProfileImage
                                    profileImageUrl={ (this.state.croppedImageBlobUrl) ? this.state.croppedImageBlobUrl: NoneProfile }
                                />
                                <CustomImageUploader
                                    withPreview={false}
                                    singleImage={true}
                                    withIcon={false}
                                    withLabel={false}
                                    buttonText='Escolher imagem'
                                    onChange={ this.onDrop }
                                    imgExtension={['.jpg', '.png']}
                                    webkitRelativePath={true}
                                    maxFileSize={5242880}
                                />
                            </ColNoPadding>  
                            <ColNoPadding xs="12" md="10" lg="10" xl="10">
                                <RowNoPadding>
                                    <Col xs="12" md="6">
                                        <InputForm 
                                            placeholder="Nome"
                                            name="name" 
                                            onChange={ this.handleInput } 
                                            block="true"/>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <WrapFlex>
                                            <LawyerDetailImages.icon.mail src={mailIcon}/>
                                            <InputForm
                                                placeholder="Email"
                                                block="true"
                                                name="email"
                                                onChange={ this.handleInput }
                                                type="email"
                                            />
                                        </WrapFlex>
                                    </Col>

                                </RowNoPadding>
                                <RowNoPadding>
                                    <Col xs="12" md="6">
                                        <WrapFlex>
                                            <LawyerDetailImages.icon.phone src={phoneIcon}/>
                                            <MaskedtInput
                                                placeholder="Telefone" 
                                                name="cel"
                                                onChange={ this.handleInput }
                                                guide={false}
                                                height={"40px"}
                                                mask={(mask) => (mask.length <= 14) ? ['(',/\d/, /\d/, ')', ' ',/\d/, /\d/, /\d/,/\d/, '-' ,/\d/, /\d/, /\d/, /[\d?]/] : ['(',/\d/, /\d/, ')', ' ',/\d/ ,/\d/, /\d/, /\d/,/\d/, '-' ,/\d/, /\d/, /\d/, /[\d?]/]}
                                                block="true" />
                                        </WrapFlex>
                                    </Col>
                                    <Col xs="12" md="6">

                                    </Col>
                                </RowNoPadding>
                                <RowNoPadding>
                                    <Col xs="6" md="3">
                                        <MaskedtInput
                                            placeholder="OAB"
                                            block="true"
                                            name="oab"
                                            guide={false}
                                            height={"40px"}
                                            width={"160px"}
                                            mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]}
                                            onChange={ this.handleInput } />
                                    </Col>
                                    <Col xs="6" md="3">
                                        <InputForm
                                            placeholder="Estado"
                                            block="true"
                                            type="select"
                                            name="oab_uf"
                                            onChange={ this.handleInput}>

                                            <option selected value="options">Estado OAB</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </InputForm>
                                    </Col>
                                    <Col xs="6" md="3">
                                        <InputForm 
                                            placeholder="Senha" 
                                            block="true" type="password"
                                            onChange= { this.handleInput }
                                            name="password" />
                                    </Col>
                                    <Col xs="6" md="3">
                                    <InputForm 
                                        placeholder="Confirmação da senha" 
                                        type="password"
                                        blockblock="true"
                                        onChange= { this.handleInput }
                                        name="password_confirmation" />
                                </Col>
                                </RowNoPadding>
                            </ColNoPadding>  
                        </RowNoPadding>
                        <hr/>
                        <RowNoPadding>
                            <LawyerDetail.contentTitle>Atuação</LawyerDetail.contentTitle>
                        </RowNoPadding>
                        <RowNoPadding>
                            <ColNoPadding xs="12" md="2" lg="2" xl="2">
                            </ColNoPadding>  
                            <ColNoPadding xs="12" md="10" lg="10" xl="10">
                                <RowNoPadding>
                                    <Col xs="12" md="6">
                                        <RowNoPadding>
                                            <InputForm 
                                                placeholder="Biografia" 
                                                type="textarea" 
                                                maxLength="280" 
                                                height="180px" 
                                                name="bio"
                                                onChange={ this.handleInput }
                                                />
                                        </RowNoPadding>
                                        <RowNoPadding>
                                            <ColNoPadding xs="12">
                                                <WrapFlex>
                                                    <SocialIcon src={linkedinIcon}/>
                                                    <InputForm 
                                                        placeholder="Linkedin" 
                                                        name="linkedin"
                                                        onChange={ this.handleInput }
                                                        />
                                                </WrapFlex>
                                            </ColNoPadding>
                                        </RowNoPadding>
                                        <RowNoPadding>
                                            <ColNoPadding xs="12">
                                                <WrapFlex>
                                                    <SocialIcon src={ facebookIcon }/>
                                                    <InputForm 
                                                        placeholder="Facebook" 
                                                        name="facebook"
                                                        onChange={ this.handleInput }
                                                        />
                                                </WrapFlex>
                                            </ColNoPadding>
                                        </RowNoPadding>
                                        <RowNoPadding>
                                        <ColNoPadding xs="12">
                                            <WrapFlex>
                                                <SocialIcon src={instagramIcon}/>
                                                <InputForm 
                                                    placeholder="Instagram" 
                                                    name="instagram"
                                                    onChange={ this.handleInput }
                                                    />
                                            </WrapFlex>
                                        </ColNoPadding>
                                    </RowNoPadding>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <RowNoPadding>
                                            <Col>
                                                <AsyncSelect
                                                    placeholder="Endereço do escritório"
                                                    defaultOptions
                                                    loadOptions={ this.loadAddressesOptions }
                                                    value={this.state.profile.address}
                                                    onChange={val => this.onSelectFilterChange('address',val)} />
                                            </Col>
                                        </RowNoPadding>
                                        <RowNoPadding>
                                            <Col>
                                                <AsyncSelect
                                                    placeholder="Cidades de Atuação"
                                                    isMulti
                                                    defaultOptions
                                                    loadOptions={ this.loadCityOptions }
                                                    value={this.state.profile.cities}
                                                    onChange={val => this.onSelectFilterChange('cities',val)} />
                                            </Col>
                                        </RowNoPadding>
                                        <RowNoPadding>
                                            <Col>
                                                <AsyncSelect
                                                    placeholder="Especialidades"
                                                    isMulti
                                                    defaultOptions
                                                    loadOptions={ this.loadSpecialtiesOptions }
                                                    value={this.state.profile.specialties}
                                                    onChange={val => this.onSelectFilterChange('specialties',val)} />
                                            </Col>
                                        </RowNoPadding>
                                    </Col>
                                </RowNoPadding>
                            </ColNoPadding>  
                        </RowNoPadding>
                        <RowNoPadding>
                            <ColNoPadding xs="12" md="2" lg="2" xl="2">
                                <ButtonForm onClick={ this.submitNewProfile } >Salvar</ButtonForm>
                            </ColNoPadding> 
                        </RowNoPadding>
                    </WrapBox>
                </Row>
            </WrapContent>
        </Background>
        )
    }
}

const mapStateToProps = state => ({
    lawyer: { 
        profile: state.profile,
        error: state.error,
        loading: state.loading }
})

const mapDispatchToProps = dispatch => bindActionCreators({ createNewProfile }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
