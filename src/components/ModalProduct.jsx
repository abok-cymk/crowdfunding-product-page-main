const ModalProduct = ({ name, pledgeTip = "", amountLeft, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="md:flex items-center gap-3">
          <h3>{name}</h3>
          <p>{pledgeTip}</p>
        </div>
        <div className="max-md:hidden flex items-center gap-2">
          <strong>{amountLeft}</strong>
          <span>left</span>
        </div>
      </div>
      <p>{description}</p>
      <div className="md:hidden flex items-center gap-2">
        <strong>{amountLeft}</strong>
        <span>left</span>
      </div>
    </div>
  );
}

export default ModalProduct;
