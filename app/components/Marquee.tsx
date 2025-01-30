
import Marquee from "react-fast-marquee";

type Props = {}

export default function
    ({ }: Props) {


    const marqueeList = [
        {
            logo: '/img/pairs/pairs-marquee-logo-1.png',
            name: 'DOGE',
            num: +43.23,
            per: '%',
            text: '',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-2.png',
            name: 'DOGE',
            num: +3.23,
            per: '%',
            text: 'DEXT',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-3.png',
            name: 'DOGE',
            num: -399314,
            per: '',
            text: '',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-4.png',
            name: 'DOGE',
            num: 1311615,
            per: '',
            text: 'DEXT',
        },
        {
            logo: '/img/pairs/pairs-marquee-logo-5.png',
            name: 'DOGE',
            num: 1311615,
            per: '',
            text: 'DEXT',
        },
    ]
    return (
        <>
            <Marquee autoFill={true} speed={60} className="marquee flex items-center gap-5 overflow-auto">
                {marqueeList.map((item, index) => (
                    <div className="single flex items-center gap-[6px] mr-2 md:mr-4 lg:mr-5" key={index}>
                        <div className="count py-[1px] px-[4px] bg-[#282B33] rounded-[4px] text-[12px] font-lufga font-normal text-[var(--text--color,#F5F3F5)] text-center leading-normal"># {index + 1}</div>
                        <img src={item.logo} className="w-[20px] h-[20px]" alt="" />
                        <h5 className="text-[12px] md:text-[14px] font-lufga font-normal text-[var(--paragraph,#A6A6A6)] text-center leading-normal">{item.name} </h5>
                        <p style={{ color: item.num >= 0 ? '#14D215' : '#FF2121' }} className="text-[12px] md:text-[14px] font-normal">{item.num} {item.per} {item.text} </p>
                    </div>
                ))}
            </Marquee>
        </>
    )
}