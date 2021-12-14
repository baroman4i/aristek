export const groupBy = (arr, key) => {
  return arr.reduce((prev, curr) => {
    (prev[curr[key]] = prev[curr[key]] || []).push(curr)
    return prev
  }, {})
}
