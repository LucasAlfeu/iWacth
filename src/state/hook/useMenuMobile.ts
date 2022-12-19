import { useRecoilState } from "recoil"
import { useHideBtnMobileState } from "state/atom"

const useMenuMobile = () => {
    const [isOpen, setIsOpen] = useRecoilState(useHideBtnMobileState)
    const btn = document.getElementById('button') as HTMLElement
    const exists = document.body.contains(btn)

    const toggleMenu = (e: React.TouchEvent<HTMLButtonElement>) => {
        setIsOpen(!isOpen)
        !isOpen ? e.currentTarget.setAttribute('aria-expanded', 'true') : e.currentTarget.setAttribute('aria-expanded', 'false')
    }
    return { exists, toggleMenu }
}

export default useMenuMobile