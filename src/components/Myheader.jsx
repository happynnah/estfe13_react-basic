function Myheader({ title, desc, onChangeMode }) {
  return (
    <header>
      <h1
        className="logo"
        onClick={() => {
          onChangeMode();
        }}
      >
        {title}
      </h1>
      <p>{desc}</p>
    </header>
  );
}
export default Myheader;
