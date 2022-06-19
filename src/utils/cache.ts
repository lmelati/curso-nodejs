import mongoose from 'mongoose';
import { createClient } from 'redis'

type RedisClient = ReturnType<typeof createClient>

const redisURL = 'redis://127.0.0.1:6379'
// const client< = createClient(redisURL)