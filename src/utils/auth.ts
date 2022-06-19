import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { config } from './configs'

class Auth {
  validate(req: Request, res: Response, next: NextFunction) {
    const token: any = req.headers['x-access-token']

    if(token) {
      try {
        jwt.verify(token, config.secret)
        return next()
      } catch (error: any) {
        return res.status(403).send({
          message: error?.message
        })
      }
    }

    return res.status(401).send({
      message: 'Unauthorized'
    })
  }
}

export const auth = new Auth()