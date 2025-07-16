import { forwardRef, useEffect } from "react";
import ModalProductList from "./ModalProductList";
import Button from "./ui/Button";

const baseImagePath = import.meta.env.BASE_URL;

const BackThisProjectModal = forwardRef(({ onClose }, ref) => {
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const handleClickOutside = (event) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!isInDialog) {
        onClose?.();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    dialog.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      dialog.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      className="max-w-2xl max-md:w-[90vw] mx-auto my-auto w-full max-h-[90vh] overflow-y-auto rounded-lg p-0 backdrop:bg-black/10"
    >
      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-black">Back this project</h3>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <img
              src={`${baseImagePath}/icon-close-modal.svg`}
              alt="Close modal"
            />
          </Button>
        </div>
        <div className="mb-6">
          <p className="text-Gray-500 font-medium">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        <ModalProductList onClose={onClose} />
      </div>
    </dialog>
  );
});

BackThisProjectModal.displayName = "BackThisProjectModal";

export default BackThisProjectModal;
