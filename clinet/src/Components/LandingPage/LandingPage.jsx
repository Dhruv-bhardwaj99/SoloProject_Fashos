import { useEffect} from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import styles from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { fetchData } from "../../Redux/Data/action";
import { SliderImg } from "./Slides";

const small = [
  {
    name: "WOMEN",
    url: "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/women_thumb.jpg",
  },
  {
    name: "MEN",
    url: "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/men_thumb.jpg",
  },
  {
    name: "NEW ARRIVALS",
    url: "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/newarrival_thumb.jpg",
  },
  {
    name: "SALE",
    url: "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/sale_thumb.jpg",
  },
  {
    name: "BEST SELLERS",
    url: "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/best_seller_thumb.jpg",
  },
];
const largeBox = [
  {
    name: "BOOTS",
    url: "https://www.fashos.com/pub/media/wysiwyg/home/boots.jpg",
  },
  {
    name: "SANDALS",
    url: "https://www.fashos.com/pub/media/wysiwyg/home/sandals.jpg",
  },
  {
    name: "SNEAKERS",
    url: "https://www.fashos.com/pub/media/wysiwyg/home/sneaker.jpg",
  },
  {
    name: "OFFICE",
    url: "https://www.fashos.com/pub/media/wysiwyg/home/office.jpg",
  },
  {
    name: "SPORTS",
    url: "https://www.fashos.com/pub/media/wysiwyg/home/sports.jpg",
  },
];
const brand = [
  "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/bata_logo.jpg",
  "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/hush-puppies.jpg",
  "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/drscholls.jpg",
  "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/fausto.jpg",
  "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/sparx.jpg",
  "https://www.fashos.com/pub/media/wysiwyg/hp_images/2019/brand_logo/lancer.jpg",
];

export const Home = () => {
  const Wrapper = styles.div`
      .slick-arrow{
        background-color: black;
        width: 20px;
        border-radius: 50%;
      }
      .slick-track{
          display:flex;
          gap:20px
      }
  `;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  const { finalData, error, loading } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
      dispatch(fetchData());
  };

  console.log(finalData);

  return loading ? ("Loading...") : error ? ("Error Occured") : (
    <div className="langingBody">
      <SliderImg />
      <div className="smallCat">
        {small.map((e) => (
          <div className="smallFlex">
            <img src={e.url} alt="cat" />
            <p>{e.name}</p>
          </div>
        ))}
      </div>

      <div className="largeCat">
        {largeBox.map((e) => (
          <div className="largeFlex">
            <Link to="/product">
              <div className="imgTrans">
                <img className="largeImg" src={e.url} alt="" />
              </div>
            </Link>
            <p className="largeInfo">{e.name}</p>
          </div>
        ))}
      </div>

      <Wrapper className="slider">
        <h2 className="slider_header"> NEW ARRIVALS </h2>
        <Slider {...settings}>
          {finalData.map((el) => (
            <div className="newSliders" key={el.id}>
              <img src={el.img1} className="img1" alt="product" />
              <p>Rs.{el.price}</p>
            </div>
          ))}
        </Slider>
      </Wrapper>

      <Wrapper className="slider2">
        <h2 className="slider_header"> TOP SELLING </h2>
        <Slider {...settings}>
          {finalData.map((el) => (
            <div className="newSliders2" key={el.id}>
              <img src={el.img2} className="img1" alt="product" />
              <p>Rs.{el.price}</p>
            </div>
          ))}
        </Slider>
      </Wrapper>
    </div>
  );
};
