"use client"
import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
interface WorkSliderBtnsProps {
    containerStyles: any; // Use any type for containerStyles
    btnStyles: any;       // Use any type for btnStyles
    iconStyles: any;      // Use any type for iconStyles
}
const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div >
    )
}
export default WorkSliderBtns;
