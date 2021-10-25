import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4b782395-2773-49e0-b51b-59e73e7c279f"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/` + id,)
            .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/` + id)
            .then(response => response.data)
    }
};

export const headerAPI = {
    userAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
};

export const profileAPI = {
    setProfileID(userId) {
        return instance.get(`profile/` + userId).then(response => response.data);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status});
    },
}