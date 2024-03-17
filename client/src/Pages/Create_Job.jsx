import React, { useState } from "react";
import Input from "../Components/Input";
import TextField from "../Components/TextField";
import CalendarInput from "../Components/CalenderInput";
const handleChange = (e) => {
  setText(e.target.value);
};
const Create_Job = () => {
  const [text, setText] = useState("");
  const [epochTime, setEpochTime] = useState(0);

  const handleEpochChange = (epoch) => {
    setEpochTime(epoch);
  };
  return (
    <div className="Create_Job">
      <h3>Create new job Post</h3>
      <p>lets get started</p>
      <form action="" className="Create_Job-form">
        <div className="Create_job-grid">
          <div>
            <div className="form-group">
              <Input
                label="Company_name"
                type="text"
                placeholder="Company"
              ></Input>
            </div>
            <div className="form-group">
              <Input label="Role" type="text" placeholder="Role"></Input>
            </div>
            <div className="form-group">
              <Input
                label="Location"
                type="text"
                placeholder="Location"
              ></Input>
            </div>
            <div className="form-group">
              <TextField
                label="Your Label"
                value={text}
                onChange={handleChange}
                placeholder="Enter your text here"
                description="This is a larger description providing more details about the input field."
              />
            </div>
          </div>
          <div>
            <div className="form-group">
              <Input
                label="SkillsRequired"
                type="text"
                placeholder="SkillsRequired"
              ></Input>
            </div>
            <div className="form-group">
              <Input
                label="Experience Required"
                type="text"
                placeholder="Experience Required"
              ></Input>
            </div>
            <div className="form-group">
              <Input
                label="CreateBy"
                type="text"
                placeholder="CreateBy"
              ></Input>
            </div>
            <div className="form-group">
              <CalendarInput label="Select Date" onChange={handleEpochChange} />
            </div>
          </div>
        </div>
        <button className="btn Create_Job--btn">Submit</button>
      </form>
    </div>
  );
};

export default Create_Job;
