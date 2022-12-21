import { IMovieList } from 'interface/IMovieList'
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

export const useMovie = atom<IMovieList>({
    key: 'useMovie',
    default: {
        backdrop:'',
        data:'',
        id: 0,
        genre_ids: [],
        overview:'',
        poster_path: '',
        title:'',
        vote_average: 0
    }
})

export const useMovieList = atom<IMovieList[]>({
    key: 'useMovieList',
    default: []
})