const BenefitCard = ({Benefit}) =>  {
    return (
        <div className="bg-white  flex flex-col gap-5 font-readex-pro rounded-[30px] px-[26px] py-[36px] max-w-[335px]">
            <span className="border-[1.4px] border-seBlack-1 rounded-full max-w-[40px] max-h-[40px]  min-h-[40px] min-w-[40px] flex items-center justify-center font-bold">{Benefit.id}</span>
            <h3 className="font-bold text-[18px] text-seBlack-1">{Benefit.title}</h3>
            <p className="opacity-80 text-[14px] text-seBlack-1">{Benefit.text}</p>
        </div>
    )
}

export default BenefitCard