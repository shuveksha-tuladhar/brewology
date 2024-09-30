import "./Modal.css";

export function Modal({ drinkItem, onClose }) {
  return (
    <>
      <div
        className={`modal ${drinkItem ? "show" : ""}`}
        tabIndex="-1"
        aria-labelledby="detailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <h2 className="modal-title fs-3" id="detailModalLabel">
              {drinkItem.title}
            </h2>
            <div className="modal-body">
              <img
                src={drinkItem.image}
                className="modal-image text-dark"
                alt={drinkItem.title}
              />
              <div className="modal-description text-dark fs-6">
                <p>{drinkItem.description}</p>
                <p>Ingredients:</p>
                {drinkItem.ingredients.map((ingredient, index) => 
                  (<li key={index}>{ingredient}</li>))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
