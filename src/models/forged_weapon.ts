import Client from '../database';
 
export type Weapon = {
  id: number;
  name: string;
  price: number;
};
 
export class ForgedWeaponsStore {
  async index(): Promise<Weapon[]> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM forged_weapons';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get weapons ${err}`);
    }
  }
 
  async show(id: string): Promise<Weapon> {
    try {
      const sql = 'SELECT * FROM forged_weapons WHERE id=($1)';
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find weapon ${id}. Error: ${err}`);
    }
  }
 
  async create(f: Weapon): Promise<Weapon> {
    try {
      const sql = 'INSERT INTO forged_weapons (id, name, price) VALUES($1, $2, $3) RETURNING *';
      const conn = await Client.connect();
      const result = await conn.query(sql, [f.id, f.name, f.price]);
      const weapon = result.rows[0];
      conn.release();
      return weapon;
    } catch (err) {
      throw new Error(`Could not add new weapon ${f.name}. Error: ${err}`);
    }
  }
}