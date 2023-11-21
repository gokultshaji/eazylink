import React, { useEffect, useState } from "react";
import firebaseDb from "../firebase";
import { Link } from "react-router-dom";

const ListRecord = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12">
          <div className="jumbotron">
            <img
              src="https://i.postimg.cc/63sDz11r/5eab87-f3ba73b98752453c9a5036b05eb1bf60-mv2-removebg-preview.png"
              alt=""
              style={{ height: 80 }}
            />
            <h1 className="display-4">
              <span style={{ color: "green" }}>E</span>azy Link
            </h1>
            <h4>Empower your connections with precision and ease.</h4>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].fullName}</td>
                    <td>{data[id].mobile}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].address}</td>
                    <td>
                      <Link to={`/update/${id}`}>
                        <button className="btn btn-primary btn-sm mr-2">
                          <i className="fas fa-pencil-alt" /> Edit
                        </button>
                      </Link>
                      <button
                        className="btn btn-danger btn-sm mr-2"
                        onClick={() => onDelete(id)}
                      >
                        <i className="fas fa-trash-alt" /> Delete
                      </button>
                      <Link to={`/view/${id}`}>
                        <button className="btn btn-info btn-sm">
                          <i className="fas fa-eye" /> View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRecord;
