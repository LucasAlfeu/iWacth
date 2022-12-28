import { IProgram } from 'interface/IProgram'
import { atom } from 'recoil'

export const useBackdropState = atom<string>({
    key: 'useBackdropState',
    default: ''
})
export const useIdState = atom<number>({
    key: 'useIdState',
    default: 0
})
export const useOverviewState = atom<string>({
    key: 'useOverviewState',
    default: ''
})
export const usePosterState = atom<string>({
    key: 'usePosterState',
    default: ''
})
export const useReleaseDateState = atom<string>({
    key: 'useReleaseDateState',
    default: ''
})
export const useTitleState = atom<string>({
    key: 'useTitleState',
    default: ''
})

export const useVoteAverageState = atom<string>({
    key: 'useVoteAverageState',
    default: ''
})
export const useHideBtnMobileState = atom<boolean>({
    key: 'useHideBtnMobileState',
    default: false
})
export const useFavoriteProgram = atom<IProgram[]>({
    key: 'useFavoriteProgram',
    default: []
})

export const useMovieList = atom<IProgram[]>({
    key: 'useMovieList',
    default: []
})

export const useUrlState = atom<string>({
    key: 'useUrlState',
    default: ''
})

export const useShowArrowState = atom<boolean>({
    key: 'useShowArrowState',
    default: false
})