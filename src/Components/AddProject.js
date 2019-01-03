import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  };

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert('Title is required');
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {
          this.props.addProject(this.state.newProject);
        }
      );
    }
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" onChange={this.onChange} />
          </div>
          <label>Category</label>
          <br />
          <select ref="category" onChange={this.onChange}>
            {categoryOptions}
          </select>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  category: PropTypes.object,
  addProject: PropTypes.func
};

export default AddProject;
