import { IRepository } from "../interfaces/IRepository";
import { ID } from "../types/common";

export class GenericRepository<T extends { id: number }>
    implements IRepository<T> {

    protected items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    getById(id: ID): T | undefined {
        return this.items.find(item => item.id === id);
    }

    update(id: ID, data: Partial<Omit<T, "id">>): void {
        const item = this.getById(id);

        if (!item) {
            throw new Error("Item not found");
        }

        Object.assign(item, data);
    }

    remove(id: ID): void {
        const index = this.items.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error("Item not found");
        }

        this.items.splice(index, 1);
    }
}