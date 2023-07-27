"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  // to prevent the hydration error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
