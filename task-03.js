import users from "./users.js";
const getUsersWithGender = (users, gender) => {
    let genderUsers = users.filter(user => {return user.gender === gender}); 
    let gendersMale = genderUsers.map(user => {return  user.name}) 
    return gendersMale
  };
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
    