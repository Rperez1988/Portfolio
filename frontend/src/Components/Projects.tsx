import './Projects.css'
import ProjectA from './ProjectsA'
import ProjectB from './ProjectsB'

const Projects = () => {

    const projects: string = '<Projects>'
    const projects2: string = '</Projects>'

    return(
       
        <div className='projects'>
            <div className='projects2'>

                <div className='projectHeader'>
                    <div className='header1'>

                        <div className='built'>{projects}</div>
                    </div>
                    <div className='header2'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>
                    <div className='header1'>
                    <div className='built'></div>
                    </div>
                </div>

                <ProjectA/>
                <ProjectB/>
                <ProjectA/>
                <ProjectB/>

                <div className='projectHeader'>

                    <div className='header1'>
                        <div className='built'></div>
                    </div>

                    <div className='header2'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                    </div>

                    <div className='header1'>
                        <div className='built'>{projects2}</div>
                    </div>
                    
                </div>
            
            </div>
        </div>

    )
}

export default Projects