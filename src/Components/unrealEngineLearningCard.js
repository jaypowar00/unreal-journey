import { motion } from 'framer-motion';
import React, { PureComponent } from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import epic_games_launcher_photo from '../Media/imgs/epic_games_launcher.png'
import learning_website_photo from '../Media/imgs/learning_website.png'
import ImageViewer from 'react-simple-image-viewer';

class LearningCard extends PureComponent {
    constructor(props) {
        super(props)
        
        this.images = [
            epic_games_launcher_photo,
            learning_website_photo
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
                    <h2 id='unreal-website'>
                        <a href='#unreal-website'><FontAwesomeIcon icon={faLink} fontSize='large'/></a>&nbsp;
                        Unreal Engine Learning Website
                    </h2>
                    <div className='card-desc-text' style={{marginLeft: '25px'}}>
                        <span style={{marginLeft: '25px'}}>You</span> can always check out Unreal Engine's official Learning <a href='https://learn.unrealengine.com/home/dashboard' target={'_blank'} rel={"noreferrer"}>website</a>.<br/>
                        goto <code>Epic Games Launcher -&gt; Unreal Engine -&gt; Learn -&gt; Unreal Online Learning</code><br/>
                        (as shown in below image)
                    </div>
                    <div style={{marginTop: '10px',width: '100%', textAlign: 'center'}} draggable={false}>
                        <motion.img onClick={() => this.openImageViewer(0)} className='no-select' src={epic_games_launcher_photo} style={{maxWidth: '800px', width: '65vw', minWidth: '85px'}} draggable={false} />
                    </div> <br/>
                    <div className='card-desc-text'>
                        After opening website you will see something like below:
                    </div>
                    <div style={{marginTop: '10px',width: '100%', textAlign: 'center'}} draggable={false}>
                        <motion.img onClick={() => this.openImageViewer(1)} className='no-select' src={learning_website_photo} style={{maxWidth: '800px', width: '65vw', minWidth: '85px'}} draggable={false} />
                    </div>
                    <div className='card-desc-text'>
                        You can then go to "Content Library" on the left navigation panel to see their available courses.
                    </div>
                </div>
            </div>
        )
    }
}

export default LearningCard