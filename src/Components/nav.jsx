import './nav.css'
const Nav = () => {
    return (
        <div className='nav'>
            <div className="top">
                <a href='#'>
                    <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" />
                    0509418224
                </a>
                <a href='#'>
                    <img src="https://cdn-icons-png.flaticon.com/128/893/893257.png" alt="" />
                    enquiry@urbansciencemep.com
                </a>
            </div>
            <div className="bottom">

                <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" />
                <ol>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Services</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ol>
                <button>Enquire Now</button>

            </div>
        </div>

    )
}
export default Nav