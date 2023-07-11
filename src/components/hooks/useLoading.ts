import { create } from 'zustand'

interface LoadingProps {
  loadingEdukasi: boolean
  setLoadingEdukasi: (loadingEdukasi: boolean) => void

  loadingBerita: boolean
  setLoadingBerita: (loadingBerita: boolean) => void

  loadingFasilitas: boolean
  setLoadingFasilitas: (loadingFasilitas: boolean) => void
}

const useLoading = create<LoadingProps>((set) => ({
  loadingEdukasi: false,
  setLoadingEdukasi: (loadingEdukasi: boolean) => set({ loadingEdukasi }),

  loadingBerita: false,
  setLoadingBerita: (loadingBerita: boolean) => set({ loadingBerita }),

  loadingFasilitas: false,
  setLoadingFasilitas: (loadingFasilitas: boolean) => set({ loadingFasilitas })
}))

export default useLoading