'use server'

import axios from 'axios'
import { Facility } from '../types'
import data from '@/constants/facilities.json'

interface GetFacilitiesParams {
  id?: number
  name?: string
  longitude?: string
  latitude?: string
  location?: string
}

const getFacilities = async (params: GetFacilitiesParams = {}) => {
  let facilities = data
  const { location, id } = params
  if (location) {
    facilities = facilities.filter((item) => item.name.toLowerCase().includes(location.toLowerCase()) || item.location.toLowerCase().includes(location.toLowerCase()))
  }
  if (id) {
    facilities = facilities.filter((item) => item.id == id)
  }
  return facilities as Facility[]
  // const { id, name, longitude, latitude, location } = params
  // let queries = ''
  // queries += id ? '&id=' + id : ''
  // queries += name ? '&name=' + name : ''
  // queries += longitude ? '&longitude=' + longitude : ''
  // queries += latitude ? '&latitude=' + latitude : ''
  // queries += location ? '&location=' + location : ''

  // try {
  //   const { data } = await axios.get(
  //     `${process.env.NEXT_PUBLIC_BE_URL}/api/facility?${queries}`
  //   )
  //   return data.data as Facility[]
  // } catch (err) {
  //   return []
  // }
}

export default getFacilities