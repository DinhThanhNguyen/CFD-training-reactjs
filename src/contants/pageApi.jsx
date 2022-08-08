import { API } from "./api"

export default {
    courses: () => {
        return fetch(`${API}/elearning/v4/courses`)
            .then(res => res.json())
    }
}