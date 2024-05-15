import React from 'react';
import background from '../assets/back.jpg';
import calculator from '../assets/calculator.jpg';
import counter from '../assets/counter .jpg';
import media from '../assets/mediaplayer.jpg';

function Component() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    margin: '20px 0'
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  };

  const overlayContentStyle = {
    color: 'white',
    textAlign: 'center'
  };

  const linkStyle = {
   
    textDecoration: 'none',
    fontSize:'40px'

  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = 0;
  };

  return (
    <div className='container text-center'>
      <h2>MY PORTFOLIO</h2>
      <div style={containerStyle}>
        <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img style={imageStyle} src={background} alt="Background" />
          <div className="overlay" style={overlayStyle}>
            <div style={overlayContentStyle}>
              <h3>Background Project</h3>
              <a href="https://github.com/dilshaej" target="_blank" rel="noopener noreferrer" style={linkStyle}><i className="fa-brands fa-square-github"></i></a>
            </div>
          </div>
        </div>
        <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img style={imageStyle} src={calculator} alt="Calculator" />
          <div className="overlay" style={overlayStyle}>
            <div style={overlayContentStyle}>
              <h3>Calculator Project</h3>
              <a href="https://github.com/dilshaej" target="_blank" rel="noopener noreferrer" style={linkStyle}><i className="fa-brands fa-square-github"></i></a>
            </div>
          </div>
        </div>
        <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img style={imageStyle} src={counter} alt="Counter" />
          <div className="overlay" style={overlayStyle}>
            <div style={overlayContentStyle}>
              <h3>Counter Project</h3>
              <a href="https://github.com/dilshaej" target="_blank" rel="noopener noreferrer" style={linkStyle}><i className="fa-brands fa-square-github"></i></a>
            </div>
          </div>
        </div>
        <div style={imageContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img style={imageStyle} src={media} alt="Media Player" />
          <div className="overlay" style={overlayStyle}>
            <div style={overlayContentStyle}>
              <h3>Media Player Project</h3>
              <a  href="https://github.com/dilshaej" target="_blank" rel="noopener noreferrer" style={linkStyle}><i className="fa-brands fa-square-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
