const User = require('../Modal/UserModal');

// Function to get all users
async function getAllUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}

// Export the function
module.exports = { getAllUsers };
