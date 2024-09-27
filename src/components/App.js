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
  const [dates, setDate] = useState("");
  const [pair, setPair] = useState("");
  const [outcome, setOutCome] = useState("breakeven");
  const [outcomeAmount, setOutComeAmount] = useState("");
  const [EntryPrice, setEntryPrice] = useState("");
  const [stopPrice, setStopPrice] = useState("");
  const [takeprofit, setTakeProfit] = useState("");
  const [openForm, setOpenForm] = useState(false);
  function clear() {
    setDate("");
    setPair("");
    setOutCome("breakeven");
    setOutComeAmount("");
    setEntryPrice("");
    setStopPrice("");
    setTakeProfit("");
  }
  function handleEvent(friens) {
    setCurFriend((friend) => (curFriend?.id === friens?.id ? null : friens));
    clear();
  }
  function handleEventJournal(e) {
    e.preventDefault();
    setFriends((f) =>
      f?.map((v) =>
        v.id === curFriend.id
          ? {
              ...v,
              activities: [
                ...v?.activities,
                {
                  dates,
                  pair,
                  outcome,
                  outcomeAmount:
                    outcome === "loss" ? -outcomeAmount : outcomeAmount,
                  EntryPrice,
                  stopPrice,
                  takeprofit,
                },
              ],
              get balance() {
                return this.calc();
              },
            }
          : v
      )
    );
    clear();
    setOutCome("breakeven");
  }
  return (
    <div className={`container`}>
      <ProfileCard
        openForm={openForm}
        setOpenForm={setOpenForm}
        onSelect={handleEvent}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        friends={friends}
        setFriends={setFriends}
        Button={Button}
        setCurFriend={setCurFriend}
        curFriend={curFriend}
      />
      <div className="journal-container">
        {
          <JournalForm
            handleEventJournal={handleEventJournal}
            clear={clear}
            Button={Button}
            setCurFriend={setCurFriend}
            curFriend={curFriend}
            friends={friends}
            setFriends={setFriends}
            dates={dates}
            setDate={setDate}
            pair={pair}
            setPair={setPair}
            outcome={outcome}
            setOutCome={setOutCome}
            outcomeAmount={outcomeAmount}
            setOutComeAmount={setOutComeAmount}
            EntryPrice={EntryPrice}
            setEntryPrice={setEntryPrice}
            stopPrice={stopPrice}
            setStopPrice={setStopPrice}
            takeprofit={takeprofit}
            setTakeProfit={setTakeProfit}
          />
        }
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
