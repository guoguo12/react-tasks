var initialData = [{ title: "Wash the dishes", id: 1 }, { title: "Mow the lawn", id: 2 }];

var TasksList = React.createClass({
  displayName: "TasksList",

  getInitialState: function () {
    return { taskData: initialData };
  },
  addTask: function (text) {
    this.setState({
      taskData: this.state.taskData.concat([{ title: text, id: this.state.taskData.length + 1 }])
    });
  },
  render: function () {
    var items = this.state.taskData.map(function (datum) {
      return React.createElement(TaskItem, { title: datum.title, key: datum.id });
    });
    return React.createElement(
      "div",
      { className: "list" },
      "Here are your tasks for today:",
      React.createElement(
        "div",
        { className: "task-box" },
        items
      ),
      React.createElement(TaskInput, { handleNewTask: this.addTask })
    );
  }
});

var TaskItem = React.createClass({
  displayName: "TaskItem",

  getInitialState: function () {
    return { done: false };
  },
  toggleCompleted: function () {
    this.setState({ done: !this.state.done });
  },
  render: function () {
    return React.createElement(
      "div",
      { className: this.state.done ? "task-item completed" : "task-item" },
      React.createElement("input", { type: "checkbox", onChange: this.toggleCompleted }),
      React.createElement(
        "span",
        { className: "task-text" },
        this.props.title
      )
    );
  }
});

var TaskInput = React.createClass({
  displayName: "TaskInput",

  getInitialState: function () {
    return { text: '' };
  },
  render: function () {
    return React.createElement("input", { type: "text", value: this.state.text, placeholder: "Add a task",
      onChange: this.handleChange, onKeyDown: this.handleSubmit, autoFocus: true });
  },
  handleChange: function (e) {
    this.setState({ text: e.target.value.substring(0, 60) });
  },
  handleSubmit: function (e) {
    if (e.keyCode === 13) {
      this.props.handleNewTask(e.target.value);
      this.setState({ text: '' });
    }
  }
});

ReactDOM.render(React.createElement(TasksList, null), $('#tasks-list').get(0));