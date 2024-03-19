import { API_BASE_URL } from "./api-config";

export const call = (endpoint, method, request) => {
    let headers = new Headers({
        "Content-type": "application/json",
    });

    let options = {
        headers: headers,
        url: API_BASE_URL + endpoint,
        method: method,
    };

    if (request) {
        options.body = JSON.stringify(request);
        console.log("requestBody=="+options.body);
    }

    return fetch(options.url, options).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 403) {
            window.location.href = "/login";
        }
    }).catch((error) => {
        console.log("http error");
        console.log(error);
    });

}