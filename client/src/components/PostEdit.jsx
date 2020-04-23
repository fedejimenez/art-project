import React from "react";
import axios from "axios";
import "../stylesheets/PostEdit.css";

class PostEdit extends React.Component {
  constructor() {
    super();
    this.state = { title: "", content: "", src: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({
      method: "get",
      url: `/api/posts/${this.props.match.params.id}`,
      headers: { Authorization: token }
    })
      .then(response => {
        this.setState(response.data);
      })
      .catch(error => console.log("error", error));
  }

  handleSubmit(event) {
    event.preventDefault();
    let token = "Bearer " + localStorage.getItem("jwt");
    axios({
      method: "patch",
      url: `/api/posts/${this.state.id}`,
      headers: { Authorization: token },
      data: this.state
    })
      .then(() => {
        this.props.history.push(`/posts/${this.state.id}`);
      })
      .catch(error => console.log("error", error));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    this.props.history.push(`/posts/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit {this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              name="content"
              rows="7"
              value={this.state.content}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <textarea
              name="src"
              rows="1"
              value={this.state.src}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="PostEdit-image">
            <img src={this.state.src} alt="url" />
          </div>
          <div className="PostEdit-buttons btn-group">
            <br></br>
            <button type="submit" className="btn btn-dark">
              Update
            </button>
            <button
              type="button"
              onClick={this.handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostEdit;
