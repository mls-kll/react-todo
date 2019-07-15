const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//parnet id, prenteknek legyenek propertiuk, amik tartalmazzák a childeket
//körmentes gráf
//gráfok megnézni
//mik azok a feladatok, amiknek nincs függőségük

let todos = [
  {
    id: '0ceb1eb9-26d8-4ea8-b831-d99575a78e02',
    title: 'etesd meg a kecskédet',
    description: 'éhes',
    isCompleted: false,
    parentId: null
  },
  {
    id: '75d3208e-c753-4432-ba0b-e7508bea1b07',
    title: 'vegyél sört',
    description: '',
    isCompleted: false,
    parentId: null
  },
  {
    id: '933d86ac-832b-4f02-88ac-54e7414d7241',
    title: 'takaríts ki',
    description: 'kosz van',
    isCompleted: true,
    parentId: null
  }
];

let suggestions = null;

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todo', (req, res) => {
  const { id, title, description, isCompleted } = req.body;
  const newTodo = {
    id,
    title,
    description,
    isCompleted
  };
  todos.push(newTodo);
  res.send(todos);
});

app.post('/todos/suggestions', (req, res) => {
  const { query } = req.body;
  suggestions = todos.map(todo => todo.title);
  filteredSuggestions = suggestions.filter(todo => todo.includes(query));

  if (filteredSuggestions.length < 1) {
    filteredSuggestions.push('no match');
  }

  res.json(filteredSuggestions);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, title, description } : todo
  );

  todos = updatedTodos;

  res.send(todos);
});

app.put('/todo/complete/:id', (req, res) => {
  const { id } = req.params;

  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
  );

  todos = updatedTodos;

  res.send(todos);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;

  const updatedTodos = todos.filter(todo => todo.id !== id);
  todos = updatedTodos;

  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
