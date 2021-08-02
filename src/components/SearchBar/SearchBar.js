import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";


const SearchBar = ({
    searchInput,
    handleSearchChange,
    handleSubmit,
}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control
                        placeholder="..."
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                </Col>

                <Button style={{ width: "70px" }} type="submit">Search</Button>
            </Row>

        </Form>
    )
}

export default SearchBar
