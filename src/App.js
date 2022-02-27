import React, { PureComponent } from 'react'
import './App.css';
import IntroCard from './Components/IntroCard';
import 'animate.css';
import IndexCard from './Components/IndexCard';
import LearningCard from './Components/unrealEngineLearningCard';
import YoutubeReferencesCard from './Components/YoutubeReferencesCard';
import ErrorsCard from './Components/ErrorsCard';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div style={{ width: 'fit-content', display: 'inline-block', margin: '0 auto'}}>
          <IntroCard/>
          <div style={{width: '100%', margin: '0 auto'}}>
            <IndexCard/>
            <LearningCard/>
            <YoutubeReferencesCard/>
            <ErrorsCard/>
          </div>
        </div>
    </div>
    )
  }
}

export default App
