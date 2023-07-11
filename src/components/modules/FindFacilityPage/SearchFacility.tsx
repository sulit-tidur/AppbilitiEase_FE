'use client'

import useFacilitiesList from '@/components/hooks/useFacilitiesList'
import SearchSection from '../SearchSection'
import getFacilities from '@/utils/actions/getFacilities'
import useLoading from '@/components/hooks/useLoading'

const SearchFacility = () => {
  const facilitesList = useFacilitiesList()
  const { setLoadingFasilitas } = useLoading()

  const handleSearch = async (value: string) => {
    setLoadingFasilitas(true)

    const facilities = await getFacilities({ location: value })
    facilitesList.setFacilities(facilities)

    setLoadingFasilitas(false)
  }

  return (
    <SearchSection placeholder='Cari fasilitas..' action={handleSearch} />
  )
}

export default SearchFacility