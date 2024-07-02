import React, { useRef, useState } from 'react'

const RefState = () => {
    const Anim = useRef()
    const Anim2 = useRef()
    const move = useRef()
    const [data,setData]=useState("Stop")
    let num = 360
    
    const handleClick = () => {
       
        move.current.style.color = 'red'
        Anim.current.style.transition = "all .5s"
        Anim.current.style.transform = `rotate(${num}deg)`
        Anim2.current.style.transition = "all .5s"
        Anim2.current.style.transform = `rotate(-${num}deg)`
        setData("Moving")
        num+=360

       
    }
  return (
      <>
          <div className="container">
              <div className="col-lg-12 shadow mx-auto shadow p-3 rounded-4">
                  <h1 ref={move} className="text-center">{data}</h1>
                   <div className="d-flex flex-row align-items-center justify-content-around">
                 <img className='' ref={Anim} src="https://tireworks.net/wp-content/uploads/sites/2/2018/08/reading-your-tires.png" alt="" />
                 <img className='' ref={Anim2} src="https://tireworks.net/wp-content/uploads/sites/2/2018/08/reading-your-tires.png" alt="" />
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