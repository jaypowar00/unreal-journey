import { motion } from 'framer-motion';
import React, { PureComponent } from 'react'
import '../App.css';

class IndexCard extends PureComponent {
    render() {
        return (
            <motion.div className='index-card card-fadein' >
                <div className='index-details'>
                    <h2 id='index'>Index</h2>
                    <ul>
                        <li><a href='#unreal-website'>Unreal Engine's learning website</a></li>
                        <li><a href='#youtube-refs'>YouTube references</a></li>
                        <li><a href='#errors'>Issues/Errors encountered</a></li>
                    </ul>
                </div>
            </motion.div>
        )
    }
}

export default IndexCard