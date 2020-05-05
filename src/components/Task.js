import React from 'react';

// Basic implementation of the Task, simply taking in the attributes we know we’ll need and the two actions you can take on a task (to move it between lists)
export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}