import { motion } from 'framer-motion';
import React, { PureComponent } from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from 'react-player';

class YoutubeReferencesCard extends PureComponent {
    constructor(props) {
        super(props)
        this.videos = [
            {
                id: 1,
                name: 'Unreal Engine 4 Beginner Tutorial: Getting Started',
                url: 'https://www.youtube.com/watch?v=qeKDRqWtGV0'
            },
            {
                id: 2,
                name: 'How To Setup Quixel Bridge with Unreal Engine 4 - Import FREE Megascans Assets!',
                url: 'https://www.youtube.com/watch?v=XrOk8bZfnGM&t=116s'
            },
            {
                id: 3,
                name: 'Creating Visual Effects With Unreal Engine | Webinar',
                url: 'https://www.youtube.com/watch?v=h0Vcb1pCqy8&t=143s'
            },
            {
                id: 4,
                name: 'Character Animation in UE4 | Live Training | Unreal Engine Livestream',
                url: 'https://www.youtube.com/watch?v=YVC-DL9Ibf0&t=3141s'
            },
            {
                id: 5,
                name: 'Control Rig Tutorial - Part 01 - Animation In Unreal Engine 4 | Sonali Singh',
                url: 'https://www.youtube.com/watch?v=nblqNp7XoWU&t=288s'
            },
            {
                id: 6,
                name: "Let's Make a Game in 2 HOURS in Unreal Engine 4 [Top-Down Shooter]",
                url: 'https://www.youtube.com/watch?v=nI1KcW3mjAA&t=5383s'
            },
            {
                id: 7,
                name: 'How to make a basic Android game in Unreal in 7 minutes - No code!',
                url: 'https://www.youtube.com/watch?v=zfwORDtQDUg'
            },
            {
                id: 8,
                name: 'A Video Guide to Unreal Engine’s Sequencer | Get to Know',
                url: 'https://www.youtube.com/watch?v=D3trMpkxAFk&t=105s'
            },
            {
                id: 9,
                name: 'I Made Chrome Dinosaur Game in Unreal Engine 4',
                url: 'https://www.youtube.com/watch?v=7JgidHXMFgo&t=56s'
            },
            {
                id: 10,
                name: 'Intro to Level Creation: Adding Windows & Doors | 03 | v4.7 Tutorial Series | Unreal Engine',
                url: 'https://www.youtube.com/watch?v=RGxf2SiUBt8&t=238s'
            },
            {
                id: 11,
                name: 'Unreal Engine 4 Tutorial - How to Create Materials in UE4',
                url: 'https://www.youtube.com/watch?v=Bg90pIB-IP0'
            },
            {
                id: 12,
                name: 'Unreal Engine 4 Beginner Tutorial Series - #24 Introduction to sounds',
                url: 'https://www.youtube.com/watch?v=9qSMap66v_I'
            },
            {
                id: 13,
                name: 'How To Create AI And Enemy Basics - #42 Unreal Engine 4 Beginner Tutorial Series',
                url: 'https://www.youtube.com/watch?v=3GV6-4uhkYc'
            },
            {
                id: 14,
                name: 'Exploring the depths of the new Sky & Atmosphere system | Unreal Engine',
                url: 'https://www.youtube.com/watch?v=SeNM9zBPLCA&t=152s'
            },
            {
                id: 15,
                name: 'Moving Platform Tutorial In 3 Minutes Unreal Engine 4',
                url: 'https://www.youtube.com/watch?v=TNkX3DdwhQw&t=120s'
            },
            {
                id: 16,
                name: 'Advanced BSP Geometry Editing - #10 Unreal Engine 4 Level Design Tutorial Series',
                url: 'https://www.youtube.com/watch?v=uyPo6NLW-50&t=79s'
            },
            {
                id: 17,
                name: 'How to HIDE Texture REPETITION in Unreal Engine - UE4 Tutorial',
                url: 'https://www.youtube.com/watch?v=yCRzOdo4b68'
            },
            {
                id: 18,
                name: 'Master 3D modeling in unreal engine 4.25 tutorial under 20 minutes',
                url: 'https://www.youtube.com/watch?v=gBrF8bc6TsQ'
            }
        ]
        this.state = {
            current_url: 'https://www.youtube.com/watch?v=qeKDRqWtGV0',
            name: 'Unreal Engine 4 Beginner Tutorial: Getting Started'
        }
        this.onVideoClick = this.onVideoClick.bind(this)
    }
    onVideoClick(url, name) {
        this.setState({
            current_url: url,
            name: name
        })
    }
    render() {
        console.log(this.videos)
        return (
            <motion.div className='index-card card-fadein' >
                <div className='index-details'>
                    <h2 id='youtube-refs'>
                        <a href='#youtube-refs'><FontAwesomeIcon icon={faLink} fontSize='large'/></a>&nbsp;
                        YouTube References
                    </h2>
                    <div style={{fontSize: '18px'}}>
                        Ref: &nbsp;
                        <a href={this.state.current_url} target={'_blank'}>
                            <div className='ref-name' style={{display: 'inline-block'}}>
                                {this.state.name}
                            </div>
                        </a>
                    </div>
                    <div className='player'>
                        <div className='player-strechy-wrapper'>
                            <ReactPlayer className='react-player' url={this.state.current_url} controls/>
                        </div>
                    </div>
                        <div className='list-of-videos'>
                            {
                                this.videos.map(video =>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='list-item' key={video.id} onClick={() => this.onVideoClick(video.url, video.name)}>
                                        {video.name.substring(0, 14)}...
                                    </motion.div>
                                )
                            }
                        </div>
                </div>
            </motion.div>
        )
    }
}

export default YoutubeReferencesCard