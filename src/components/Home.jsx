import React from 'react'

function Home() {
  return (
    <>
   <div className='container'>
        <div className="row container p-5 mt-5">
            <div className="col-lg-6">
             <h2>HI I'AM </h2>
             <h1>Dilsha Mol E Jaleel</h1>
             <h4>I'AM A : MEARN STACK DEVELOPER</h4>
             <p>I Work In Mearn Stack Development, And I Have Experince In Dealing With Programming And Modern Web Technologies, And I Have Built A Lot Of Projects That Have Increased My Experience And Trained A Lot, I Am A Fast Learner And Always Love To Develop Myself</p>
             <div className='d-flex' style={{fontSize:'2rem'}}>
                <a href="" style={{marginRight:'35px'}}><i className="fa-brands fa-square-facebook"></i></a>
                <a href="" style={{marginRight:'35px'}}><i className="fa-brands fa-linkedin"></i></a>
                <a href=""><i className="fa-brands fa-square-github"></i></a>
             </div>
            </div>
            <div className="col-lg-6">
       <img height={'400px'} src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" alt="" />
            </div>
        </div>
   </div>
    </>
  )
}

export default Home