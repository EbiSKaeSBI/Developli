import employers from "../src/assets/peoplegroup.png"
const Employers = () => {
    return (
        <>
            <section className="container top-[50px]">
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
            <section>

            </section>
        </>
    )
}

export default Employers
