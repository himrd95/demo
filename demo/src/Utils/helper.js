const getData = (key) => {
	return JSON.parse(localStorage.getItem(key));
};

const uploadData = (key, data) => {
	return localStorage.setItem(key, JSON.stringify(data));
};

export { getData, uploadData };
