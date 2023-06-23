const secondDay = require('./secondday');

describe('Tests that validates twoSum', () => {
    it('should return first set of indices matching the twoSum - 1', () => {
        const nums = [1,3,4,5]
        const target = 4
        const expected = [0, 1]
        const response = secondDay.twoSum(nums, target)
        expect(response).toEqual(expected)
    });

    it('should return first set of indices matching the twoSum  - 2', () => {
        const nums = [1,3,4,5,10,12]
        const target = 15
        const expected = [3, 4]
        const response = secondDay.twoSum(nums, target)
        expect(response).toEqual(expected)
    });

    it('should return first set of indices matching the twoSum  - 3', () => {
        const nums = [1,2,3,4,5,10,12]
        const target = 5
        const expected = [1, 2]
        const notExpected = [0, 3]
        const response = secondDay.twoSum(nums, target)
        expect(response).not.toEqual(notExpected)
        expect(response).toEqual(expected)
    });

    it('should return undefined if there is no matching twoSum - 4', () => {
        const nums = [1,2,3,4,5,10,12]
        const target = 1
        const response = secondDay.twoSum(nums, target)
        expect(response).toBeUndefined()
    });
});

describe('Tests that validates fetchUser functionality', () => { 
    it('should return Error when the server is not reachable', async() => {
        const response = await secondDay.fetchUsers()
        expect(response).toBe('Error')
    });
    it('should return Success when the server responds with ok', async() => {
        const mockServerResponse = {
            ok: true
        }
        global.fetch = jest.fn().mockResolvedValue(mockServerResponse)
        const response = await secondDay.fetchUsers()
        expect(response).toBe('Success')
    });
    it('should return Not Okay when the server responds with not ok', async() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false
        })
        const response = await secondDay.fetchUsers()
        expect(response).toBe('Not Okay')
    });
 })
