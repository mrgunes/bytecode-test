import { Card } from "antd";
import React from "react";
import { CardTitle, Label, LabelValue, Row } from "./addressCard.styles";

const DataRow = ({ label, value }) => 
  <Row>
    <Label>{label}</Label>
    <LabelValue>{value}</LabelValue>
  </Row>;


const AddressCard = ({
  data: { name, streetAddress, city, state, zipCode, phone },
}) => {
  return (
    <Card hoverable style={{margin: '0.5rem'}}>
      <CardTitle>{name}</CardTitle>
      <DataRow label={"Street"} value={streetAddress} />
      <DataRow label={"city"} value={city} />
      <DataRow label={"State"} value={state} />
      <DataRow label={"ZipCode"} value={zipCode} />
      <DataRow label={"Phone"} value={phone} />
    </Card>
  );
};

export default AddressCard;
