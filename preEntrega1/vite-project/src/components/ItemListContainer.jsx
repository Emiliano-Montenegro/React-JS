import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../productos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);

        getProducts(categoryId).then((response) => {
            setItems(response);
            setIsLoading(false);
        });
    }, [categoryId]);

    return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;

