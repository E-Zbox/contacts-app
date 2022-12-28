import axios from "axios";

const baseURL = "https://randomuser.me";

const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: { Accept: "application/json" },
});

export const fetchRandomContact = async () => {
    const res = await instance.get("/api", {
        params: {
            results: 1,
            nat: "gb, us, es",
            inc: "cell,dob,email,gender,name,phone,picture",
        },
    });

    const {
        data: {
            results: [_result],
        },
    } = res;

    const result = {
        ..._result,
        fullName: `${_result.name.title} ${_result.name.last} ${_result.name.first}`,
    };

    return result;
};

export const fetchContacts = async (count = 15) => {
    const res = await instance.get("/api", {
        params: {
            results: count,
            nat: "gb, us, es",
            // inc: "dob,email,gender,name,phone,picture",
        },
    });

    const {
        data: { results: _results },
    } = res;

    const results = _results.map(
        ({ name: { first, last, title }, ...others }) => ({
            fullName: `${title} ${last} ${first}`,
            name: { first, last, title },
            ...others,
        })
    );
    return results;
    /**
     * [
        {
            dob: {age},
            email, gender,
            name: {first, last, title}, 
            phone, picture: {large, medium, thumbnail},
        }
    ]
     */
};
