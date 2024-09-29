import { useState } from "react";
export default function JournalForm({
  Button,
  curFriend,
  friends,
  setFriends,
}) {
  const [dates, setDate] = useState("");
  const [pair, setPair] = useState("");
  const [outcome, setOutCome] = useState("breakeven");
  const [outcomeAmount, setOutComeAmount] = useState("");
  const [EntryPrice, setEntryPrice] = useState("");
  const [stopPrice, setStopPrice] = useState("");
  const [takeprofit, setTakeProfit] = useState("");

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
  function clear() {
    setDate("");
    setPair("");
    setOutCome("breakeven");
    setOutComeAmount("");
    setEntryPrice("");
    setStopPrice("");
    setTakeProfit("");
  }
  if (!curFriend) return;
  console.log(friends);
  return (
    <form onSubmit={handleEventJournal} className="journal-container">
      <h1> {curFriend.name} Journal</h1>
      <div className="form-container">
        <div>
          <label>Date: </label>
          <input
            required
            value={dates}
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
        </div>
        <div>
          <label>currency pair: </label>
          <input
            required
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>outcome: </label>
          <select value={outcome} onChange={(e) => setOutCome(e.target.value)}>
            <option value={"breakeven"}>Breakeven</option>
            <option value={"win"}>Win</option>
            <option value={"loss"}>Loss</option>
          </select>
          {outcome !== "breakeven" && (
            <input
              required
              type="number"
              value={outcomeAmount}
              onChange={(e) => setOutComeAmount(+e.target.value)}
              placeholder="win/loss amount"
            />
          )}
        </div>
        <div>
          <label>Entry Price: </label>
          <input
            required
            type="number"
            value={EntryPrice}
            onChange={(e) => setEntryPrice(+e.target.value)}
          />
        </div>
        <div>
          <label>Stop loss price: </label>
          <input
            required
            type="number"
            value={stopPrice}
            onChange={(e) => setStopPrice(+e.target.value)}
          />
        </div>
        <div>
          <label>Take profit price: </label>
          <input
            required
            value={takeprofit}
            onChange={(e) => setTakeProfit(+e.target.value)}
          />
        </div>
      </div>
      <Button className={"add-button"}>Submit</Button>
    </form>
  );
}
