import React from "react";
import { Button, Form } from "react-bootstrap";


const SearchBar = ({
    searchInput,
    handleSearchChange,
    handleSubmit,
}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Control
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchChange}
            />


            <Button type="submit">Search</Button>


        </Form>
    )
}

export default SearchBar
