'use server'

import axios from 'axios'
import { Article } from '../types'

interface GetArticlesParams {
  id?: number
  title?: string
  tag?: string
}

const getArticles = async (params: GetArticlesParams = {}) => {
  const { id, title, tag } = params
  let queries = ''
  queries += id ? '&id=' + id : ''
  queries += title ? '&title=' + title : ''
  queries += tag ? '&tag=' + tag : ''

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BE_URL}/api/article?${queries}`
    )
    return data.data as Article[]
  } catch (err) {
    return []
  }
}

export default getArticles