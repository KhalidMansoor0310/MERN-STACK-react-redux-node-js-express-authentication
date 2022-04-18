const initialState = {
    loading: false,
    registerErrors: [],
    loginErrors: [],
    user: '',
    token: ''
}

            
const token = localStorage.getItem('token');
const authReducer = (state = initialState, action) => {
   switch(action.type){
       case 'SET_LOADER':
              return {
                    ...state,
                    loading: true
              }
        case 'CLOSE_LOADER':
                return {
                    ...state,
                    loading: false
                }
        case 'REGISTER_ERRORS':
                return {
                    ...state,
                    registerErrors: action.payload
                }
        case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.payload
                }


        default:{
            return state
        }
}}

export default authReducer;