interface IAPIResponse {
    name : string,
    account : number,
    mobile? : number
}

function APIResponse(apidata : IAPIResponse) : IAPIResponse {
    return apidata
}

APIResponse(
    {
        name : "Karim",
        account : 344,
        mobile : 344405945
    }
);