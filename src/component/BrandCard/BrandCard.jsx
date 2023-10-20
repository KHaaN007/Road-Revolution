import Card from "./Card";

const BrandCard = ({ brands }) => {

    return (
        <div className="container  mx-auto">
            <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 lg:mx-auto mx-5">
                {
                    brands && brands.map(brand => <Card key={brand.id} brand={brand}></Card>)
                       
                }
            </div>

        </div>
    );
};

export default BrandCard;