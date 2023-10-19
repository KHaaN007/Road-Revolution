import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SliderImg from '../SliderImg/SliderImg';
import ProductCard from '../ProductCard/ProductCard';

const BrandDetails = () => {
    const [brandDetail, setbrandDetail] = useState({})

    const { id } = useParams()
    const brands = useLoaderData()
    // console.log(brands);
    // console.log(id);



    useEffect(() => {
        const brandDetail = brands.find(brand => brand.id == id);
        setbrandDetail(brandDetail)
    }, [brands, id])



    return (
        <div>

            {
                <SliderImg brandDetail={brandDetail}></SliderImg>
            }
            {
                <ProductCard brandDetail={brandDetail}></ProductCard>
            }

        </div>
    );
};

export default BrandDetails;