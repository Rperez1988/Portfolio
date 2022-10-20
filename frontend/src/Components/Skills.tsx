import frontend from './images/frontend.png'
import backend from './images/backend.png'
import './Skills.css'

const Skills = () => {

    
    const bio: string = 'What started off as just a hobbie; an activity that I simply enjoyed practicing in my free time, overtime became a skill I realized that I could one day turn into into a career. \n' +
    'The passion to create and form ideas from scratch into reality is what got me into coding and is still till this very day the same reason I love it. Welcome to my page!'
    

    return(
        
        <div className='skills'>

        <div className='background'>

            <div className='emptySpace'>
                <div className='bio'>{bio}</div>
            </div>

            <div className='images'>
           
                <div className='headerLabel'>
                    <div className='headerImage'>
                        <img src={frontend} alt="Logo" />
                    </div>
                </div>
                <div className='headerLabel'>
                    <div className='headerImage'>
                        <img src={backend} alt="Logo" />
                    </div>
                </div>
                    
            </div>
        </div>

        <div className='skillsInfo'>
       
            <div className='label'>
                <div className='header'>Front-End</div>
                <div className='b'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</div>
                <div className='c'>Languages I speak:</div>
                <div className='d'>JavaScript, TypeScript, Python, HTML, CSS</div>
                <div className='e'>Frameworks:</div>
                <div className='f'>ReactJS</div>
                <div className='f'>React Native</div>



            </div>
            <div className='label'>
                <div className='header'>Back-End</div>
                <div className='b'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</div>
                <div className='c'>Languages I speak:</div>
                <div className='d'>JavaScript, Python</div>
                <div className='e'>Databases {'&'} Frameworks:</div>
                <div className='f'>Django</div>
                <div className='f'>Node.js</div>
                <div className='f'>SQL Server</div>
                <div className='f'>SQLite</div>
                <div className='f'>Postgres</div>
            </div>
        </div>

    </div>
    )
}

export default Skills