export const navigateTo = (location) => {
  console.log(location)
  return {
    type: 'NAVIGATE_TO',
    location
  }
}
