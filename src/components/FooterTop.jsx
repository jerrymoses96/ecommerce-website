function FooterTop() {
  const tataMarketplace = [
    "About Us",
    "Careers",
    "Sell With Us",
    "Terms of Use",
    "Privacy Policy",
    "Affiliates",
    "Sitemap",
  ];

  const customerService = [
    "Shopping",
    "Offers & Promotions",
    "Payments",
    "Cancellation",
    "Returns & Refunds",
    "CLiQ And PiQ",
    "Return To Store",
    "Electronics Return Policy",
    "Contact Us",
    "Reviews Guidelines",
    "Furniture Return Policy",
    "Replacement Policy",
  ];

  const myTataCliq = [
    "My Account",
    "My Orders",
    "My Shopping Bag",
    "My Wishlist",
  ];

  const tataCliqOfferings = [
    "Watches for Men",
    "Campus Shoes",
    "Sandals for Men",
    "Sneakers for Men",
    "Reebok Shoes",
    "Cotton Kurtis",
    "Woodland Shoes",
    "Jumpsuits",
    "Allen Solly",
    "Spark Shoes",
    "Gold Rings",
    "Formal Shoes for Men",
    "Sports Shoes for Men",
    "Wallets for Men",
    "Ladies Watches",
    "Trolley Bags",
    "Handbags for Women",
    "Sling Bags for Women",
    "Casual Shoes for Men",
    "Boots for Men",
    "Digital Watches",
    "Sonata Watches",
    "Sneakers for Women",
    "Running Shoes",
    "Puma Shoes",
    "Boots for Women",
    "Skechers",
    "Malabargold",
    "Fabindia",
    "Utsa",
    "Vark",
    "Gia",
    "LOV",
  ];

  return (
    <div>
      <div className=" footer-top flex flex-col items-center relative">
        <img
          className="w-[270px] absolute top-[-18px]  z-10 shadow-lg rounded-2xl"
          src="https://www.tatacliq.com/src/general/components/img/trustFrame.png"
        />
        <img
          className="w-[700px] "
          src="https://www.tatacliq.com/src/general/components/img/Frame22222.svg"
        />
      </div>
      <div className="offerings-container flex justify-evenly py-10">
        <div className="column">
          <h3 className="font-medium   mb-3">Tata MarketPlace</h3>
          <ul className="font-extralight  text-sm flex flex-col gap-2 ">
            {tataMarketplace.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3 className="font-medium mb-3">Customer Service</h3>
          <ul className="font-extralight text-sm flex flex-col gap-2  ">
            {customerService.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3 className="font-medium mb-3">My Tata CLiQ</h3>
          <ul className="font-extralight text-sm flex flex-col gap-2  ">
            {myTataCliq.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="column w-4/12">
          <h3 className="font-medium mb-3">Tata CLiQ Offerings</h3>
          <p className="font-light font-mono hover:text-orange-700">
            Watches for Men | Campus Shoes | Sandals for Men | Sneakers for Men
            | Reebok Shoes | Cotton Kurtis | Woodland Shoes | Jumpsuits | Allen
            Solly | Spark Shoes | Gold Rings | Formal Shoes for Men | Sports
            Shoes for Men | Wallets for Men | Ladies Watches | Trolley Bags |
            Handbags for Women | Sling Bags for Women | Casual Shoes for Men |
            Boots for Men | Digital Watches | Sonata Watches | Sneakers for
            Women | Running Shoes | Puma Shoes | Boots for Women | Skechers |
            Malabargold | Fabindia | Utsa | Vark | Gia | LOV
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
