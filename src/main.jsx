var initialData = [
  {title: "Wash the dishes", id: 1},
  {title: "Mow the lawn", id: 2}
];

var TasksList = React.createClass({
  getInitialState: function() {
    return {taskData: initialData};
  },
  addTask: function(text) {
    this.setState({
      taskData: this.state.taskData.concat([{title: text, id: this.state.taskData.length + 1}])
    });
  },
  render: function() {
    var items = this.state.taskData.map(function(datum) {
      return (
        <TaskItem title={datum.title} key={datum.id} />
      );
    });
    return (
      <div className="list">
        Here are your tasks for today:
        <div className="task-box">
          {items}
        </div>
        <TaskInput handleNewTask={this.addTask} />
      </div>
    );
  }
});

var TaskItem = React.createClass({
  getInitialState: function() {
    return {done: false};
  },
  toggleCompleted: function() {
    this.setState({done: !this.state.done}); 
  },
  render: function() {
    return (
      <div className={this.state.done ? "task-item completed" : "task-item"}>
        <input type="checkbox" onChange={this.toggleCompleted} />
        <span className="task-text">{this.props.title}</span>
      </div>
    );
  }
});

var TaskInput = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },
  render: function() {
    return (
      <input type="text" value={this.state.text} placeholder="Add a task" 
        onChange={this.handleChange} onKeyDown={this.handleSubmit} autoFocus />
    );
  },
  handleChange: function(e) {
    this.setState({text: e.target.value.substring(0, 60)});
  },
  handleSubmit: function(e) {
    if (e.keyCode === 13) {
      this.props.handleNewTask(e.target.value);
      this.setState({text: ''});
    }
  }
});

ReactDOM.render(<TasksList />, $('#tasks-list').get(0));

