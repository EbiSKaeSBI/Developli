import { Globe } from 'lucide-react'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
const listEmployesr = [
    { id: 1, name: "Start Hiring" },
    { id: 2, name: "Volunteer" },
    { id: 3, name: "Diversity and Inclusion" },
]
const listCandidates = [
    { id: 1, name: "Get Hired" },
    { id: 2, name: "Internships" },
    { id: 3, name: "Temporary Employment" },
    { id: 4, name: "Graduates" },
    { id: 5, name: "Volunteer" },
]
const listCompany = [
    { id: 1, name: "For student" },
    { id: 2, name: "Careers" },
    { id: 3, name: "Brand Ambassadors" },
    { id: 4, name: "About" },
    { id: 5, name: "Resources" },
    { id: 6, name: "Blog" },
]

const listRender = (items) => (
    <ul className=''>
        {items.map((item) => (
            <a className='desktop:text-xl mobile:text-sm text-[#242D3C] mb-[10px] opacity-50 '><li key={item.id} className='pb-1 desktop:pb-[10px]'>{item.name}</li></a>
        ))}
    </ul>
)
const Footer = () => {
    return (
        <footer className="bg-[#EEE8DD] font-readex-pro  rounded-t-[30px]  center">
            <div className="flex mobile:flex-col mobile:items-start mobile:justify-center desktop:flex-row desktop:justify-between pt-[75px] pb-[45px]">
                <img src={logo} alt="" />
                <div className='flex flex-col text-sm text-[#242D3C] py-5 gap-1'>
                    <p className=''>Rouwais Dist, Jeddah Rouwais
                        Saudi Arabia</p>
                    <p className=''>00966 2 6676760</p>
                </div>
                <div className=''>
                    <h6 className='font-bold mobile:text-base desktop:text-xl'>Employers</h6>
                    {listRender(listEmployesr)}
                </div>
                <div className=''>
                    <h6 className='font-bold mobile:text-base desktop:text-xl'>Candidates</h6>
                    {listRender(listCandidates)}
                </div>
                <div className=''>
                    <h6 className='font-bold mobile:text-base desktop:text-xl'>Company</h6>
                    {listRender(listCompany)}
                </div>
            </div>
            <hr />
            <div className="flex justify-between">
                <div>
                    <p className='hidden desktop:block opacity-50'>Copyright © 2022</p>
                </div>
                <div className='hidden desktop:flex gap-[6px]'>
                    <Globe />
                    <p>English</p>
                </div>
                <div className='flex desktop:gap-[40px] mobile:gap-[34px] mobile:text-sm mobile:justify-center'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Offer terms</p>
                </div>
                <div className='hidden desktop:flex gap-[3px]'>
                    <img src={instagram} className='h-[24px] w-[24px]' alt="" />
                    <img src={twitter} className='h-[24px] w-[24px]' alt="" />
                    <img src={facebook} className='h-[24px] w-[24px]' alt="" />
                </div>
            </div>
            <hr />
            <div className="flex justify-between px-[20px] desktop:hidden pb-[28px] pt-[20px]">
                <div>
                    <p className='hidden mobile:block  opacity-50'>Copyright © 2022</p>
                </div>
                <div className='desktop:hidden flex gap-[3px]'>
                    <img src={instagram} className='h-[24px] w-[24px]' alt="" />
                    <img src={twitter} className='h-[24px] w-[24px]' alt="" />
                    <img src={facebook} className='h-[24px] w-[24px]' alt="" />
                </div>
            </div>

        </footer>
    )
}

export default Footer;