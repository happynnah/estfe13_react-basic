import { useState } from "react";

function UpdateArticle({ title, desc, onSubmit, level }) {
  console.log("UpdateArticle render");

  const [content, setContent] = useState({
    title: title || "",
    desc: desc || "",
    level: level !== undefined && level !== null ? level : 1,
  });

  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);

  // const handleTitleChange = (e) => {
  //   setNewTitle(e.target.value);
  // };
  // const handleDescChange = (e) => {
  //   setNewDesc(e.target.value);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          const submittedLevel = content.level == "" ? 1 : Number(content.level);
          onSubmit(content.title, content.desc, Number(content.level));
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" value={content.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="level">난이도: </label>
          <input type="number" name="level" id="level" min="1" value={content.level} onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default UpdateArticle;
