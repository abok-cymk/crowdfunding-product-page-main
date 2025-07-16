import { useRef } from "react";
import Button from "../components/ui/Button";
import BackThisProjectModal from "../components/BackThisProjectModal";

const baseImagePath = import.meta.env.BASE_URL;

function Intro() {
  const modalRef = useRef();

  const handleBackProject = () => {
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <section
        id="get-started"
        className="relative mx-auto lg:max-w-3xl md:max-w-2xl -translate-y-1/3 bg-white rounded-md shadow px-8 py-10 w-full"
      >
        <figure className="relative">
          <img
            src={`${baseImagePath}/logo-mastercraft.svg`}
            alt=""
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          />
        </figure>
        <div className="flex flex-col gap-8 pt-4">
          <div className="text-center">
            <h2 className="text-black font-bold text-3xl pb-2">
              Mastercraft Bamboo Monitor Riser
            </h2>
            <p className="text-Gray-500 text-base font-medium">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>
          <div className="flex items-center justify-between max-md:gap-4">
            <Button
              variant="primary"
              type="button"
              className="max-md:w-full py-4 px-6"
              onClick={handleBackProject}
            >
              Back this project
            </Button>
            <Button
              variant="secondary"
              className="relative flex items-center max-md:p-0 py-4"
              type="button"
            >
              <img
                src={`${baseImagePath}/icon-bookmark.svg`}
                alt=""
                className="md:absolute left-0"
              />
              <span className="max-md:hidden pl-12">Bookmark</span>
            </Button>
          </div>
        </div>
      </section>

      <BackThisProjectModal ref={modalRef} onClose={handleCloseModal} />
    </>
  );
}

export default Intro;
