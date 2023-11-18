import { Weapon, ForgedWeaponsStore } from '../forged_weapon'

const store = new ForgedWeaponsStore()

describe("Forged Weapon Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    
    it('index method should return a list of products', async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    });
});