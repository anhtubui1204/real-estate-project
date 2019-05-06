export default function processResponse(res) {
    const statusCode = res.status;
    const json = res.json();
    return Promise.all([statusCode, json]).then(res=>({
        statusCode: res[0],
        json: res[1]
    }))
}
