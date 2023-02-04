import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dislikeFact } from "./reduxStuff";

export default function Liked() {
  const likedFacts = useSelector(store => store.likedFacts);
  const dispatch = useDispatch();

  return (
    likedFacts.length > 0 ?
      <ul className="liked-list">
        {likedFacts.map(item => (
          <li key={item.id}>
            {item.yazi}
            <button onClick={() => dispatch(dislikeFact(item.id))}>Çıkar</button>
          </li>
        ))}
      </ul>
      :
      <div className='empty-liked-list'>Beğendiğiniz bir bilgi henüz yok</div>
  )
}