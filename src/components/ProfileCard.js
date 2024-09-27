import { useState } from "react";
import { Button } from "./App";
export default function ProfileCard({
  friends,
  setFriends,
  isSelected,
  setIsSelected,
  setCurFriend,
  onSelect,
  curFriend,
}) {
  const [openForm, setOpenForm] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://i.pravatar.cc/150?u=tempcsjshuks"
  );
  /* function clac(h) {
    if (h?.length < 0) return;
    const bat = h?.reduce((p, r) => r.outcomeAmount + p, 0);
    console.log(bat);
    return bat;
  } */
  function clear() {
    setName("");
  }
  function handleEvent(e) {
    e.preventDefault();
    setFriends((friends) => [
      ...friends,
      {
        name,
        image,
        calc() {
          return this.activities?.reduce((b, a) => a.outcomeAmount + b, 0) || 0;
        },
        get balance() {
          return this.calc();
        },
        id: friends.length + 1,
        activities: [],
      },
    ]);
    clear();
    setOpenForm(false);
  }
  return (
    <div className={`profile-container ${friends.length > 10 ? "scroll" : ""}`}>
      <ul>
        {friends.map((v) => {
          return (
            <FriendList
              friends={friends}
              friend={v}
              key={v.id}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setCurFriend={setCurFriend}
              onSelect={onSelect}
              curFriend={curFriend}
            />
          );
        })}
        {openForm && (
          <form onSubmit={handleEvent} className="add-form">
            <div>
              <label>🫂 Friend name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>🖼️ Image url</label>
              <input
                required
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>
            <Button>Add</Button>
          </form>
        )}
      </ul>
      <Button
        handleEvent={() => setOpenForm((e) => !e)}
        className={"add-button"}
      >
        {openForm ? "Close" : "Add Friend"}
      </Button>
    </div>
  );
}
function FriendList({ friend, isSelected, onSelect, curFriend }) {
  let active = curFriend?.id === friend?.id;
  console.log(friend);
  return (
    <li className={active ? "selected" : ""}>
      <div className="div">
        <img className="profile-img" src={friend.image} alt={friend.name}></img>
        <div>
          <h3>{friend.name}</h3>
          {friend.balance < 0 && (
            <p style={{ color: "RED", fontSize: "18px" }}>
              {" "}
              Loss {`$${Math.abs(friend.balance)}`}
            </p>
          )}
          {friend.balance > 0 && (
            <p style={{ color: "#32EE67", fontSize: "18px" }}>
              {" "}
              Profit {`$${Math.abs(friend.balance)}`}
            </p>
          )}
          {friend.balance === 0 && (
            <p style={{ color: "grey", fontSize: "18px" }}>
              {" "}
              {`$${Math.abs(friend.balance)}`}
            </p>
          )}
        </div>
      </div>

      <Button handleEvent={() => onSelect(friend)} className="button">
        {active ? "close" : "select"}
      </Button>
    </li>
  );
}
