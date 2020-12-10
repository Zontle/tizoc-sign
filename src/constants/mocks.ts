export const Unknown = {
  tag: "user",
  firstName: "firstname",
  lastName: "lastname",
  email: "mark.west@gmail.com",
}

const vaccinatedDateTimeDiff = 
    Math.abs(new Date(Date.now()).getTime() - new Date("10/25/2020").getTime())

const vaccinatedDateDaysDiff = 
    Math.ceil(vaccinatedDateTimeDiff / (1000 * 3600 * 24));

export const Claudia = {
  tag: "user",
  firstName: "Mark",
  lastName: "West",
  date: "25/10/2020",
  proof: "Covid Vaccinated",
  proofMetadata: `Since ${vaccinatedDateDaysDiff} days`,
  avatarSrc: "https://randomuser.me/api/portraits/men/33.jpg",
  email: "mark.west@gmail.com",
}

export const Nathan = {
  tag: "user",
  firstName: "Nathan",
  lastName: "Mitchell",
  proof: "Older than 18 years",
  proofMetadata: "Since 2018",
  avatarSrc: "https://randomuser.me/api/portraits/men/60.jpg",
  email: "nathan.mitchell@aol.com"
}

export const Andy = {
    tag: "user",
    firstName: "Andy",
    lastName: "Johnson",
    proof: "Wisconsin Resident",
    proofMetadata: "Driver‘s License",
    avatarSrc: "https://randomuser.me/api/portraits/men/30.jpg",
    email: "me@andyjohnsonllc.com"
}

export const Alberto = {
  tag: "user",
  firstName: "Alberto",
  lastName: "Tavira",
  proof: "Priority Access",
  proofMetadata: "AMEX Platinum Holder",
  avatarSrc: "https://randomuser.me/api/portraits/men/86.jpg",
  email: "alberto.tavira82@hotmail.com"
}

export const Tizoc = {
  tag: "tizoc",
  firstName: "Tizoc",
  lastName: "Zystems",
  email: "Attestation Engine"
}

export const Airport = {
  tag: "airport",
  firstName: "Adolfo",
  lastName: "Suárez",
  email: "International Airport"
}

export const Javier = {
  tag: "employee",
  firstName: "Javier",
  lastName: "Gómez",
  avatarSrc: "https://randomuser.me/api/portraits/men/77.jpg",
  email: "javi.gomez@hotmail.com"
}