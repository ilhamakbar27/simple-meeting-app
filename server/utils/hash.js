const {hashSync, compareSync} = require('bcryptjs');   

const hash = (password) => {
    return hashSync(password, 10);
}  

const compare = (password, userPassword) => {
    return compareSync(password, userPassword);
}


module.exports = {hash, compare}