// https://chancejs.com/index.html

/*
 * email: string;
 * fistName: string;
 * lastName: string;
 * gender: string;
 * avatar: string;
 * age: number;
 */

class UserMockService {
    create(amount) {
        const users = [];
        for (let i = 0; i < amount; i++) {
            const user = this.#makeUser();
            users.push(user);
        }
        return users;
    }

    #makeUser() {
        return {
            email: chance.email(),
            firstName: chance.first(),
            lastName: chance.last(),
            gender: chance.gender(),
            avatar: chance.avatar({ protocol: 'https', fileExtension: 'png' }),
            occupation: chance.profession(),
            age: chance.age(),
            about: chance.paragraph(),
            twitterTag: chance.twitter(),
        };
    }
}

const userMockService = new UserMockService();

const dbMock = {
    users: userMockService.create(50),
};

console.log(dbMock);
