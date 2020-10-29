import baseUrl from '../../helper/url_helper';

export const reviewAction = () => async (dispatch, getState) => {
	// const { token } = getState();
	const url = `${baseUrl}/backend/api/reviews/`;
	console.log(url);
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
			// Authorization: `Bearer ${ token }`,
		}),
	};
	const response = await fetch(url, config);
	console.log(response);
	const data = await response.json();
	console.log(data);
	return data;
};

export default reviewAction;
