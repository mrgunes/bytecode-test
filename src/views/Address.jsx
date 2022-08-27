import React from "react";
import { AddressCard } from "../components";
import { addressService } from "../services";


const Address = () => {
  const [addresses, setAddresses] = React.useState([]);
  React.useEffect(() => {
    const getAddressList = () => {
      addressService
        .getAddresses()
        .then(({ data }) => {
          setAddresses(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAddressList();
  }, []);

  return (
    <>
      {addresses.map((address, idx) => (
        <AddressCard key={idx} data={address} />
      ))}
    </>
  );
};

export default Address;
