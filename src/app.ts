import express from 'express'
import cors from 'cors'

import Databse from './utils/db'

import { router } from './router'

export class App {
  public server: express.Application
  // private _db: Databse

  constructor() {
    this.server = express()

    // this._db = new Databse()
    // this._db.createConnection()

    this.middleware()
    this.router()
  }

  private cors() {
    const options: cors.CorsOptions = {
      origin: '*'
    }

    this.server.use(cors(options))
  }

  private middleware() {
    this.cors()
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: false }))
  }

  private router() {
    this.server.use(router)
  }
}