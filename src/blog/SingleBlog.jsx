import React from "react";
import blogList from "../utilis/blogdata";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
  { link: "#", iconName: "icofont-facebook", className: "facebook" },
  { link: "#", iconName: "icofont-twitter", className: "twitter" },
  { link: "#", iconName: "icofont-linkedin", className: "linkedin" },
  { link: "#", iconName: "icofont-instagram", className: "instagram" },
  { link: "#", iconName: "icofont-pinterest", className: "pinterest" },
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Detail"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>{" "}
                                        {val.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Dicta amet provident dolorum
                                  eveniet qui fuga autem consequuntur optio,
                                  quam corporis error veritatis incidunt
                                  laudantium doloribus officia blanditiis ullam
                                  laboriosam earum id quos illum quaerat
                                  quibusdam. Autem, quod perferendis iste fugit
                                  cumque illum doloremque sit accusantium
                                  eveniet, maxime eos aliquam vero excepturi
                                  magni? Ea magni pariatur aperiam delectus
                                  repellat accusantium quod.
                                </p>

                                <blockquote>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Earum unde repellat
                                    similique ipsa. Suscipit exercitationem
                                    voluptate, reprehenderit perspiciatis
                                    voluptates nulla ipsa, a quam, delectus
                                    explicabo totam. Autem mollitia harum porro.
                                  </p>
                                  <cite>
                                    <a href="#">...Melissa Hunter</a>
                                  </cite>
                                </blockquote>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Placeat corporis vitae est
                                  fugit quaerat cumque consectetur incidunt.
                                  Laudantium hic maxime obcaecati in. Autem
                                  corrupti asperiores at? Obcaecati minus
                                  voluptatem tempora cupiditate laborum
                                  voluptatibus explicabo aliquam quae nostrum
                                  totam ipsam reprehenderit commodi porro, natus
                                  possimus soluta earum, minima nihil eaque
                                  dolorem, illo laboriosam magni? Unde enim
                                  excepturi, dolore quos eaque fugiat veritatis
                                  animi earum deserunt saepe, voluptatibus
                                  possimus incidunt error accusantium.
                                </p>
                                <img
                                  src="/src/assets/images/blog/single/01.jpg"
                                  alt=""
                                />

                                <p>
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Deserunt assumenda dolor
                                  quasi doloribus alias cumque fuga, corrupti
                                  eos expedita! Perspiciatis ex natus
                                  accusantium neque dolore excepturi, minus aut,
                                  exercitationem iste a pariatur ipsa
                                  consequuntur nam, inventore quibusdam labore.
                                  Id ipsam, excepturi mollitia facere, nemo, et
                                  assumenda eaque perferendis optio obcaecati
                                  vel alias earum. Provident quod enim quibusdam
                                  quisquam similique tempore aliquid
                                  consequuntur quae accusantium nam.
                                </p>

                                <div className="video-thumb">
                                  <img
                                    src="/src/assets/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a
                                    href="/src/assets/images/blog/single/02.jpg"
                                    className="video-button popup"
                                  >
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>

                                <p>
                                  Lorem ipsum dolor sit amet consectetur,
                                  adipisicing elit. Tempora necessitatibus animi
                                  adipisci corrupti ipsam numquam tenetur
                                  obcaecati ratione repellat, porro nostrum
                                  beatae, vero totam placeat repudiandae impedit
                                  non tempore laboriosam laudantium ducimus
                                  accusantium. Beatae perferendis quisquam
                                  obcaecati incidunt voluptates quo nobis autem?
                                  Et, hic accusamus?
                                </p>

                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">personal</a>
                                    </li>
                                  </ul>

                                  <ul className="lab-ul social-icons">
                                    {
                                      socialList.map((val, i) => (
                                        <li key={i}>
                                          <a href="#" className={val.className}>
                                            <i className={val.iconName}></i>
                                          </a>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>


                    <div className="navigations-part">
                      <div className="left">
                        <a href="#" className="title">
                          <i className="icofont-double-left"></i> Previous Blog 
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis vitae doloremque
                        </a>
                      </div>

                      <div className="right">
                        <a href="#" className="title">
                          <i className="icofont-double-right"></i> Previous Blog 
                        </a>
                        <a href="#" className="title">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis vitae doloremque
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>



            <div className="col-lg-4 col-12">
              <aside>
                <Tags />
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
