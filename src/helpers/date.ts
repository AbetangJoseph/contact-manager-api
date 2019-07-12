export const dateCreated = () => {
  const time = new Date(Date.now()).toLocaleTimeString()
  const date = new Date(Date.now()).toLocaleDateString()
  const currentDate = `${date}, ${time}`
  return currentDate
}
