import { IProgram } from 'interface/IProgram'
import { atom } from 'recoil'
import { ObjectFlags } from 'typescript'

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
export const useLatestList = atom<IProgram[]>({
    key: 'useLatestList',
    default: []
})
export const useOnTheArirtList = atom<IProgram[]>({
    key: 'useOnTheArirtList',
    default: []
})
export const useTopRatedList = atom<IProgram[]>({
    key: 'useTopRatedList',
    default: []
})
export const usePlayingNowList = atom<IProgram[]>({
    key: 'usePlayingNowList',
    default: []
})
export const useSimilarMoviesList = atom<IProgram[]>({
    key: 'useSimilarMoviesList',
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
export const useDetailsState = atom<IProgram>({
    key: 'useDetailsState',
    default: {
        backdrop: '',
        data: '',
        id: 0,
        genre_ids: [],
        genres: [{
            id: 0,
            name: ''
        }],
        overview: '',
        poster_path: '',
        backdrop_path: '',
        release_date: '',
        title: '',
        vote_average: 0,
        runtime: 0,
        budget: 0,
        revenue: 0
    }
})