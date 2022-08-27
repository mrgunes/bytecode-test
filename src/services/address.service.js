import { apiCall } from "./config";

export const addressService  = {
    getAddresses() {
        return apiCall.get("/addresses");
    },
};
