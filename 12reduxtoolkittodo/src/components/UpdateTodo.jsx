// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateTodo } from '../features/todo/todoSlice';

// function UpdateTodo() {
//   const todos = useSelector(state => state.todos);
//   const dispatch = useDispatch();

//   // Assuming you have a state to manage the updated text
//   const [updatedText, setUpdatedText] = useState('');

//   const handleUpdate = (todoId) => {
//     // Dispatch the updateTodo action with the todoId and updatedText
//     dispatch(updateTodo({ id: todoId, text: updatedText }));

//     // Reset the updatedText state after updating
//     setUpdatedText('');
//   };

//   return (
//     <>
//       <div>Update Todos</div>
//       <ul className="list-none">
//         {todos.map((todo) => (
//           <li
//             className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//             key={todo.id}
//           >
//             <div className='text-white'>{todo.text}</div>
//             <div className="flex">
//               <input
//                 type="text"
//                 value={updatedText}
//                 onChange={(e) => setUpdatedText(e.target.value)}
//                 className="mr-2 px-2 py-1 border rounded"
//               />
//               <button
//                 onClick={() => handleUpdate(todo.id)}
//                 className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
//               >
//                 Update
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default UpdateTodo;