import { Request, Response } from 'express'
import HttpStatus from 'http-status'

import { newsService } from "../services/news.service";

import Helper from '../utils/helper'

class NewsController {
  async get(req: Request, res: Response) {
    try {
      const news = await newsService.get()
      Helper.sendResponse(res, HttpStatus.OK, news)
    } catch (error) {
      console.error.bind(console, `Error: ${error}`)
    }
  }

  async getById(req: Request, res: Response) {
    const _id = req.params.id

    try {
      const news = await newsService.getById(_id)
      Helper.sendResponse(res, HttpStatus.OK, news)
    } catch (error) {
      console.error.bind(console, `Error: ${error}`)
    }
  }

  async create(req: Request, res: Response) {
    const vm = req.body

    try {
      await newsService.create(vm)
      Helper.sendResponse(res, HttpStatus.OK, "Notícia cadastrada com sucesso")
    } catch (error) {
      console.error.bind(console, `Error: ${error}`)
    }
  }

  async update(req: Request, res: Response) {
    const _id = req.params.id
    const vm = req.body

    try {
      await newsService.update(_id, vm)
      Helper.sendResponse(res, HttpStatus.OK, "Notícia atualizada com sucesso")
    } catch (error) {
      console.error.bind(console, `Error: ${error}`)
    }
  }

  async delete(req: Request, res: Response) {
    const _id = req.params.id

    try {
      await newsService.delete(_id)
      Helper.sendResponse(res, HttpStatus.OK, 'Notícia removida com sucesso')
    } catch (error) {
      console.error.bind(console, `Error: ${error}`)
    }
  }
}

export const newsController = new NewsController()