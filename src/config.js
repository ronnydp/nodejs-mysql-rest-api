import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000 //PORT es del servidor
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || ''
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3000 //DB_PORT es de  la base de datos
