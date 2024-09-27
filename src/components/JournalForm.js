export default function JournalForm({
  Button,
  curFriend,
  friends,
  setFriends,
  dates,
  setDate,
  pair,
  setPair,
  outcome,
  setOutCome,
  outcomeAmount,
  setOutComeAmount,
  EntryPrice,
  setEntryPrice,
  stopPrice,
  setStopPrice,
  takeprofit,
  setTakeProfit,
  clear,
  handleEventJournal,
}) {
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
