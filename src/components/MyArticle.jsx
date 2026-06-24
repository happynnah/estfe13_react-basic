function MyArticle({ title, desc, level, onChangeMode, onDelete }) {
  console.log("MyArticle render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
      {level != null && (
        <div>
          <label htmlFor="level">난이도: </label>
          <input type="number" id="level" value={level} readOnly />
        </div>
      )}

      {onChangeMode && <button onClick={onChangeMode}>수정</button>}

      {onDelete && <button onClick={onDelete}>삭제</button>}
    </section>
  );
}
export default MyArticle;
