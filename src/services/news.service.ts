import newsRepository from "../repositories/news.repository";

class NewsService {
  async get() {
    return await newsRepository.find({})
  }

  async getById(_id: any) {
    return await newsRepository.findById(_id)
  }

  async create(news: NewsService) {
    return await newsRepository.create(news)
  }

  async update(_id: any, news: NewsService) {
    return await newsRepository.findByIdAndUpdate(_id, news)
  }

  async delete(_id: any) {
    return await newsRepository.findByIdAndRemove(_id)
  }
}

export const newsService = new NewsService()