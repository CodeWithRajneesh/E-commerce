
import { useState, useEffect } from 'react';
import mockData from './CardData';
import { Link } from 'react-router-dom';

const Card = () => {
  const [categories, setCategories] = useState([]);

  // Function to fetch data from the mock API
  const fetchData = async ()=>{
    try{
      // Delay Api call
      await new Promise(resolve => setTimeout(resolve,1000));
    //Api call
      setCategories(mockData);

    }
    catch(error){
      console.log('Error in data', error)

    }
  };

  // Fetch data when the component mounts

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='title text-black ml-10 mt-10 text-lg font-medium'>SHOP BY CATEGORY</div>
      <div className="section2">
        <div className="container flex flex-wrap  justify-center mx-auto">
          {categories.map(category => (
            <div key={category.id} className="items flex flex-col justify-center items-center m-10 w-48 h-76 bg-white mt-4 mx-12">
              <div className="img img2 overflow-hidden">
                <img src={category.image} className='w-full h-full' alt={category.name} />
                <div className="flex flex-col items-center justify-center text-white relative bottom-28 h-20 w-40 m-4 bg-orange-500 ">
                  <Link to={category.link}><p className="name font-semibold">{category.name}</p></Link>
                  <Link to={category.specialOfferLink}><p className="price font-bold text-lg">{category.specialOffer}</p></Link>
                  <Link to={category.link}><p className="info font-semibold">Shop Now</p></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
