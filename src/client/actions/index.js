let nextTask = 0;

export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    id: nextTask++,
    text
  };
};

export const removeTask = () => {
  return {
    type: 'REMOVE_TASK',
  };
};

