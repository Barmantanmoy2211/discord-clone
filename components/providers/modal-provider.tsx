"use client";

import { CreateServerModal } from "@/components/models/create-server-modal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/models/invite-model";

export const ModalProvider = () => {
    const [isMounted, setIsMounted ] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
            <InviteModal />
        </>
    )
}