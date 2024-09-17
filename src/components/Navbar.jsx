import {userState} from 'react'

const Navbar = () => {
 const [isOpen, setIsOpen] = userState(false)
 const toggleMenu = () => {
    setIsOpen(!isOpen)

 }
return (
    <nav className="border-b-2"></nav>
)
}

export default Navbar