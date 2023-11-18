import express, { Request, Response } from 'express'
import { ForgedWeaponsStore } from '../models/forged_weapon'

const store = new ForgedWeaponsStore()

const index = async (_req: Request, res: Response) => {
    const weapons = await store.index()
    res.json(weapons)
}

const forged_weapon_routes = (app: express.Application) => {
    app.get('/products, index')
}

export default forged_weapon_routes