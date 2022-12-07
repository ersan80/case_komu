import React, { useState } from "react";

const Modal = ({ postData }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    policyNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      id: Math.ceil(Math.random() * 10000),
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="name"
                    onChange={handleChange}
                    name="name"
                    value={form.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    required
                    className="form-control"
                    id="phone"
                    onChange={handleChange}
                    name="phone"
                    value={form.phone}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="policyNo" className="form-label">
                    Policy No
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    id="policyNo"
                    name="policyNo"
                    onChange={handleChange}
                    value={form.policyNo}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
