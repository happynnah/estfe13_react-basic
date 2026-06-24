function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const levelValue = levelRawValue === "" ? 1 : Number(levelRawValue);
          onSubmit(e.target.title.value, e.target.desc.value, Number(e.target.level.value));
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="level">난이도</label>
          <input type="number" name="level" id="level" min="1" defaultValue="1" />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
export default CreateArticle;
