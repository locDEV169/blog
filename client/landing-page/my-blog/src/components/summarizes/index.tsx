/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, useState } from "react"; // we need this to make JSX compile
import { BookmarkBorder } from "@material-ui/icons";
import moment from "utils/moment";
import api from "constants/api";

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
}

export default function PostItem(): JSX.Element {
  const [state, setState] = useState([]);

  async function getPostList(quantity: Number = 2) {
    try {
      const res = await api.get(`/blog?number=${quantity}`);
      setState(res.data);
    } catch (error) {
      throw new Error(`msg: ${error}`);
    }
  }

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <Fragment>
      {state.length > 0 ? 
      <div className="mt-20 xs:mt-14">
        <div className="flex items-end justify-between mb-6 xs:mb-4">
          <div>
            <h2 className="styles_title__2Bx-A  text-black inline-block uppercase m-0 typo-700_40pt">
              Tóm
              <br />
              Lại Là
            </h2>
            <p className="styles_description__1uLpK">
              Trả lời ngắn gọn các câu hỏi quan trọng nhất xung quanh một sự
              kiện: Ai? Làm gì? Khi nào? Ở đâu? Bao nhiêu? Như thế nào? Tại sao?
            </p>
          </div>
          <div className="sm:hidden">
            <button className="tracking-pinned-series-homepagev2-see-all min-w-[104px] styles_s-btn__nIocM styles_stroke__37Lvd styles_s-btn_40__m7Z3H styles_text-only__1p2V4 styles_primary__1WMTj">
              <a
                className="text-14pt inline-block pt-1 text-inherit"
                href="/collection/summarize"
                title="Button see all"
              >
                Xem tất cả
              </a>
            </button>
          </div>
        </div>
        <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
          {state.slice(0, 2).map((item: PostItem) => (
            <div
              className="styles_s-column__-NKo1 styles_sm__col-2__2wjfk styles_xs__col-1__28DRI styles_spacing-8__1CfRH"
              key={item.id}
            >
              <article className="w-full tracking-pinned-series-homepagev2-article-1">
                <div className="relative">
                  <div className="styles_blockImgFeature__h3qPT relative">
                    <a
                      className="tracking-standard-article-detail"
                      title={item.title}
                      href={`/blog/${item.id}`}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <img
                        src={item.thumbnail}
                        className="aspect-video w-full h-full"
                      />
                      <div
                        className="opacity-90 absolute w-full h-full bottom-0 z-0 rounded-8pt"
                        style={{
                          background:
                            "linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 80%)",
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="styles_blockInfoArticle__2-O12 styles_blockInfoArticle_large__2kjHw">
                    <div className="styles_blockTopicTime__32VZ3">
                      <p className="styles_labelTopic__38Nws">
                        <a href="#" title={item.subCategory.title}>
                          {item.subCategory.title}
                        </a>
                      </p>
                      <div
                        style={{
                          padding: "0px 8px",
                          color: "rgb(191, 191, 191)",
                        }}
                      >
                        ·
                      </div>
                      <p className="styles_timePublish__3wuyv">
                        {moment(item.subCategory.category.createdAt)
                          .locale("vi")
                          .format("ll")}
                      </p>
                    </div>
                    <div className="styles_blockTitleBookmark__2wNok">
                      <h3 className="styles_title__ESIOl styles_title_large__2NhLh">
                        <a href={`/blog/${item.id}`} title={item.title}>
                          "{item.title}"
                        </a>
                      </h3>
                      <div className="styles_blockBtnBookmark__xT-R1 styles_blockBtnBookmark_large__2rN3L">
                        <button className="tracking-bookmark-undefined">
                          <BookmarkBorder />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div> : ""}
    </Fragment>
  );
}
