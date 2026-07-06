import { Member } from "../models/Member";
import { GenericRepository } from "../repositories/GenericRepository";
import { ID } from "../types/common";

export class MemberService {

    private repository = new GenericRepository<Member>();

    registerMember(member: Member): void {
        this.repository.add(member);
    }

    getAllMembers(): Member[] {
        return this.repository.getAll();
    }

    getMemberById(id: ID): Member | undefined {
        return this.repository.getById(id);
    }
}