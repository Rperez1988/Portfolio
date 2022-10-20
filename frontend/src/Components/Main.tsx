import { FC } from 'react';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import './Main.css'

const Main: FC = () => {

    return(
        <div className='main'>
            <Intro/>
            <Skills/>
            <div className='space'></div>
            <Projects/>
            <div className='end'></div>
            <div className='end'>Designed And Created By Rick Perez</div>
        </div>
    )
}

export default Main