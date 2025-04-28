import employers from "../src/assets/peoplegroup.png"
import BenefitCard from "../src/components/BenefitCard/BenefitCard"
import logo from "../src/assets/seBlack1Logo.svg"
import website from "../src/assets/website.png"
const Employers = () => {
    return (
        <>

            <section className="container top-[50px] overflow-hidden bg-gradient-to-b from-[#DEEBDC] to-[#FBF3E5]">
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
        </>
    )
}

export default Employers
