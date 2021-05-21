import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="23123"
            title="The lean starting"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa,Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>

        <div className="home__row">
          <Product
            id="32543354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
          />

          <Product
            id="2312244"
            title="HUAWEI Nova 5T (128GB, 6GB) 6.26 LCD, Kirin 980, 48MP Quad Camera,..."
            price={29.99}
            image="https://m.media-amazon.com/images/I/61c9ScYm8ZL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="2311124"
            title="Villy Gunda aalu very cheap play genshin"
            price={0.99}
            image="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="231112312322124"
            title="Samsung LC$(RXSSENXSXN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WOHD 5120 x 1440"
            price={1449.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
