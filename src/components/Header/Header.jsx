import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import UserProfile from '../../assets/User_solid.svg';
import Button from '../Button/Button';
import { useState } from 'react';
import arrow_down from '../../assets/arrow_down.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const CompanyList = [
        { id: 1, name: "For student" },
        { id: 2, name: "Careers" },
        { id: 3, name: "Brand Ambassadors" },
        { id: 4, name: "About" },
        { id: 5, name: "Resources" },
    ];

    const EmployersList = [
        { id: 1, name: "Start Hiring" },
        { id: 1, name: "Volunteer" },
        { id: 1, name: "Diversity and Inclusion"},
    ];

    const CandidatesList = [
        { id: 1, name: "Get Hired" },
        { id: 2, name: "Internships" },
        { id: 3, name: "Temporary Employment" },
        { id: 4, name: "Graduates" },
        { id: 5, name: "Volunteer" },

    ];

    const BlogList = [
        { id: 1, name: "Recently Articles" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const renderDropdown = (items) => (
        <ul className='w-full pl-4'>
            {items.map((item) => (
                <li
                    key={item.id}
                    className='w-full text-start py-2 px-5 focus:text-green-1 hover:text-green-2 active:text-green-[#78C58C] '
                >
                    <a href='#'>{item.name}</a>
                </li>
            ))}
        </ul>
    );

    return (
        <header className='sticky font-readex-pro text-grey-1 top-0 z-[20] flex justify-between desktop:items-center desktop:px-[100px] desktop:py-[36px] mobile:py-[25px] mobile:px-[20px] bg-white'>
            <a href="#"><img src={logo} alt="Logo" className='max-h-8' /></a>

            {/* Desktop navigation */}
            <nav className='hidden desktop:flex gap-[33px]'>
                <ul className='flex font-readex-pro text-[#3D425A] text-base'>
                    <li className='px-4'><a href='#' className='focus:text-green-1 hover:text-green-2 active:text-green-[#78C58C]'>Employers</a></li>
                    <li className='px-4'><a href='#' className='focus:text-green-1 hover:text-green-2 active:text-green-[#78C58C]'>Candidates</a></li>
                    <li className='px-4'><a href='#' className='focus:text-green-1 hover:text-green-2 active:text-green-[#78C58C]'>Company</a></li>
                    <li className='px-4'><a href='#' className='focus:text-green-1 hover:text-green-2 active:text-green-[#78C58C]'>Blog</a></li>
                </ul>
            </nav>

            {/* Desktop auth section */}
            <div className="hidden desktop:flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src={UserProfile} alt="Profile" className='w-5' />
                    <a href="#" className='text-base font-bold text-[#242D3C]'>Login</a>
                </div>
                <div className='flex gap-2'>
                    <Button
                        className="px-[18px] py-3 rounded-xl border-solid border-[1px] text-xs"
                        content="Start hiring"
                    />
                    <Button
                        className="px-[18px] py-3 text-white bg-[#3D425A] rounded-xl text-xs"
                        content="Find a job"
                    />
                </div>
            </div>

            {/* Mobile menu toggle */}
            <button
                className='desktop:hidden z-30'
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-20 bg-white z-20 px-4 py-6">
                    <nav className='flex flex-col items-starts gap-8 h-full'>
                        <div className="max-w-[341px] w-full">
                            <ul className='flex flex-col items-center gap-2'>
                                {/* Employers Dropdown */}
                                <li className='w-full  items-center justify-between flex'>
                                    <button
                                        className='flex items-center justify-between w-full py-[18px] px-5 rounded-[10px] focus:text-white focus:bg-green-1'
                                        onClick={() => handleDropdown('employers')}
                                    >
                                        Employers
                                        <img
                                            src={arrow_down}
                                            alt="arrow"
                                            className={`transition-transform ${openDropdown === 'employers' ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </li>
                                {openDropdown === 'employers' && renderDropdown(EmployersList)}

                                {/* Candidates Dropdown */}
                                <li className='w-full text-start items-center justify-between flex'>
                                    <button
                                        className='flex items-center justify-between w-full py-[18px] px-5 rounded-[10px] focus:text-white focus:bg-green-1'
                                        onClick={() => handleDropdown('candidates')}
                                    >
                                        Candidates
                                        <img
                                            src={arrow_down}
                                            alt="arrow"
                                            className={`transition-transform ${openDropdown === 'candidates' ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                </li>
                                {openDropdown === 'candidates' && renderDropdown(CandidatesList)}

                                {/* Company Dropdown */}
                                <li className='w-full text-start items-center justify-between flex'>
                                    <button
                                        className='flex items-center justify-between  w-full py-[18px] px-5 rounded-[10px] focus:text-white focus:bg-green-1'
                                        onClick={() => handleDropdown('company')}
                                    >
                                        Company
                                        <img
                                            src={arrow_down}
                                            alt="arrow"
                                            className={`transition-transform ${openDropdown === 'company' ? 'rotate-180'  : ''}`}
                                        />
                                    </button>
                                </li>
                                {openDropdown === 'company' && renderDropdown(CompanyList)}

                                {/* Blog Dropdown */}

                            </ul>
                        </div>

                        <hr />
                        <li className='w-full text-start items-center justify-between flex'>
                            <button
                                className='flex items-center justify-between w-full py-[18px] px-5 rounded-[10px] focus:text-white focus:bg-green-1'
                                onClick={() => handleDropdown('blog')}
                            >
                                Blog
                                <img
                                    src={arrow_down}
                                    alt="arrow"
                                    className={`transition-transform ${openDropdown === 'blog' ? 'rotate-180' : ''}`}
                                />
                            </button>
                        </li>
                        {openDropdown === 'blog' && renderDropdown(BlogList)}
                        <div className='flex flex-col items-start gap-4 p-[10px] w-full'>
                            <div className="flex items-center gap-2">
                                <img src={UserProfile} alt="Profile" className='w-5' />
                                <a href="#" className='text-base font-bold text-[#242D3C]'>Login</a>
                            </div>

                            <div className='flex flex-col gap-3 w-full'>
                                <Button
                                    className="w-full py-3 rounded-xl border-solid border-[1px] text-xs"
                                    content="Start Hiring"
                                />
                                <Button
                                    className="w-full py-3 text-white bg-[#3D425A] rounded-xl text-xs"
                                    content="Find A Job"
                                />
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;