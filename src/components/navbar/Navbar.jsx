import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const [active,setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const isActive = () => {
    window.scrollY > 0 ?  setActive(true) : setActive(false)
  }

  useEffect(() =>{
   window.addEventListener("scroll",isActive);

   return ()=>{
    window.removeEventListener("scroll",isActive);
   };
  },[])
  const currentUser = {
    id:1,
    username:"Tanjiro Kamada",
    isSeller: true
  }

  const {pathname} = useLocation()
  return (
    <div className={active || pathname!== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link' >
            <span className='text' >fiverr</span>
          </Link>
          <span className='dot' >.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser?.isSeller && <Link to={"/register"} ><button>Join</button></Link>}
          {currentUser && (
            <div className="user"onClick={()=> setOpen(!open)} >
              <img src="https://easydrawingguides.com/wp-content/uploads/2022/11/Low-Res-Kamado-Tanjiro-from-Demon-Slayer.png" alt="Tanjiro Kamado" />
              <span>{currentUser?.username}</span>
             {open && <div className="options">
                {currentUser?.isSeller && (
                  <>
                    <Link to={"/gigs"} className='link'>Gigs</Link>
                    <Link to={"/add"} className='link'>Add New Gig</Link>
                  </>
                )}
                <Link to={"/orders"} className="link" >Orders</Link>
                <Link className='link'  to={"/messages"}>Messages</Link>
                <span>LogOut</span>
                    
              </div>}
          </div>
        )}
      </div>
    </div>
      {(active || pathname!== "/" ) && (
      <>
        <hr />
        <div className="menu">
            <Link to={"/"} className='link' >
              Graphics and Design
            </Link>
            <Link to={"/"} className='link' >
              Video&Animation
            </Link>
            <Link to={"/"} className='link' >
              Writing&Translation
            </Link>
            <Link to={"/"} className='link' >
              AI Services
            </Link>
            <Link to={"/"} className='link' >
              Digital Marketing
            </Link>
            <Link to={"/"} className='link' >
              Music&Audio
            </Link>
            <Link to={"/"} className='link' >
              Programming&Tech
            </Link>
            <Link to={"/"} className='link' >
              Business 
            </Link>
            <Link to={"/"} className='link' >
              Lifestyle
            </Link>

        </div>
  
      </>
    )}
  </div>
)
}

export default Navbar
                  

      
