import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../../redux/actions/products.action";
import cartActions from "../../redux/actions/carts.action";
import NavigationBar from "../../components/NavigationBar/NavigationBar";


const DetailPage = () => {

    const params = useParams();
    const productId = params.id;

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const product = state.productsReducer.selectedProduct
    const loading = state.productsReducer.loading



    const addToCart = () => {
        dispatch(cartActions.addToCart(product));
    };

    useEffect(() => {
        dispatch(productsActions.getProductDetail(productId));
    }, [productId, dispatch])

    // useEffect(() => {

    //     if (!addingproduct) return;

    //     dispatch(productsActions.postproductToList(addingproduct))
    // }, [addingproduct])






    return (
        <div>
            <NavigationBar />
            <Container>
                {loading ? (
                    <div className="text-center">
                        <ClipLoader color="#f86c6b" size={150} loading={true} />
                    </div>
                ) : (
                    <Row className="border border-info mt-5">
                        <Col md={3}>
                            {product && (
                                <img
                                    className="w-100"
                                    src={`${product.imageUrls.[0]}`}
                                    alt=""
                                />
                            )}
                        </Col>
                        <Col md={9}>
                            {product && (
                                <>
                                    <h2>{product.name}</h2>
                                    <div>
                                        <strong>Description:</strong> {product.description}
                                    </div>
                                    <div>
                                        <strong>Review:</strong> {product.year}
                                    </div>
                                    <div>
                                        <strong>Price:</strong> {product.price}
                                    </div>
                                    <div>
                                        <strong>Stock:</strong> {product.stock}
                                    </div>
                                    <div>
                                        <strong>Language:</strong> {product.language}
                                    </div>
                                    <Button variant="success" onClick={() => addToCart()}>
                                        Add to cart
                                    </Button>
                                </>
                            )}
                        </Col>
                    </Row>
                )}
            </Container>
        </div>

    );
};

export default DetailPage;
