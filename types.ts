import { Server, Profile, Member } from "@prisma/client"

export type ServerwithMembersWithProfiles = Server & {
    members: (Member & {profile: Profile}) [];
};