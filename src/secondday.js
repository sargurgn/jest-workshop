function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
}

async function fetchUsers() {
    try {
        const response = await fetch('https://localhost:8080/users')
        if (response.ok) {
            return "Success"
        } else {
            return "Not Okay"
        }
    } catch (error) {
        return "Error"
    }
}

module.exports = {twoSum, fetchUsers}