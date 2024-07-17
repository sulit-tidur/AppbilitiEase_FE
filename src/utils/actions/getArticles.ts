'use server'

import axios from 'axios'
import { Article } from '../types'
import data from '@/constants/articles.json'

interface GetArticlesParams {
  id?: number
  title?: string
  tag?: string
}

const getArticles = async (params: GetArticlesParams = {}) => {
  let articles = data
  const { id, title, tag } = params
  if (id) {
    articles = articles.filter((item) => item.id == id)
  }
  if (title) {
    articles = articles.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()))
  }
  if (tag) {
    articles = articles.filter((item) => item.tag == tag)
  }
  return articles as Article[]
  // let queries = ''
  // queries += id ? '&id=' + id : ''
  // queries += title ? '&title=' + title : ''
  // queries += tag ? '&tag=' + tag : ''

  // try {
  //   const { data } = await axios.get(
  //     `${process.env.NEXT_PUBLIC_BE_URL}/api/article?${queries}`
  //   )
  //   return data.data as Article[]
  // } catch (err) {
  //   return []
  // }
}

export default getArticles