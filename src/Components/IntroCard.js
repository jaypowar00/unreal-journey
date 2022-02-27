import { motion } from 'framer-motion';
import React, { PureComponent } from 'react'
import '../App.css';
import photo from '../jay_photo.jpg'
import unreal_logo from '../unreal_engine_logo.png'

class IntroCard extends PureComponent {
    render() {
        return (
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className='intro-card card-fadein' >
                <img className='intro-img no-select' src={photo} alt='jay_powar.png' height='300px' draggable={false} />
                <div className='intro-desc'>
                    Hi there, I am Jay.<br/>
                    Here I am sharing how did I started my Unreal Engine's learning journey like from which resources did I startded learning. Hope this helps you get started with Unreal Engine too.
                    <hr/>
                    <div style={{textAlign: 'center', width: '100%'}} draggable={false}>
                        <motion.img className='no-select' src={unreal_logo} width='15%' style={{maxWidth: '75px', minWidth: '45px'}} draggable={false} />
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default IntroCard