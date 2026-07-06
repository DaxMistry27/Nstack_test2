import { MembershipType } from "../enums/MembershipType";
import { ID } from "../types/common";

export class Member {
    constructor(
        public readonly id: ID,
        public name: string,
        public email: string,
        public membershipType: MembershipType
    ) {}
}