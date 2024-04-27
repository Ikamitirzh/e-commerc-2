import React, { useState } from "react";
import Ratting from "../components/Ratting";
const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews
        </li>
      </ul>

      {/* desc & review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* add view field */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="massage"
                    id="massage"
                    rows="8"
                    placeholder="Type Here Massage"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* description */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            fugiat iste dolorem cumque quisquam at autem esse voluptatem id
            perspiciatis blanditiis, voluptates, ad culpa voluptas. Commodi
            fugit cum reprehenderit, similique porro quia dolorem cupiditate
            saepe officia dolores debitis odio deserunt laboriosam quasi
            quisquam mollitia quis nobis itaque maxime amet quam? Nesciunt
            adipisci cupiditate ex similique quam recusandae magni! Libero,
            vitae. Aut pariatur neque quisquam! Reiciendis et laudantium
            debitis, quia, aut totam fugit natus odio iusto saepe sit iste
            quisquam. Autem rerum numquam sint, facere ullam suscipit, omnis,
            veritatis aliquid accusantium vero culpa. Eos sed nobis labore
            minima, sequi voluptates magnam!
          </p>
          <div className="post-item">
            <div className="post-thumb">
                <img src="/src/assests/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
                <ul className="lab-ul">
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, tempore!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veritatis repellendus dignissimos.</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente!</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            fugiat iste dolorem cumque quisquam at autem esse voluptatem id
            perspiciatis blanditiis, voluptates, ad culpa voluptas. Commodi
            fugit cum reprehenderit, similique porro quia dolorem cupiditate
            saepe officia dolores debitis odio deserunt laboriosam quasi
            quisquam mollitia quis nobis itaque maxime amet quam? Nesciunt
            adipisci cupiditate ex similique quam recusandae magni! Libero,
            vitae. Aut pariatur neque quisquam! Reiciendis et laudantium
            debitis, quia, aut totam fugit natus odio iusto saepe sit iste
            quisquam. Autem rerum numquam sint, facere ullam suscipit, omnis,
            veritatis aliquid accusantium vero culpa. Eos sed nobis labore
            minima, sequi voluptates magnam!
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
