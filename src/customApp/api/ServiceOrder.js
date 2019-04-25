
import HttpUtility from "../../utility/HttpUtility";
import serverConfig from "../../settings/serverConfig";

export async function getServiceOrder(bookingCode) {

    let url = serverConfig.URL_REST + "/rest/member/order/" + bookingCode;
    let option = {
        method: 'GET',
        mode: 'cors',
    };
    return HttpUtility.req(url, option);

}

export async function insertServiceOrder(orderData) {

console.log("memeapi", orderData)

    // set url
    let url = serverConfig.URL_REST + "/rest/member/order";

    // set fetch options
    let option = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    };

    return HttpUtility.req(url, option);

}

export async function cancelServiceOrder(idOrder) {
    // set url
    let url = serverConfig.URL_REST + "/rest/member/order/" + idOrder;

    // set fetch options
    let option = {
        method: 'PUT',
        mode: 'cors',
    };

    return HttpUtility.req(url, option);
}