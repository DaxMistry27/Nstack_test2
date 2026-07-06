import { ID } from "../types/common";

export interface IRepository<T> {
    add(item: T): void;
    getAll(): T[];
    getById(id: ID): T | undefined;
    update(id: ID, item: Partial<Omit<T, "id">>): void;
    remove(id: ID): void;
}