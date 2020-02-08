export const fetchUsers = () => {
	return fetch('https://jsonplaceholder.typicode.com/users').then(res =>
		res.json()
	) as Promise<AppFeatures.User[]>;
};
