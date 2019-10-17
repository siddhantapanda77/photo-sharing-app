import { combineReducers } from  'redux'
import photosReducer from './photosReducer'
import userReducers from './usersReducers'
import commentsReducer from './commentsReducers'
import authReducer from './authReducer'



const rootReducer = combineReducers({
    auth: authReducer,
    comment: commentsReducer,
    photos: photosReducer,
    users: userReducers,

})

export default rootReducer