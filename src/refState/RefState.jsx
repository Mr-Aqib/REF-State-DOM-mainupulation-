import React, { useRef, useState } from 'react'

const RefState = () => {
    const Anim = useRef()
    const open = useRef()
    let num = 360
    
    const handleClick = () => {
       
        Anim.current.style.transition = "all .5s"
        Anim.current.style.transform = `rotate(${num}deg)`
        num+=360

       
    }
    // Navbar
    const handleOpen = () => {
        open.current.style.width = "20%"
    }
    const handleleave = () => {
        open.current.style.width = "5%"
    }
  return (
      <>
          <div className="container-fluid position-relative" style={{ height: '100vh' }} >
              <div
                  ref={open}
                  onMouseLeave={handleleave}
                  onMouseOver={handleOpen} className="nav position-absolute" style={{
                  height: '100vh',
                  width: "5%",
                  left:'0%',
                  background: "red",
                  top: "0%",
                  transition:"all .7s"
              }}>
                  
              </div>
              <div className="col-lg-12 shadow mx-auto shadow p-3 rounded-4">
                  <h1 className="text-center">Ref Dom Mainupulation</h1>
                   <div className="d-flex flex-row align-items-center justify-content-around">
                 <img className='' ref={Anim} src="https://tireworks.net/wp-content/uploads/sites/2/2018/08/reading-your-tires.png" alt="" />
                 
                 </div>
                  <button onClick={handleClick} className="btn my-3 btn-success d-block mx-auto w-50">
                      Click Me!
                  </button>
              </div>
      </div>
      </>
  )
}

export default RefState