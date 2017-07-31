import axios from 'axios';

export const updateList = () => {
	return (dispatch) => {
		axios.get(`/cards`)
			.then(res => {
				var data = res.data;
				dispatch({
					type: 'UPDATE_BLOG_LIST',
					payload: data
				})
			});
	}
};

export const setLoader = (flag) => {
	return {
		type: 'SET_LOADER',
		payload: flag
	}
};
