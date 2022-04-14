import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "25bd77ae-2da9-45ff-89bd-931a24e8af41"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photo){
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/formData'
            }
        })
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    },
}


