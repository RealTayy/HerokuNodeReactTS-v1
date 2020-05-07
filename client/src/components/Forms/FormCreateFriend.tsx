import React, { useState, MouseEvent, ChangeEvent } from 'react'
import { useFriendStore } from '../../hooks';
import { TFriend } from '../../types';
import { observer } from 'mobx-react';

const FormCreateFriend = observer(() => {
  const { friends, makeFriend } = useFriendStore();

  const [friend, setFriend] = useState<TFriend>({
    name: '',
    isFavorite: false,
    isSingle: false
  })

  const handleOnSubmit = (
    e: MouseEvent<HTMLButtonElement>,
    { name, isFavorite, isSingle }: TFriend
  ) => {
    e.preventDefault();
    makeFriend(friend)
  }

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { type, value, checked, name } = e.target;
    const input = type === 'text' ? value : checked;
    setFriend({ ...friend, [name]: input })
  }

  return (
    <form className="FormCreateFriend"    >
      Total friends: {friends.length}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={friend.name}
          onChange={e => handleOnChange(e)}
        />
      </div>
      <div>
        <label>Is Favorite:</label>
        <input
          type="checkbox"
          name="isFavorite"
          checked={friend.isFavorite}
          onChange={e => handleOnChange(e)}
        />
      </div>
      <div>
        <label>Is Single:</label>
        <input
          type="checkbox"
          name="isSingle"
          checked={friend.isSingle}
          onChange={e => handleOnChange(e)}
        />
      </div>
      <button
        onClick={e => handleOnSubmit(e, friend)}
      >
        Submit new friend
    </button>
    </form>
  )
});

export default FormCreateFriend
