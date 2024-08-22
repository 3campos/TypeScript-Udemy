import React from 'react';

import TodoList from './components/TodoList';

const App: React.FunctionComponent = () => {
  const todos = [{id: 't1', text: 'Finish the course'}];
  return (
    <div className="App">
      {/* A components that adds todos. */}
      <TodoList items={todos}/>
    </div>
  );
}

export default App;