export default (state = {authdata: null}, action) => {
    switch (action.type) {
      case 'auth':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data.result }))
      const token = action.data.token;
      localStorage.setItem('token', token)
      return {...state, authdata:action?.data};
      case 'logout':
        localStorage.clear();
        return { ...state, authdata: null};
        case'forget':
        return {...state, authdata:action?.data};
        case'reset':
        return {...state, authdata:action?.data};
        case 'UPDATE':
          localStorage.setItem('profile', JSON.stringify({ ...action?.data.result }))
          return {...state, authdata:action?.data};    
      default:
        return state;
    }
  }