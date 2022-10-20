import abcd from './images/abcd.png'
import './ProjectsA.css'

const ProjectA = () => {


    return(
        <div className='projectA'>
            <div className='projectA-Image'>
                <img className='projectA-Image2' src={abcd} alt="abcd" />
            </div>
            <div className='projectA-Description'>

                <div className='projectDescriptionRow'></div>
                <div className='projectDescriptionRow'>
                    <div className='featuredProjectText'>Featured Project</div>
                </div>
                <div className='projectDescriptionRowName'>AB=CD</div>
                <div className='projectDescriptionRowAbout'>
                    <div className='aboutText'>Desinged to detect the 'AB=CD' harmonic pattens in a stock chart. With in depth settings; allows one to filter. As well shows what would of happend if purhased.</div>
                </div>
                <div className='projectDescriptionTools'> VSCode, ReactJS, Django, Django-Restful-API</div>
                <div className='projectDescriptionRow'></div>
                <div className='projectDescriptionRow'></div>
                
            </div>
        </div>
    )
}

export default ProjectA