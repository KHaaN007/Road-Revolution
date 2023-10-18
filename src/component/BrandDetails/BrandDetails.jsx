import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SliderImg from '../SliderImg/SliderImg';

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
            <h2 className='text-5xl'>{brandDetail.name}</h2>
            <img src={brandDetail.img} alt="" />
            <img src={brandDetail.img1_url} alt="" />

        </div>
    );
};

export default BrandDetails;