import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea name="" id="" rows="6">
          Type your message here
        </textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
