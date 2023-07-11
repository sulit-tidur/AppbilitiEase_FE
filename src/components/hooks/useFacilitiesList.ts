import { Facility } from '@/utils/types';
import { create } from 'zustand';

interface FacilitiesListProps {
  facilities: Facility[] | null
  setFacilities: (facilities: Facility[]) => void
}

const useFacilitiesList = create<FacilitiesListProps>((set) => ({
  facilities: null,
  setFacilities: (facilities: Facility[]) => set({ facilities })
}))

export default useFacilitiesList