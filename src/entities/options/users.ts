export type User = {
	id: string;
	firstName: string;
	lastName: string;
	avatar?: string;
};

const users: User[] = [
	{
		id: '1',
		firstName: 'Екатерина',
		lastName: 'Дающая',
		avatar: 'https://sun9-60.userapi.com/s/v1/ig2/eTU1aRKXSE7OAPfNEgKRyaqE8C2RQELlAkwSwZxxz3V986ACsJRB4NMQipKfgrau3VAMbkdHr7PAi7YHSm1Q8SpH.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,657x657&from=bu&cs=657x0',
	},
	{
		id: '2',
		firstName: 'Дмитрий',
		lastName: 'Самец',
		avatar: 'https://sun9-84.userapi.com/s/v1/ig2/lRL2mDPR537hX-eFZSKoVQs0jFYz42R01DpVuq5-pqiORdesndKifvcmIIu6UqrXIZi1HAoAAKixQYq0u5odYfen.jpg?quality=96&as=32x53,48x79,72x118,108x178,160x263,240x395,360x592,480x789,540x888,640x1052,720x1184&from=bu&cs=720x0',
	},
	{
		id: '3',
		firstName: 'Кир',
		lastName: 'Заблудший',
		avatar: 'https://sun9-40.userapi.com/s/v1/ig2/D03-rVHP4mzCeRpdgESRlQFm9892S7Q3cUlSiPQMmUjk3seW95HLuQVy8Yc1UXxQewubz0MOvqtB0O7WNFXHcSX7.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2160x2160&from=bu&cs=2160x0',
	},
	{
		id: '4',
		firstName: 'Павлин',
		lastName: 'Невзлетевший',
		avatar: 'https://sun9-54.userapi.com/s/v1/ig1/A4F_jFHXJMcEMfDfY3GqPTXfxqRzaxidUdElM5iuUGJHFDUZ8jSyrYp6r_pbrG-aJh6-jrg5.jpg?quality=96&as=32x57,48x85,72x128,108x192,160x285,240x427,360x641,480x855,540x961,640x1139,719x1280&from=bu&cs=719x0',
	},
	{
		id: '5',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '6',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '7',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '8',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '9',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '10',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '11',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '12',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	{
		id: '13',
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
];

export type UserGroup = {
	value: string;
	users: User[];
};

function groupUsersByAlphabet(users: User[]): UserGroup[] {
	const isCyrillic = (char: string): boolean => {
		return /[а-яё]/i.test(char);
	};

	const groups: { [key: string]: User[] } = {};

	users.forEach(user => {
		const firstChar = user.firstName.charAt(0).toUpperCase();
		const groupKey = isCyrillic(firstChar) ? firstChar : firstChar;

		(groups[groupKey] ??= []).push(user);
	});

	Object.keys(groups).forEach(key => {
		groups[key].sort((a, b) => a.firstName.localeCompare(b.firstName, 'ru'));
	});

	const cyrillicKeys: string[] = [];
	const latinKeys: string[] = [];

	Object.keys(groups).forEach(key => {
		if (isCyrillic(key)) {
			cyrillicKeys.push(key);
		} else {
			latinKeys.push(key);
		}
	});

	cyrillicKeys.sort((a, b) => a.localeCompare(b, 'ru'));
	latinKeys.sort((a, b) => a.localeCompare(b, 'en'));

	const sortedKeys = [...cyrillicKeys, ...latinKeys];

	return sortedKeys.map(key => ({
		value: key,
		users: groups[key],
	}));
}

export const groupedUsers: UserGroup[] = groupUsersByAlphabet(users);

export function getUserLabel(user: User) {
	return `${user.firstName.charAt(0)}. ${user.lastName}`;
}

