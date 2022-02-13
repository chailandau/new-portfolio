const Tool = props => {
  return (
    <div className="tool-indiv">
      {props.icon}
      <span>{props.name}</span>
    </div>
  );
};

export default Tool;
