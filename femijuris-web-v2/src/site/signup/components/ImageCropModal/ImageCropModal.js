import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import {} from './style'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

class ImageCropModal extends Component {

    constructor(props) {
        super(props);
        this.onImageLoaded = this.onImageLoaded.bind(this);
        this.onCropClick = this.onCropClick.bind(this);
        this.onCropChange = this.onCropChange.bind(this);
    }

    componentWillMount() {
        let state = {
            imageCrop: {
                crop: {}
            }
        }
        this.setState(prevState => (state))
    }

    



    onImageLoaded = (image) => {
        this.setState({
            ...this.state,
            imageCrop: {
                ...this.state.imageCrop,
                crop: makeAspectCrop({
                    x: 0,
                    y: 0,
                    aspect: 1,
                    width: 200,
                }, image.width / image.height),
                image
            }
        });
    }

    onCropClick = () => {
        
        const { image, crop } = this.state.imageCrop;

        this.setState({
            ...this.state,
            imageCrop: {
                ...this.state.imageCrop,
                crop: makeAspectCrop({
                    x: crop.x,
                    y: crop.y,
                    aspect: 1,
                    height: crop.height,
                    width: crop.width,
                },image.naturalWidth / image.naturalHeight),
                image:image,
                disable:false
            }
        });

        this.getCroppedImg(image, crop).then(file => {

            let urlCreator = window.URL || window.webkitURL;
            let imageUrl = urlCreator.createObjectURL(file);
            this.props.onCropImageComplete(file,imageUrl)

        })
    }

    onCropChange = (crop) => {
        this.setState({
            ...this.state,
            imageCrop: {...this.state.imageCrop,crop: crop}
        });
    }

    getCroppedImg = (image,crop) => {

        const pixelCrop = {
            x: Math.round(image.naturalWidth * (crop.x / 100)),
            y: Math.round(image.naturalHeight * (crop.y / 100)),
            width: Math.round(image.naturalWidth * (crop.width / 100)),
            height: Math.round(image.naturalHeight * (crop.height / 100))
        }

        const canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            100,
            100
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(file => {
                resolve(file);
            }, 'image/jpeg');
        });
    };


    render() {
        return (
            <div>
                <Modal isOpen={ this.props.show } toggle={ this.props.onCloseClick }>
                    <ModalHeader toggle={ this.props.onCloseClick } >
                        Recorte sua fotografia
                    </ModalHeader>

                    <ModalBody>

                        {
                            (this.props.src) ? (<ReactCrop
                            maxWidth={400}
                            maxHeight={400}
                            {...this.state.imageCrop}
                            onImageLoaded={this.onImageLoaded}
                            onChange={this.onCropChange}
                            src={this.props.src} />) :(<p></p>)
                        }


                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={ this.onCropClick }>Salvar Foto</Button>
                        <Button onClick={ this.props.onCloseClick }>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default ImageCropModal;