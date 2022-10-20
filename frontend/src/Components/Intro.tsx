import './Intro.css'

const Intro = () => {

    const description: string = 'Front-end | Back-end Developer'

    return(
        <div className='wrapper'>
        <div className="container">
            <div className="box">

                <div className="title">
                    <span className="block"></span>
                    <h1>Rick Perez<span></span></h1>
                </div>

                <div className="role">
                    <div className="block"></div>
                    <p>{description}</p>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Intro