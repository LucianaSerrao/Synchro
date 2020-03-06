import React, { Component } from 'react';
import {PDownloadInfo, DivDownloadBox, ImgFormatIcon} from "./style"

class EbookDownloadBox extends Component {
    render() {

        const downloadComponent = (!this.props.show) ? null : (
            <DivDownloadBox>
                <PDownloadInfo>Clique abaixo para escolher o formato do arquivo!</PDownloadInfo>
                {
                    this.props.files.map((it,key) =>(
                        <a target="_blank" download={'ebook-femijuris'} title={it.description} key={key} href={it.file}>
                            <ImgFormatIcon width={32} height={32} src={it.image} />
                        </a>
                    ))
                }
            </DivDownloadBox>
        )

        return (
            downloadComponent
        );
    }
}
export default EbookDownloadBox;