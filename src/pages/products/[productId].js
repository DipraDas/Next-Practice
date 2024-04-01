import { useRouter } from 'next/router';
import React from 'react';

const productDetail = () => {
    const router = useRouter();
    return (
        <div>
            <h1>The is route : {router.query.productId}</h1>
        </div>
    );
};

export default productDetail;