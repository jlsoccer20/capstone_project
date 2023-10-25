export default function Button({ children, classes, handleClick, type }) {
  return (
    <button type={type} onClick={handleClick} className={`btn ${classes}`}>
      {children}
    </button>
  );
}
