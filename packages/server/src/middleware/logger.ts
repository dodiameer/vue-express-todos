import { NextFunction, Request, Response } from "express";

const logger = (req: Request, _res: Response, next: NextFunction) => {
  const { url, ip } = req
  console.log(`[SERVER] ${url} - ${ip}`)
  return next()
}

export default logger