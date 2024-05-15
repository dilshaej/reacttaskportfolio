import React from 'react'
import developer from '../assets/img.gif'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'

function About() {
  return (
    <>
    <div className='p-5 mt-5'>
        <h2 className='text-center'>ABOUT ME</h2>
        <div className="row container">
            <div className="col-lg-6">
<img src={developer} alt="" />
            </div>
            <div className="col-lg-6 container  mt-5">
 <h4>MY NAME IS DILSHA <span style={{color:'yellow'}}>I AM A FULL STACK DEVELOPER</span></h4>
<div className="row">
    <div className="col-lg-2">
<img height={'70px'} src={one} alt="" />
    </div>
    <div className="col-lg-10">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit nisi perspiciatis reprehenderit autem vero doloremque id minima ut aperiam a dolores sequi sapiente, debitis sunt? Aperiam esse adipisci et?</p>
    </div>
</div>
<div className="row">
    <div className="col-lg-2">
<img height={'70px'} src={two} alt="" />
    </div>
    <div className="col-lg-10">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit nisi perspiciatis reprehenderit autem vero doloremque id minima ut aperiam a dolores sequi sapiente, debitis sunt? Aperiam esse adipisci et?</p>
    </div>
</div>
<div className="row">
    <div className="col-lg-2">
<img height={'70px'} src={three} alt="" />
    </div>
    <div className="col-lg-10">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit nisi perspiciatis reprehenderit autem vero doloremque id minima ut aperiam a dolores sequi sapiente, debitis sunt? Aperiam esse adipisci et?</p>
    </div>
</div>
<div className='p-5'>
    <button className='btn btn-primary'>Download CV</button>
    
</div>
            </div>
        </div>

    </div>
    </>
  )
}

export default About