import "./Create.css";

export default function Create() {
  return (
    <div className="create-post">
        <div className="container">
            <h4>افکار خود را با دیگران به اشتراک بگذارید.</h4>
            <form>
              <div className="input-container">
                <label>افزودن عکس</label>
                <input type="file" />
              </div>
              <div className="input-container">
                <label>عنوان</label>
                <input type="fil" />
              </div>
              <div className="input-container">
                <label>متن</label>
                <textarea></textarea>
              </div>
              <div className="input-container">
                <button>ایجاد پست</button>
              </div>
            </form>
        </div>
    </div>
  );
}