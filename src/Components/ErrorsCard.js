import { motion } from 'framer-motion';
import React, { PureComponent } from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import storage_issue_photo from '../Media/imgs/storage_issue.png'
import ImageViewer from 'react-simple-image-viewer';

class ErrorsCard extends PureComponent {
    constructor(props) {
        super(props)
        
        this.images = [
            storage_issue_photo
        ]

        this.state = {
            currentImage: 0,
            isViewerOpen: false
        }
        this.closeImageViewer = this.closeImageViewer.bind(this)
        this.openImageViewer = this.openImageViewer.bind(this)
    }

    openImageViewer = (index) => {
        this.setState({
            currentImage: index,
            isViewerOpen: true
        })
    }

    closeImageViewer = () => {
        this.setState({
            currentImage: 0,
            isViewerOpen: false
        })
    }

    render() {
        return (
            <div className='index-card card-fadein' >
                {
                this.state.isViewerOpen && (
                    <ImageViewer
                    src={ this.images }
                    currentIndex={ this.state.currentImage }
                    disableScroll={ true }
                    closeOnClickOutside={ true }
                    onClose={this.closeImageViewer}
                    backgroundStyle={{backgroundColor: '#000000C 0'}} />)
                }
                <div className='index-details'>
                    <h2 id='errors'>
                        <a href='#errors'><FontAwesomeIcon icon={faLink} fontSize='large'/></a>&nbsp;
                        Errors/Issues Encountered
                    </h2>
                    <div className='card-desc-text' style={{marginLeft: '25px'}}>

                        <h3 style={{marginLeft: '10px', marginBottom: '8px'}}>1. Storage Issue?</h3> 
                        <span style={{marginLeft: '25px'}}>When</span> spend lot of time on Unreal Engine on one point you will notice your OS Drive (C:) is getting full quickly.<br/>
                        Why ? Thats because the compiled shaders gets stored in that drive whenever newones are compiled.<br/>
                        
                        <h4 style={{marginTop: '25px', marginBottom: '10px'}}>Solution:</h4>
                        just goto <code>C:\Users\&lt;username&gt;\AppData\Local\UnrealEngine\Common\DerivedDataCache</code> and delete everything.<br/>
                        its pointless to do this, as the shaders will regenrate whenever they get compiled again;<br/>but you want that few gigs of storage boost feel free to do so.<br/>
                        (as shown in below image)
                    </div>
                    <div style={{marginTop: '10px',width: '100%', textAlign: 'center'}} draggable={false}>
                        <motion.img onClick={() => this.openImageViewer(0)} className='no-select' src={storage_issue_photo} style={{maxWidth: '800px', width: '65vw', minWidth: '85px'}} draggable={false} />
                    </div> <br/>
                    <div className='card-desc-text' style={{marginLeft: '25px'}}>

                        <h3 style={{marginLeft: '10px', marginBottom: '8px'}}>2. Texture Streaming Pool Over Budget</h3> 
                        <span style={{marginLeft: '25px'}}>This</span> can happen your scene has lots of high quality<br/>textures using more memory than you have allocated for them.<br/>
                        
                        <h4 style={{marginTop: '25px', marginBottom: '10px'}}>Solution:</h4>
                        You can increase your texture streaming pool memory allocation to avoid this scenario.<br/>
                        <br/>1. hit the <i>tilde key</i> <code>'~'</code><br/>2. type <code>r.Streaming.PoolSize 1000</code><br/>3. hit Enter<br/>here instead of <code>1000</code> you can specify your specific amount memory.<br/>
                        For more info see <a href='https://www.techarthub.com/fixing-texture-streaming-pool-over-budget-in-ue4/' target={'_blank'} rel={'noreferrer'}>this article</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorsCard