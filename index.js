// code your solution here
function superbowlWin(record) {
  const winObject = record.find(obj => obj.result === "W")
  console.log(winObject)
  if (winObject) {
    return winObject.year;
  } else {
    return undefined;
  }
}