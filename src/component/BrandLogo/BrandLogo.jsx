import React from 'react';

const BrandLogo = () => {
    return (
        <div>
            <div className="bg-white  sm:py-32 lg:mt-52 my-10">
                <div className="mx-auto w-full px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative Brands</h2>
                    <div className="mx-auto pt-20 mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                        <img className="col-span-2 max-h-24 w-full object-contain lg:col-span-1" src="https://i.ibb.co/8znvrc2/bmw-logo-1997-download.webp" alt="Transistor" width="158" height="48" />
                        <img className="col-span-2 max-h-24 w-full object-contain lg:col-span-1" src="https://i.ibb.co/09LvC94/tesla-logo-2004-download.webp" alt="Reform" width="158" height="48" />
                        <img className="col-span-2 max-h-24 w-full object-contain lg:col-span-1" src="https://i.ibb.co/bBHbpCP/toyota-logo-2005-download.webp" alt="Tuple" width="158" height="48" />
                        <img className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://i.ibb.co/YBQQ9F9/1272633-removebg-preview.png" alt="SavvyCal" width="158" height="48" />
                        <img className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://i.ibb.co/S5qW6Zn/b92bf19612e524ac1f9d5e998770eba7-removebg-preview.png" alt="Statamic" width="158" height="48" />
                        <img className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://i.ibb.co/RSngsv3/honda-logo-2000-full-download.webp" alt="Statamic" width="158" height="48" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BrandLogo;