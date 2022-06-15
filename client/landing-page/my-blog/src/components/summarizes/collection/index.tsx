/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import api from "constants/api";
import moment from "utils/moment";
import { BookmarkBorder } from "@material-ui/icons";
import "./style.scss";

interface Category {
  id: string;
  createdAt: Date;
}

interface SubCategory {
  id: string;
  title: string;
  category: Category;
}

interface PostItem {
  id: string;
  title: string;
  thumbnail: string;
  subCategory: SubCategory;
  description: string;
  content: string;
}

export function SummarizePage() {
  const [state, setState] = useState([]);

  async function getPostList(quantity: Number = 2) {
    try {
      const res = await api.get(`/blog`);
      setState(res.data);
    } catch (error) {
      throw new Error(`msg: ${error}`);
    }
  }

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <div className="styles_collectionDetailPage__KlluL">
      <div className="styles_collectionBanner__16P3S">
        <div className="styles_collectionImage__3d1tn">
          <div
            style={{
              display: "block",
              overflow: "hidden",
              position: "relative",
              margin: 0,
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "block",
                paddingTop: "34.16095890410959%",
              }}
            ></div>
            <img
              alt="Tóm Lại Là&nbsp;"
              title="Tóm Lại Là&nbsp;"
              src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F17-aug-2021%2Ftom-lai-la.jpg&w=1152&q=75"
              decoding="async"
              sizes="100vw"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                padding: 0,
                border: "none",
                boxSizing: "border-box",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="styles_bannerContent__39YX9">
          <h1 className="6sm:typo-600_26pt typo-00_40pt styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_white__1Rw7L">
            Tóm Lại Là
          </h1>
          <p>
            Trả lời ngắn gọn các câu hỏi quan trọng nhất xung quanh một sự kiện:
            Ai? Làm gì? Khi nào? Ở đâu? Bao nhiêu? Như thế nào? Tại sao?
          </p>
          <div className="styles_horiDivider__3Xvjt"></div>
          <div className="styles_bannerActions__1B3cs">
            <button
              type="button"
              className="styles_btn__1CpdT styles_btn-large__24DCU styles_btn--default__eE97u styles_color--primary__2hQHw tracking-follow-series-detail-page"
              aria-label="follow"
            >
              <div className="styles_content-large__3Z5jU tracking-follow-series-detail-page flex items-center">
                <AddIcon />
                Theo dõi
              </div>
            </button>
            <div className="styles_divider__1r7kx"></div>
            <button
              aria-label="facebook share btn"
              className="react-share__ShareButton"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
              }}
            ></button>
            <button
              type="button"
              className="styles_btn__1CpdT styles_btn-medium__1pU1Q styles_btn--default__eE97u undefined styles_btnAction__1z4zx tracking-facebook-share-series-detail-page"
              aria-label="share-facebook"
              style={{ backgroundColor: "transparent", height: "40px" }}
            >
              <div className="styles_content-medium__1DXcn tracking-facebook-share-series-detail-page flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <rect fill="none" height="24" width="24" />
                  <path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z" />
                </svg>
              </div>
            </button>
            <div className="styles_btnCopy__1OHsM">
              <button
                type="button"
                className="styles_btn__1CpdT styles_btn-large__24DCU styles_btn--default__eE97u undefined styles_btnAction__1z4zx tracking-copy-link-series-detail-page"
                aria-label="copy-link"
                style={{ backgroundColor: "transparent", height: "40px" }}
              >
                <div className="styles_content-large__3Z5jU tracking-copy-link-series-detail-page flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    style={{ transform: "rotate(-45deg)" }}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {state.length > 0 ? (
        <div className="styles_blockArticles__wISj2">
          <div
            className="style_vct-grid-row__1XFKE style_vct-grid-row-start__BaCVh style_vct-grid-row-top__13cYD styles_articlesRow__2Ky0L"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {state.map((item: PostItem) => (
              <div
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  position: "relative",
                }}
                className="style_vct-grid-col-xs-12__2NvJy style_vct-grid-col-sm-6__2BV7B style_vct-grid-col-md-4__2EOgM"
                key={item.id}
              >
                <article
                  className="w-full styles_article_medium__1hFfJ"
                  style={{ width: "100%" }}
                >
                  <div className="styles_blockCardContent__1ScZt">
                    <div className="styles_blockImgFeature_medium__3rxtw relative">
                      <a
                        href={"/blog/" + item.id}
                        title=""
                        className="tracking-standard-article-detail"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="aspect-video w-full h-full"
                          loading="lazy"
                        />
                      </a>
                    </div>
                    <div>
                      <p className="styles_labelTopic_medium__b8pX6">
                        <a href="#" title={item.subCategory.title}>
                          {item.subCategory.title}
                        </a>
                      </p>
                      <h3
                        className="styles_title_medium__3Ecfp styles_title_withDes__1n9YW"
                        style={{ minHeight: "auto" }}
                      >
                        <a href={"/blog/" + item.id} title={item.title}>
                          {item.title}
                        </a>
                      </h3>
                      <div
                        className="styles_description__1BW1Z styles_description_medium__19iun"
                        style={{ minHeight: "auto" }}
                      >
                        {item.description}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center pr-4">
                          <div className="">
                            <p className="styles_timePublish__2Hct0">
                              {moment(item.subCategory.category.createdAt)
                                .locale("vi")
                                .format("ll")}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          aria-label="btn-save"
                          className="tracking-bookmark-undefined border-0 px-0 undefined"
                        >
                          <i className="cursor-pointer styles_s-icon__22aGG">
                            <BookmarkBorder />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
