import htttp_res from "../htttp_res";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Table } from "react-bootstrap";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.saveCategories = this.saveCategories.bind(this);
    this.editCategories = this.editCategories.bind(this);
    this.state = {
      show: false,
      id: null,
      name: "",
      categories: [],
    };
  }
  // modal handler
  handleClose = () => {
    this.setState({ show: false });
    console.log(this.state.show);
  };

  handleShow = () => {
    this.setState({ show: true });
    console.log(this.state.show);
  };
  //
  retrieveCategoriess() {
    htttp_res
      .get("/categories/list")
      .then((response) => {
        const categories = response.data;
        this.setState({ categories: categories.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  deleteCategoriess(id) {
    htttp_res
      .get("/categories/delete/" + id)
      .then((response) => {
        const res = response.data;
        console.log(res.message);
        this.retrieveCategoriess();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  componentDidMount() {
    this.retrieveCategoriess();
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onEditName(id) {
    htttp_res
      .get("/categories/find/" + id)
      .then((response) => {
        const categories = response.data;
        this.setState({ name: categories.data.name, id: categories.data.id });
        this.handleShow();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  saveCategories() {
    var data = {
      name: this.state.name,
    };

    htttp_res
      .post("/categories/save", data)
      .then((response) => {
        const res = response.data;
        if (res.status === true) {
          console.log(res.message);
          this.retrieveCategoriess();
          this.setState({
            name: "",
          });
          this.handleClose();
        } else {
          console.log(res.error);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
  editCategories() {
    var data = {
      name: this.state.name,
    };

    htttp_res
      .post("/categories/save/" + this.state.id, data)
      .then((response) => {
        const res = response.data;
        console.log(res.message);
        this.retrieveCategoriess();
        this.setState({
          name: "",
          id: null,
        });
        this.handleClose();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="row m-2">
        <div className="col-sm-8">
          <Table className="" striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.categories.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm font-base m-1"
                      type="button"
                      onClick={() => {
                        this.onEditName(item.id);
                      }}
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                    <button
                      className="btn btn-danger btn-sm font-base m-1"
                      onClick={() => {
                        this.deleteCategoriess(item.id);
                      }}
                      type="button"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="col-sm-4">
          <Button variant="primary" onClick={this.handleShow}>
            Launch modal
          </Button>
          <Modal show={show} onHide={this.handleClose}>
           
            <Modal.Body>
              <form action="">
                <div className="row">
                  <input type="hidden" name="id" id="id" />
                  <div className="col-md-12 mb-3">
                    <label className="mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control "
                      required
                      placeholder="Enter name"
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary "
                    data-dismiss="modal"
                    onClick={this.editCategories}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-success m-2"
                    id="Category_form_btn"
                    onClick={this.saveCategories}
                  >
                    Add new
                  </button>
                </div>
              </form>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Categories;
