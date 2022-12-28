import { useRef } from "react"
import { useSetRecoilState } from "recoil"
import { useShowArrowState } from "state/atom"

const useListProgram = () => {
    const setShowArrow = useSetRecoilState(useShowArrowState)

    const showArrows = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault() 
        setShowArrow(true)
    }
    const hideArrows = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault() 
        setShowArrow(false)
    }
    return { showArrows, hideArrows}
}

export default useListProgram