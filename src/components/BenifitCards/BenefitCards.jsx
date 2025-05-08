const BenefitCard = ({Benefit}) =>  {
    return (
        <div className="bg-white  flex flex-col gap-5 font-readex-pro rounded-[30px] px-[26px] py-[36px] max-w-[335px]">
            <img src={Benefit.img} className="max-w-[48px] max-h-[48px]" alt="" />
            <h3 className={`font-bold text-[18px] text-${Benefit.color}`}>{Benefit.title}</h3>
            <p className="opacity-80 text-[14px] text-seBlack-1">{Benefit.desription}</p>
        </div>
    )
}

export default BenefitCard;