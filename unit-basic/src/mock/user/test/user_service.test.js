const UserService = require('../user_service');
const UserClient = require('../user_client');


//호출하는지 안 하는지 행동에 대한 테스트를 할때는 mock을 사용해야한다

describe('UserService', () => {
    const login = jest.fn( async () => 'success');
    UserClient.mockImplementation(()=>{
        return {
            login,
        }
    });
    let userService;

    beforeEach(()=>{
        userService = new UserService(new UserClient());
        login.mockClear();
        UserClient.mockClear();
    });

    it('calls login() on UserClient when tries to login', async () => {
        await userService.login('abc','abc');
        expect(login.mock.calls.length).toBe(1);
    });

    it('should not call login() on UserClient again if already logged in', async () => {
        await userService.login('abc','abc');
        await userService.login('abc','abc');
        expect(login.mock.calls.length).toBe(1);

    });
});