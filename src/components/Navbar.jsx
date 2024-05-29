import '../styles/Navbar.css'



export default Navbar 

function Navbar() {
  return (
    <nav>
    <div className="wrapper">
        <div className="logo"> <a href=""> Khong Gua</a>
            <div className="menu">
                <ul>
                    <li><a href="#home"> Home</a></li>
                    <li><a href="#courses"> Courses</a></li>
                    <li><a href="#tutors"> Tutors</a></li>
                    <li><a href="#partners"> partners</a></li>
                    <li><a href="#contact"> Contact</a></li>
                    <li><a href="" className="rbl-biru"> Sign Up</a></li>
                    
                </ul>
            </div>
        </div>
    </div>
    </nav>
  )
}
