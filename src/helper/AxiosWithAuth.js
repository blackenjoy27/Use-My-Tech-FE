import axios from "axios";

const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            authorization: token,
        },
        baseURL: "https://ft-use-my-tech-02.herokuapp.com",
    })
}

export default AxiosWithAuth;