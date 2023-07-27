"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Test"
        description="Test Description"
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
