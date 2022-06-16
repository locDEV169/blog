/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import api from "constants/api";
import { useEffect, useState } from "react";
import "./style.scss";

interface Post {
  id: string;
  title: string;
  thumbnail: string;
}
export function TrendingPage() {
  const [state, setState] = useState([]);
  async function getPostTrending(quantity: Number = 5) {
    try {
      const res = await api.get(`/blog/newest?number=${quantity}`);
      setState(res.data);
    } catch (error) {
      throw new Error(`Message: ${error}`);
    }
  }
  useEffect(() => {
    getPostTrending();
  }, []);

  return (
    <section className="mt-20 xs:mt-14">
      {state.length > 0 ? (
        <>
          <div className="styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xs__col-1__28DRI styles_spacing-0__2TTHy">
            <div className="styles_popularArticles__2Wxqp">
              <div className="flex items-end justify-between mb-6 xs:mb-4">
                <div>
                  <span className="styles_title__2Bx-A text-black inline-block uppercase m-0 typo-700_40pt">
                    Xu
                    <br />
                    hướng
                  </span>
                </div>
              </div>
              {state.slice(0, 5).map((item: Post, number) => (
                <section
                  className="styles_sectionPopular__3aMNvv"
                  key={item.id}
                >
                  <div>
                    <div className="styles_articlePopular__2fbhp">
                      <span className="styles_number__QgUL8">{number + 1}</span>
                      <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-1">
                        <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                          <a
                            href={"/blog/" + item.id}
                            className="tracking-standard-article-detail"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <img
                              src={item.thumbnail}
                              className="aspect-video w-full h-full"
                            />
                          </a>
                        </div>
                        <div className="styles_infoArticle_medium__34lmw w-full">
                          <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                            <a
                              href={"/blog/" + item.id}
                              title="#"
                              className="tracking-standard-article-detail"
                            >
                              {item.title}
                            </a>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
          {/* hidden */}
          <div className="!items-end styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xs__col-1__28DRI styles_spacing-0__2TTHy">
            <div className="sx:hidden">
              <div className="styles_blockBannerApp__2c6Ds"></div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
