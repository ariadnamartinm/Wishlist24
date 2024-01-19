// rfc
import React from 'react';

const wishes = [
  {
    id: 0,
    text: 'Travel to the moon',
    completed: false,

  },
  {
    id: 1,
    text: 'Travel to Barcelona',
    completed: true,

  },
  {
    id: 2,
    text: 'Eat an hamburguer',
    completed: false,

  },

];

export default function App() {
  return (
    <div>
      <h1>My Wishlist</h1>
      <fieldset>
        <length>New Wish: </length>
        <input
          type="text"
          placeholder="My new Wish"
        />
      </fieldset>
      <ul>
        <li>
          {wishes.map((wish) => (
            <li key={wish.id}>
              <input
                type="checkbox"
                checked={wish.completed}
                id={wish.id}
              />
              <label htmlFor={wish.id}>{wish.text}</label>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
}
