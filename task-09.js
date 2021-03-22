import users from "./users.js";
let sortNumbers = numbers.sort((a, b) => {
    return users.sort((a, b) => {
        return a.friends.length - b.friends.length;
    }).map(user => { return user.name});
})
console.log(sortNumbers)