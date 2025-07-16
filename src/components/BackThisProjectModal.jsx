import { usePledge } from "../context/PledgeContext";
import ModalProductList from "./ModalProductList";

const baseImagePath = import.meta.env.BASE_URL;

const BackThisProjectModal = () => {
  const { dispatch } = usePledge();

  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 max-md:w-[90vw] max-md:mx-auto">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-black">Back this project</h3>
          <button
            type="button"
            onClick={handleClose}
            className="cursor-pointer"
          >
            <img
              src={`${baseImagePath}/icon-close-modal.svg`}
              alt="Close modal"
            />
          </button>
        </div>
        <div className="mb-6">
          <p className="text-Gray-500 font-medium">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        <ModalProductList />
      </div>
    </div>
  );
};

BackThisProjectModal.displayName = "BackThisProjectModal";

export default BackThisProjectModal;
