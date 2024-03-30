// code your solution here
function superbowlWin(record) {
    const winningRecord = record.find(recordEntry => recordEntry.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  

