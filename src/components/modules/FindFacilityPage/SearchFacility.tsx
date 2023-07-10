'use client'

import useFacilitiesList from '@/components/hooks/useFacilitiesList'
import SearchSection from '../SearchSection'
import getFacilities from '@/utils/actions/getFacilities'

const SearchFacility = () => {
  const facilitesList = useFacilitiesList()

  const handleSearch = async (value: string) => {
    const facilities = await getFacilities({ location: value })
    facilitesList.setFacilities(facilities)
  }

  return (
    <SearchSection placeholder='Cari fasilitas..' action={handleSearch} />
  )
}

export default SearchFacility