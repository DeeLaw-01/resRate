let userState = {
  signedIn: false,
  username: '',
  email: '',
  profilePic: '',
  userIp: '',
  userLocation: {}
}

function setSignedIn (value) {
  userState.signedIn = value
}

function setUsername (value) {
  userState.username = value
}

function setEmail (value) {
  userState.email = value
}

function setProfilePic (value) {
  userState.profilePic = value
}

function setUserLocation (value) {
  userState.userLocation = value
}
function setUserIp (value) {
  userState.userIp = value
}

function getUserState () {
  return userState
}

export {
  setSignedIn,
  setUserIp,
  setUsername,
  setEmail,
  setProfilePic,
  setUserLocation,
  getUserState
}
