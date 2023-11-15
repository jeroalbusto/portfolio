import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>

    <div className="skills__box">

        <div className="skills__group">
            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Laravel</span>
            </div>
            </div>


            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Testing</h3>
                <span className="skills__level">Jest.js mocha.js</span>
            </div>
            </div>


            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__level">Typescript Express.js Nest.js</span>
            </div>
            </div>


            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Swagger</h3>
                <span className="skills__level">API Documentation</span>
            </div>
            </div>

            
        </div>


        <div className="skills__group">
            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Mysql</span>
                <br />
                <span className="skills__level">PostgreSQL</span>
            </div>
            </div>


            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">No SQL</h3>
                <span className="skills__level">MongoDB</span>
            </div>
            </div>


            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">ORM</h3>
                <span className="skills__level">Prisma sequelize</span>
            </div>
            </div>

            <div className="skills__data">
            <i className='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name">Docker</h3>
                <span className="skills__level">Compose</span>
            </div>
            </div>

            

            
        </div>

        
    </div>


</div>
  )
}

export default Backend