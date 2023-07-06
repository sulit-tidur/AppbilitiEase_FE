import { RefObject } from "react";
import { create } from "zustand"

interface LandingRefProps {
  nearestFacilityRef: RefObject<HTMLElement> | null
  setNearestFacilityRef: (e: RefObject<HTMLElement>) => void

  educationNewsRef: RefObject<HTMLElement> | null
  setEducationNewsRef: (e: RefObject<HTMLElement>) => void
}

const useLandingRef = create<LandingRefProps>((set) => ({
  nearestFacilityRef: null,
  setNearestFacilityRef: (e: RefObject<HTMLElement>) => set({ nearestFacilityRef: e }),

  educationNewsRef: null,
  setEducationNewsRef: (e: RefObject<HTMLElement>) => set({ educationNewsRef: e })
}))

export default useLandingRef