import { App } from './app'
import { PORT } from './constants'

new App().server.listen(PORT, () => console.log(`Server started at port: ${PORT}`))