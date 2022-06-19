import { Router } from 'express'

import { auth } from './utils/auth'
import { upload } from './utils/upload'

import { newsController } from './controllers/news.controller'

const router: Router = Router()

// Routes
router.get('/', (req, res) => res.send({ status: 'ok' }))

router.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200)
  } catch (error: any) {
    console.log('error', error?.message)
  }
})

// router.use(auth.validate)

router.get('/api/news', newsController.get)
router.get('/api/news/:id', newsController.getById)
router.post('/api/news', newsController.create)
router.put('/api/news/:id', newsController.update)
router.delete('/api/news/:id', newsController.delete)

export { router }