const API_URL: string = process.env.NODE_ENV === "production" ? "" : "http://localhost:3001"

export { API_URL }