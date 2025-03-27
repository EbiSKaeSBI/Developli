import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'
import UserProfile from '../../assets/User_solid.svg'
import Button from '../Button/Button';
import { useState } from 'react';
import arrow_down from '../../assets/arrow_down.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className='sticky top-0 z-[20] flex justify-between desktop:items-center desktop:px-[100px] desktop:py-[36px] mobile:py-[25px] mobile:px-[20px]  mobile:items-end mobile:flex-wrap'>
            <span><a><img src={logo} className='' /></a></span>
            <nav>
                <ul className='hidden   desktop:flex font-readex-pro  gap-[33px] text-[#3D425A] text-base'>
                    <li><a href='#' className=''>Employers</a></li>
                    <li><a href='#' className=''>Candidates</a></li>
                    <li><a href='#' className=''>Company</a></li>
                    <li><a href='#' className=''>Blog</a></li>
                </ul>

            </nav>
            <div className="hidden  desktop:flex font-readex-pro  gap-2">
                <a><img src={UserProfile} alt="" /></a>
                <a href="#" className='text-base font-bold'><p>Login</p></a>
            </div>
            <div className='hidden  desktop:flex gap-2'>
                <Button className="px-[18px] py-3 text-grey-1 rounded-xl border-solid border-[1px] border-grey-2 text-xs" content="Start hiring" />
                <Button className="px-[18px] py-3 text-white bg-[#3D425A] rounded-xl text-xs" content="Find a job" />
            </div>

            <div className='desktop:hidden'>
                <button className='' onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
            </div>

            {isMenuOpen && (
                <div className="">
                    <ul className='flex flex-col items-center basis-full '>
                        <li><a href='#' className='flex items-center'>Employers<span><img src={arrow_down} alt="" /></span></a></li>
                        <li><a href='#' className=''>Candidates</a></li>
                        <li><a href='#' className=''>Company</a></li>
                        <li><a href='#' className=''>Blog</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;