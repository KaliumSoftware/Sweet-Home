import "./MostValue.css";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addtoCart, postShoppingCart, getUserByUid } from "../../Redux/actions/actions.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/authContex";
import PropTypes from "prop-types";

const MostValueCards = ({ _id, name, image, price, rating }) => {
  const dispatch = useDispatch();

  const [, setInCart] = useState(false);
  const allShoppingCart = useSelector((state) => state.shoppingCart);
  const isProductInCart = allShoppingCart.some((product) => product.id === _id);
  useEffect(() => {
    setInCart(isProductInCart);
  }, [isProductInCart]);

  const { user } = useAuth();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (user) {
      dispatch(getUserByUid(user.uid));
    }
  }, [dispatch, user]);

  const userUid = user?.uid || null;
  useEffect(() => {
    if (userUid) {
      setUserId(userUid);
    }
  }, [userUid]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShoppingCart = () => {
    setInCart(true);
    dispatch(addtoCart({ _id, name, image, price }));
    if (userId) {
      const updatedCart = {
        user: userId,
        products: [
          {
            product: _id,
            quantity: 1,
          },
        ],
      };
      dispatch(postShoppingCart(updatedCart));
    } else {
      const newCart = {
        user: user.uid,
        products: [
          {
            product: _id,
            quantity: 1,
          },
        ],
      };
      dispatch(postShoppingCart(newCart));
    }
  };

  const renderRatingStars = () => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star-icon" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star-icon" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star-icon" />);
    }

    return stars;
  };
  return (
    <div>
      <div className="select-none max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="aspect-w-3 aspect-h-4 mb-4">
          <Link to={`/products/${_id}`} onClick={scrollToTop}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={name}
              className="object-cover object-center w-full h-full"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="rating-stars flex">{renderRatingStars()}</div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-auto ">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            ${price}
          </span>
          <button
            onClick={handleShoppingCart}
            href="#"
            className="text-white bg-black hover:bg-neutral-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

MostValueCards.propTypes = {
  _id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MostValueCards;
