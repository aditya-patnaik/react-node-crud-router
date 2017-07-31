const INITIAL_STATE = {
	loader: true,
	blogList: []
};

export default ( state = INITIAL_STATE, action ) => {
	if(action.type === 'UPDATE_BLOG_LIST'){
		return { ...state, blogList: action.payload, loader: false };
	} else if(action.type === 'SET_LOADER'){
		return { ...state, loader: true };
	}
	else{
		return state;
	}
	/*switch (action.type) {
		case UPDATE_BLOG_LIST:
			return { ...state, blogList: action.payload.blogList };
		case default:
			return state;
	}*/
}
