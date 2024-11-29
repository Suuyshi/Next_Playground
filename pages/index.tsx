import DataDisplay from "@/components/DataDisplay";

export default function Home() {
  return (
    <>
      <DataDisplay
        data={{
          name: "John Doe",
          age: 30,
          email: "john.doe@example.com",
        }}
      />
    </>
  );
}
