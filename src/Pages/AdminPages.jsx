import React from "react";
import { Dropdown, DropdownButton, Table, Container } from "react-bootstrap";
import TopNav from "../Components/Home/TopNav";
import transactionData from "../Dummy/Transaction.json";

function AdminPages() {
  return (
    <div id="admingPagesWrapper">
      <TopNav />
      <Container>
        <h1>this is admin pages</h1>
        <div className="admin-bg">
          <Table borderless hover>
            <thead>
              <tr>
                <th>No</th>
                <th>User orAuthor</th>
                <th>ISBN</th>
                <th>E-Book</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            {transactionData.map((data) => (
              <tbody striped>
                <tr>
                  <td>{data.no}</td>
                  <td>{data.userOrAuthor}</td>
                  <td>{data.ISBN}</td>
                  <td>{data.ebook}</td>
                  <td>{data.statusPayment}</td>
                  <td>
                    <DropdownButton title="Status">
                      <Dropdown.Item>Approve</Dropdown.Item>
                      <Dropdown.Item>Cancel</Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </Container>
    </div>
  );
}

export default AdminPages;
