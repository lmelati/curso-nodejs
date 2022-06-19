import mongoose from "mongoose";
import newsSchema from "../models/news.schema";

export default mongoose.model('news', newsSchema)