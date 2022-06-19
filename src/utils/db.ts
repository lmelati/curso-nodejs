import mongoose from 'mongoose'

class Databse {
  private DB_URL = 'mongodb://mongodb:27017/db_portal'

  createConnection() {
    mongoose.connect(this.DB_URL)
  }
}

export default Databse