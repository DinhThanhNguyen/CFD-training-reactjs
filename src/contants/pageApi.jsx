import { API } from "./api"

export default {
    home: () => {
        return fetch(`${API}/elearning/v4/home`)
            .then(res => res.json())
    },
    courses: () => {
        return fetch(`${API}/elearning/v4/courses`)
            .then(res => res.json())
    }
}