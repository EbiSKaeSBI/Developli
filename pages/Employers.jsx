import employers from "../src/assets/peoplegroup.png"
import BenefitCard from "../src/components/BenefitCard/BenefitCard"
import logo from "../src/assets/seBlack1Logo.svg"
import website from "../src/assets/website.png"
import wifi from "../src/assets/wifi.svg"
import zoom from "../src/assets/zoom.svg"
import user from '../src/assets/user.svg'
import smart from "../src/assets/smart.svg"
import BenefitCards from "../src/components/BenifitCards/BenefitCards"
import Airbnb from "../src/assets/Airbnb.svg"
import Stripe from "../src/assets/Stripe.svg" 
import Google from "../src/assets/Google.svg"
import InVision from "../src/assets/InVision_logo.svg"
import Zendesk from "../src/assets/Zendesk.svg"
import Rakuten from "../src/assets/Rakuten.svg"
import Upwork from "../src/assets/Upwork.svg" 
import Amazon from "../src/assets/Amazon.svg"   
import CompanyCard from "../src/components/CompanyCard/CompanyCard"
import ArrowRight from "../src/assets/arrow-right.svg"
import Woman from "../src/assets/woman.png"
const Employers = () => {


    // SVG для карточек примущества
    const wifiIcon = wifi
    const zoomIcon = zoom
    const userIcon = user
    const smartIcon = smart

    // SVG для карточек компаний
    const AirbnbLogo = Airbnb
    const StripeLogo = Stripe
    const GoogleLogo = Google
    const InVisionLogo = InVision
    const ZendeskLogo = Zendesk
    const RakutenLogo = Rakuten
    const UpworkLogo = Upwork
    const AmazonLogo = Amazon

    const LogosArray = [AirbnbLogo,StripeLogo,GoogleLogo,InVisionLogo,RakutenLogo,ZendeskLogo]


    const CompanyCards = [{
        id: 1,
        svg: AirbnbLogo,
        content: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies",
        subcontext: "Leila Khoury, CEO",
    },
    {
        id: 2,
        svg: UpworkLogo,
        content: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies",
        subcontext: "Leila Khoury, CEO",
    },{
        id: 3,
        svg: AmazonLogo,
        content: "We are nost efficient and reliable souce of hiring perocess and ",
        subcontext: "Leila Khoury, CEO",
    },{
        id: 4,
        svg: GoogleLogo,
        content: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies",
        subcontext: "Leila Khoury, CEO",
    },]

    const BenefitCardsArray = [{
        id: 1,
        img: wifiIcon,
        title: "Detailed analytics",
        desription: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies",
        color: "wifi-color"
    },{
        id: 2,
        img: zoomIcon,
        title: "Zoom integration",
        desription: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies",
        color: "zoom-color"
    },
    {
        id: 3,
        img: smartIcon,
        title: "Smart testing",
        desription: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies",
        color: "smart-color"
    },
    {
        id: 4,
        img: userIcon,
        title: "User Rating",
        desription: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies",
        color: "user-color"
    },
]
    return (
        <>

            <section className="top-[50px] overflow-hidden bg-gradient-to-b from-[#DEEBDC] to-[#FBF3E5]">
                <h1 className="font-bold font-readex-pro text-2xl text-black-1 text-center ">Let’s <span className="text-green-2">boost up</span><br />
                    your hiring process</h1>
                <p className="text-center text-grey-1 my-[30px] font-readex-pro">We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies</p>
                <div className="flex flex-col mx-auto items-center gap-4 mb-[30px]">
                    <button className="bg-seBlack-1 text-white text-xs font-bold font-readex-pro rounded-[12px] px-5 py-4 w-[330px]">Start hiring</button>
                    <button className="bg-white text-grey-1 text-xs font-bold font-readex-pro rounded-[12px] px-5 py-[14px] border-[1px] border-[#D4D7DF] w-[330px]">Find a job</button>
                </div>
                <div className="relative w-[428px] h-[469px] bg-[url('./assets/ballon.png')] bg-no-repeat bg-center bg-contain">
                    <img
                        src={employers}
                        className="absolute object-contain top-[85%] -translate-y-1/2"
                        style={{ left: "-10px" }}
                        alt="Employers"
                    />
                </div>
            </section>
            <section className="bg-[#FBF3E5] font-readex-pro">
                <h2 className="font-bold text-seBlack-1 text-2xl text-center">With Developli, hiring is<br /><span className="text-green-2">easy-peasy</span>,lemon <br />squeezy</h2>
                <div className="flex flex-col mt-[30px] gap-4 items-center">
                    <BenefitCard Benefit={{ id: 1, title: "Post your job", text: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies" }} />
                    <BenefitCard Benefit={{ id: 2, title: "Manage applicants", text: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies" }} />
                    <BenefitCard Benefit={{ id: 3, title: "Easily find quality matches", text: "We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies" }} />
                </div>
            </section>
            <section className="font-readex-pro bg-[#B1DFC9] overflow-x-hidden">
                <div className="bg-[url('./assets/bgVector.svg')] bg-no-repeat bg-contain flex flex-col px-5">
                    <img src={logo} alt="logo"  className="max-w-[130px] mb-[38px] mt-[34px]"/>
                    <div className="flex flex-col gap-5 mb-[30px]">
                        <h2 className="font-bold text-seBlack-1 text-2xl">Powered By<br />Developli Platform</h2>
                        <p className="text-seBlack-1 opacity-60 text-sm ">We are offering an alternative route towards the traditional hiring process. What do we want in return? Sign up and leave the rest to us.</p>
                    </div>
                    <button className="px-5 py-[14px] bg-[#F6F8F9] rounded-[12px] w-[335px] text-[#7F879E] mb-[44px] text-[12px]">Get started</button>
                    <img src={website} alt="" className="translate-x-[50px] "/>
                </div>
            </section>
            <section className="font-readex-pro overflow-x-hidden bg-[#FBF3E5] flex flex-col items-center px-5">
                <div className="my-[50px] flex flex-col gap-[30px] items-center text-center">
                <h2 className="font-bold text-2xl text-seBlack-1">A world o<span className="text-green-2">f opportunities</span></h2>
                <p className="text-[#7F879E] text-sm">We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies</p>
                </div>
                <div className="gap-5 flex flex-col">
                {BenefitCardsArray.map((card) => <BenefitCards key={card.id} Benefit={{...card}} />)}  
                </div>
            </section>
            <section>
            <div className="my-[50px] flex flex-col gap-[30px] items-center text-center">
                <h2 className="font-bold text-2xl text-seBlack-1">A world o<span className="text-green-2">f opportunities</span></h2>
                <p className="text-[#7F879E] text-sm">We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies</p>
                </div>
                <div className="flex flex-col items-center gap-[25px] ">
                    {CompanyCards.map((card) => <CompanyCard key={card.id} CompanyCards={{...card}}/> )}
                </div>
                <div className="">
                <marquee  className="flex mt-[45px] mb-[50px]">
                    {LogosArray.map((items, index) => (
                        <img key={index} src={items} className="inline-flex ml-5"/>
                    ))}
                </marquee>
                </div>
            </section>
            <section className="font-readex-pro">
                <div className="bg-[#B6DAFF] mx-5 flex flex-col items-center rounded-[20px] gap-[50px] pt-[84px] mb-[50px]">
                    <h2 className="text-2xl text-seBlack-1 font-bold">Hire your<br />
                    dream team today</h2>
                    <button className="font-bold text-white py-[15px] flex gap-2 bg-seBlack-1 rounded-[10px] px-[75px]">Post a job
                        <img src={ArrowRight} alt="" />
                    </button>
                    <img src={Woman} alt="" />
                </div>
            </section>
        </>
    )
}

export default Employers
