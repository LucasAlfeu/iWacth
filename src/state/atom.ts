import { atom } from 'recoil'

export const useBackdropState = atom<string>({
    key: 'useBackdropState',
    default: ''
})
export const usePosterState = atom<string>({
    key: 'usePosterState',
    default: ''
})

export const useTitleState = atom<string>({
    key: 'useTitleState',
    default: ''
})

export const useOverviewState = atom<string>({
    key: 'useOverviewState',
    default: ''
})
export const useVoteAverageState = atom<string>({
    key: 'useVoteAverageState',
    default: ''
})
export const useReleaseDateState = atom<string>({
    key: 'useReleaseDateState',
    default: ''
})