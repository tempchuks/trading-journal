import { useState } from "react";
import "../index.css";
import JournalForm from "./JournalForm.js";
import ProfileCard from "./ProfileCard.js";

/* const friendses = [
  {
    name: "Temple Chukwuka",
    image: "https://i.pravatar.cc/150?u=tempchuks",
    id: 1234,

    balance: 178,
  },

  {
    name: " Chukwuka",
    image: "https://i.pravatar.cc/150?u=tempcsjshuks",
    id: 12534,
    balance: 5,
  },
  {
    name: "Temple Chukwuka",
    image: "https://i.pravatar.cc/150?u=tempssjchuks",
    id: 12384,
    balance: 7,
  },
]; */

export default function App() {
  const [friends, setFriends] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [curFriend, setCurFriend] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  function handleEvent(friens) {
    setCurFriend((friend) => (curFriend?.id === friens?.id ? null : friens));
  }
  return (
    <div className={`container`}>
      <ProfileCard
        openForm={openForm}
        onSelect={handleEvent}
        setOpenForm={setOpenForm}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        friends={friends}
        setFriends={setFriends}
        Button={Button}
        setCurFriend={setCurFriend}
        curFriend={curFriend}
      />
      <div className="journal-container">
        {curFriend && (
          <JournalForm
            setCurFriend={setCurFriend}
            key={curFriend.name}
            Button={Button}
            curFriend={curFriend}
            friends={friends}
            setFriends={setFriends}
          />
        )}
      </div>
    </div>
  );
}
export function Button({ children, className, handleEvent }) {
  return (
    <button onClick={handleEvent} className={className}>
      {children}
    </button>
  );
}
