import React from "react";

const LoginRegisterForm = ({
  email,
  setEmail,
  password,
  setPassword,
  buttonName,
  handleSubmit,
}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          onChange={(text) => setEmail(text.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(text) => setPassword(text.target.value)}
          value={password}
        />
      </div>
      <div className="pt-4">
        <button className="btn btn-primary" onClick={handleSubmit}>
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
