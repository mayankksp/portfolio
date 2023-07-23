import { Icon } from '@iconify/react';
import { rupeeFormat } from '@/utils/headerUtils';

const TimeDisplay = ({ timeLeft, label }) => (
    <div className="rounded-sm bg-aliceblue overflow-hidden flex flex-row py-[0.25rem] px-[0.44rem] items-start justify-start">
        <div>{timeLeft ? timeLeft[label] : null}{label.charAt(0).toUpperCase()}</div>
    </div>
);

const OfferBanner = ({ discountAmt, timeLeft, couponCodeLink }) => {
    return (
        <div className="text-[0.88rem] text-aliceblue font-noto-sans h-fit">
            <div className="bg-gray-200 [backdrop-filter:blur(64px)] h-[6rem] md:h-[4.24rem] lg:h-[3.24rem] flex justify-center">
                <div className="bg-red flex flex-col md:flex-row md:items-center md:justify-center justify-center md:gap-[4rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                        <div className="font-semibold">Get ₹{rupeeFormat(discountAmt)} fee waiver</div>
                        <div className="flex flex-row items-center justify-start">
                            <a href={couponCodeLink} className="no-underline text-aliceblue"><span className="hidden md:inline">click </span><span className="visible md:hidden">tap </span>here to redeem the code</a>
                            <Icon className="hidden md:flex" icon="ep:arrow-up-bold" rotate={1} />
                        </div>
                    </div>
                    <div className="ml-8 mt-2 md:mt-0 flex flex-row items-center justify-start gap-[0.63rem]">
                        <div>offer ends in</div>
                        <div className="flex flex-row items-center justify-start gap-[0.5rem] text-gray-200">
                            <TimeDisplay timeLeft={timeLeft} label="days" />
                            <TimeDisplay timeLeft={timeLeft} label="hours" />
                            <TimeDisplay timeLeft={timeLeft} label="minutes" />
                            <TimeDisplay timeLeft={timeLeft} label="seconds" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OfferBanner;