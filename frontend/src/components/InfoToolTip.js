function InfoToolTip({ isOpen, onClose, state }) {
  return (
    <div className={
      isOpen
        ? `info-tool-tip info-tool-tip_opened`
        : `info-tool-tip`}>
      <div className="info-tool-tip__container">
        <button
          onClick={onClose}
          className="info-tool-tip__close"
          type="button"
          aria-label="Закрыть">
        </button>
        <div className="info-tool-tip__board">
          <img
            className="info-tool-tip__icon"
            src={state.status ? require('../images/ok-icon.svg').default : require('../images/error-icon.svg').default} />
          <p className="info-tool-tip__message">{state.message}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoToolTip;
