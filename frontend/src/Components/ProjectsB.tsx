import abcd from './images/abcd.png'
import './ProjectsB.css'
const ProjectB = () => {


    return(
        <div className='projectB'>
            <div className='projectB-Description'>

                <div className='description-RowOne'></div>



                <div className='description-Featured'>
                    <div className='featuredProjectText'>Featured Project</div>
                </div>
                <div className='description-Name'>AB=CD</div>
                <div className='description-About'>
                    <div className='aboutText'>Desinged to detect the 'AB=CD' harmonic pattens in a stock chart. With in depth settings; allows one to filter. As well shows what would of happend if purhased.</div>
                </div>
                <div className='description-Tools'> VSCode, ReactJS, Django, Django-Restful-API</div>
                <div className='projectDescriptionRow'></div>
                <div className='projectDescriptionRow'></div>
                
            </div>

            
            <div className='projectB-Image'>
                <img className='projectB-Image2' src={abcd} alt="projectB-Image2" />
            </div>
          

        </div>
    )
}

export default ProjectB