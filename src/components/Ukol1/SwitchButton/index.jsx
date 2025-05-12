import './style.css';



export const SwitchButton = ({ label , onSwitch, lightOn}) => {
  return (
    <button className="switch-button
     switch-button--on" onClick={(onSwitch)}>
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
