const CompanyCard = ({CompanyCards}) =>{
    return (
        <div className="bg-none border-[0.7px] rounded-[21px] max-w-[250px] max-h-[280px] px-5 py-10 flex flex-col gap-8 ">
            <span className=""><img src={CompanyCards.svg} alt="" /></span>
            <p className="text-sm opacity-80 text-seBlack-1">{CompanyCards.content}</p>
            <p className="text-xs opacity-50 text-seBlack-1">{CompanyCards.subcontext}</p>
        </div>
    )
}

export default CompanyCard;