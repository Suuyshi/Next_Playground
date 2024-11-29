import React from "react";

interface Person {
  name: string;
  age: number;
}

interface DataDisplayProps<T extends Person> {
  data: T & { [key: string]: any };
  title?: string;
  description?: string;
  imageUrl?: string;
}

const DataDisplay = <T extends Person>({
  data,
  title = "Default Title",
  description = "Default Description",
  imageUrl = "https://via.placeholder.com/150",
}: DataDisplayProps<T>) => {
  return (
    <div className="data-display">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="Data Image" />
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

export default DataDisplay;
