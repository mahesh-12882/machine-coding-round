import { useState, useEffect } from 'react';
// import axios from 'axios';
import './load-more.module.css';
import axiosInstance from '../AxiosInterseptors/index';
interface IProduct {
    id: number;
    title: string;
    description: string;
}

interface IData {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;

}

export const LoadMoreApi = () => {
    //https://jsonplaceholder.typicode.com/posts
    let [limit, setLimit] = useState<number>(50);
    const [loading, setLoading] = useState<boolean>(false);

    let [product, setProduct] = useState<IData>({
        products: [],
        total: 0,
        skip: 0,
        limit: 50,
    });
    //Initialize abortController



    useEffect(() => {
        const controller = new AbortController();

        let getProducts = async (limits: number) => {
            try {
                setLoading(true);
                let response = await axiosInstance.get(`/products?limit=${limits}`, {
                    signal: controller.signal
                });
                console.log("response>>>>", response.data);

                setProduct(response.data);
            } catch (error: any) {
                if (error.name === 'AbortError') {
                    console.log('Fetch request was aborted');
                } else {
                    console.error('Error fetching data', error);
                }
            } finally {
                setLoading(false);
            }

        }

        getProducts(limit);
        return () => {
            // Cancel previous request if the component unmounts or query changes
            console.log("cancellation api call")
            controller.abort();
        }
    }, [limit])

    let addMore = () => {
        setLimit((previousLimit) => previousLimit + 50);
    }

    console.log("product>>>>>", product)
    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <ul className='product-listing'>
                {product.products.map((data) => (
                    <>
                        <li>{data.id}</li>
                        <li>{data.title}</li>
                        <li>{data.description}</li>
                    </>
                ))}
            </ul>
            {/* <span>{product.limit} {product.total}</span> */}
            {product.total !== 0 &&
                <button onClick={addMore} disabled={product.limit === product.total}>Load More</button>
            }
            {/* <h1>Show api response</h1> */}
        </div>
    )
}