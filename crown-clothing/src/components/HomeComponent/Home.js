import Directory from "../Directory/Directory";

const Home = () =>
{
    const categories = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        }
      ];
    
    return(
        <div>                              
            <Directory categories={categories}/>
        </div>
        );    
}

export default Home;