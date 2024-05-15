import React from 'react'
import { Card } from 'react-bootstrap'
import globe from '../assets/globe.png'
import computer from '../assets/computer.png'
import circle from '../assets/circle.png'
import book from '../assets/book.png'
import search from '../assets/search.png'
import settings from '../assets/settings.png'

function Services() {
  return (
    <>
     <div className='container text-center p-5'>
        <h2>SERVICES</h2>

        <div className="row p-5">
            <div className="col-lg-4">
            
    <Card border='light' style={{ width: '18rem',backgroundColor:'black' }}>
      
      <Card.Body>
        <img height={'200px'} src={globe} alt="" />
        <h3 style={{color:'red'}}>WEBSITES</h3>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card border='light' style={{ width: '18rem',backgroundColor:'black' }}>
      
      <Card.Body>
        <img height={'200px'} src={computer} alt="" />
        <h3 style={{color:'red'}}>SINGLE PAGE APPLICATION</h3>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card border='light' style={{ width: '18rem',backgroundColor:'black' }}>
      
      <Card.Body>
        <img height={'200px'} src={circle} alt="" />
        <h3 style={{color:'red'}}>WEB APPLICATION</h3>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </div>
        </div>
        <div className="row p-5">
            <div className="col-lg-4">
            
    <Card border='light' style={{ width: '18rem',backgroundColor:'black' }}>
      
      <Card.Body>
        <img height={'200px'} src={book} alt="" />
        <h3 style={{color:'red'}}>PSD TO HTML</h3>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card border='light' style={{ width: '18rem',backgroundColor:'black' }}>
      
      <Card.Body>
        <img height={'200px'} src={search} alt="" />
        <h3 style={{color:'red'}}>SEO</h3>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card border='light' style={{ width: '18rem',backgroundColor:'black' }}>
      
      <Card.Body>
        <img height={'200px'} src={settings} alt="" />
        <h3 style={{color:'red'}}>FIXED WEBSITES</h3>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
            </div>
        </div>
        </div>   
    </>
  )
}

export default Services