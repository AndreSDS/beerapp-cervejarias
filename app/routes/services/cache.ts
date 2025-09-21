import Redis from 'ioredis';

export const cache = new Redis("rediss://default:ARyhAAImcDJiZjI1OTI0MzY3MmY0MDliODA1OTZhZTg4Mzc3ZmYxZXAyNzMyOQ@neat-guppy-7329.upstash.io:6379");
export const timeToLeave = 60 * 60 * 24; // 24 hours