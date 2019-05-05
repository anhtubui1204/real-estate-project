export default function processResponse(res) {
    const statusCode = res.status;
    const data = res.json();
    return Promise.all([statusCode, data]).then(res=>({
        statusCode: res[0],
        data: res[1]
    }))
}
