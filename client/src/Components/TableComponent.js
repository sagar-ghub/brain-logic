import Table from "react-bootstrap/Table";

function BasicExample({ headings, rows }) {
  //   const headings = ["#", "First Name", "Last Name", "Username"];
  //   const rows = [
  //     ["1", "Mark", "Otto", "@mdo"],
  //     ["2", "Jacob", "Thornton", "@fat"],
  //     ["3", "Larry the Bird", "@twitter"],
  //   ];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headings.length > 0 &&
            headings.map((heading, index) => {
              return <th key={index}>{heading}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 &&
          rows.map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cell, index) => {
                  return <td key={index}>{cell}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
