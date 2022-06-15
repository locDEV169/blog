/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import { useState, useEffect, Fragment } from "react";
import api from "constants/api";
import { useParams } from "react-router-dom";
import "./style.scss";
import moment from "utils/moment";
import { ArrowForwardIosRounded } from "@material-ui/icons";
const PostData = {
  id: "",
  title: "",
  thumbnail: "",
  content: "",
  description: "",
  subCategory: {
    id: "",
    title: "",
    category: {
      id: "",
      title: "",
    },
  },
};
export function PostDetail() {
  const [state, setState] = useState(PostData);
  const { id } = useParams();
  async function getPostById() {
    try {
      const res = await api.get(`/blog/${id}`);
      const dataPost = res.data;
      setState(dataPost);
    } catch (error) {
      throw new Error(`Message: ${error}`);
    }
  }

  useEffect(() => {
    getPostById();
  }, []);

  const Post = () => {
    return (
      <section className="styles_articleDetailContent__2K3mk">
        <span></span>
        <div className="styles_articleContentTop__3a-DY">
          <div className="mt-6">
            <div className="w-fit">
              <div className="relative flex justify-start">
                <span className="styles_articleInfoDateTime__2LlvN">
                  {moment().lang("vi").format("ll")}
                </span>
              </div>
            </div>
            <div className="styles_breadcrumb__35i2A">
              <a
                href="/vn/chu-de/xu-huong-cuoc-song"
                title="Xu Hướng Cuộc Sống"
              >
                {state.subCategory.category.title}
              </a>
              <ArrowForwardIosRounded
                fontSize="inherit"
                style={{ color: "#bfbfbf" }}
              />
              <a
                href="/vn/chu-de/xu-huong-cuoc-song"
                title="Xu Hướng Cuộc Sống"
              >
                {state.subCategory.title}
              </a>
              <ArrowForwardIosRounded
                fontSize="inherit"
                style={{ color: "#bfbfbf" }}
              />
              <a
                href="/vn/chu-de/xu-huong-cuoc-song"
                title="Xu Hướng Cuộc Sống"
              >
                Tóm Lại Là
              </a>
            </div>
          </div>
          <h1
            className="styles_articleTitle__2TmKa"
            style={{ fontSize: "40px", lineHeight: "54px" }}
          >
            {state.title}
          </h1>
          <div
            className="styles_articleExcerpt__13pI-"
            style={{
              fontSize: "16px",
              lineHeight: "28px",
              marginBottom: "24px",
            }}
          >
           {state.description}
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center">
              <a
                href="/vn/thong-tin-ca-nhan/chu-ng"
                className="tracking-author-profile"
              >
                <div className="styles_avatar__M3Jph styles_avatar__3YsM5">
                  <img
                    src="https://img.vietcetera.com/uploads/avatar-images/23-apr-2022/chu-ng-1650687027743-160x160.jpg"
                    alt="chung"
                    width="67"
                    height="67"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="styles_articleAuthorInfo__m7roT">
                <p className="typo-caption_12pt uppercase styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                  Editor
                </p>
                <a
                  className="text-secondaryDarkGreen font-semibold text-14pt tracking-author-profile inline-block cursor-pointer duration-300"
                  href="/vn/thong-tin-ca-nhan/chu-ng"
                >
                  <span className="flex items-center h-[inherit] w-[inherit]">
                    chu ng
                  </span>
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="cursor-pointer flex items-center relative">
                <button
                  className="flex items-center border-0 px-0 ml-4 styles_btnSocial__kc0NN"
                  aria-label="love button"
                >
                  <i className="w-6 styles_s-icon__22aGG">
                    <svg
                      className="block "
                      width="24"
                      height="24"
                      fill="rgb(85, 85, 85)"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="s-main-element"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.2475 5.00976C9.69035 4.45341 8.71625 3.89408 6.91904 4.34283C5.11565 4.79312 3.78525 6.13476 3.34335 7.78897C2.90965 9.41249 3.30207 11.474 5.24418 13.4129L11.3426 19.5012C11.769 19.9269 12.4574 19.9268 12.8837 19.5009C14.2532 18.1325 16.4294 15.9585 18.9788 13.413C20.9199 11.4747 21.3126 9.41315 20.8789 7.78931C20.4372 6.13492 19.107 4.79311 17.3033 4.34284C15.5055 3.89404 14.5312 4.45347 13.9741 5.00976C13.6693 5.31406 13.4596 5.65143 13.3258 5.91851C13.2599 6.05021 13.2151 6.15945 13.1882 6.23098C13.1749 6.26657 13.1661 6.2923 13.1616 6.30617L13.1581 6.31715C13.0217 6.78082 12.5955 7.09984 12.1109 7.09987C11.6263 7.0999 11.2001 6.78094 11.0637 6.3173L11.0602 6.30629C11.0557 6.29241 11.0469 6.26669 11.0335 6.23108C11.0067 6.15955 10.9619 6.05029 10.8959 5.91858C10.7621 5.65148 10.5523 5.31408 10.2475 5.00976ZM12.1108 3.81752C12.2088 3.70071 12.3152 3.58375 12.4306 3.46855C13.5106 2.39015 15.2649 1.58733 17.8327 2.22833C20.3946 2.86786 22.3386 4.79544 22.9881 7.22778C23.6458 9.69069 22.9468 12.5332 20.5223 14.9542C17.9731 17.4995 15.7971 19.6733 14.4277 21.0416C13.1492 22.319 11.0784 22.3196 9.79921 21.0426L3.7008 14.9542C1.27529 12.5327 0.576305 9.69013 1.23424 7.22722C1.88398 4.795 3.82828 2.86785 6.38949 2.22834C8.95688 1.58729 10.7111 2.39021 11.791 3.46855C11.9064 3.58375 12.0128 3.70071 12.1108 3.81752Z"
                      ></path>
                    </svg>
                  </i>
                </button>
                <span className="typo-caption_12pt ml-1 styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                  23
                </span>
                <span className="typo-caption_12pt styles_loveCount__3xkWb styles_hideNumber__37HCc styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_white__1Rw7L">
                  +0
                </span>
                <div className="styles_animation__1_Qrz ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                    width="800"
                    height="800"
                    preserveAspectRatio="xMidYMid meet"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "translate3d(0px, 0px, 0px)",
                      contentVisibility: "visible",
                    }}
                  >
                    <defs>
                      <clipPath id="__lottie_element_2">
                        <rect width="800" height="800" x="0" y="0"></rect>
                      </clipPath>
                      <clipPath id="__lottie_element_16">
                        <path
                          fill="#ffffff"
                          clipRule="nonzero"
                          d=" M-266.6669921875,-233.3179931640625 C-266.6669921875,-233.3179931640625 -266.6669921875,400.0199890136719 -266.6669921875,400.0199890136719 C-266.6669921875,400.0199890136719 399.9930114746094,400.0199890136719 399.9930114746094,400.0199890136719 C399.9930114746094,400.0199890136719 399.9930114746094,-233.3179931640625 399.9930114746094,-233.3179931640625 C399.9930114746094,-233.3179931640625 -266.6669921875,-233.3179931640625 -266.6669921875,-233.3179931640625"
                          fillOpacity="1"
                        ></path>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_2)">
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path></path>
                        </g>
                      </g>
                      <g
                        clipPath="url(#__lottie_element_16)"
                        transform="matrix(0.1803700029850006,0,0,0.1803700029850006,387.97528076171875,384.9692077636719)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g
                          opacity="1"
                          transform="matrix(33.33332824707031,0,0,33.33332824707031,0,0)"
                        >
                          <path
                            fill="rgb(32,14,50)"
                            fillOpacity="1"
                            d=" M5.869999885559082,-3.0160000324249268 C5.485000133514404,-3.1389999389648438 5.073999881744385,-2.927000045776367 4.951000213623047,-2.5429999828338623 C4.828000068664551,-2.1589999198913574 5.039999961853027,-1.746999979019165 5.425000190734863,-1.6239999532699585 C6.181000232696533,-1.3830000162124634 6.71999979019165,-0.7020000219345093 6.788000106811523,0.10100000351667404 C6.822000026702881,0.503000020980835 7.175000190734863,0.8019999861717224 7.578000068664551,0.7680000066757202 C7.980999946594238,0.734000027179718 8.279999732971191,0.38100001215934753 8.246000289916992,-0.020999999716877937 C8.128999710083008,-1.4110000133514404 7.190999984741211,-2.5940001010894775 5.869999885559082,-3.0160000324249268z M1.57,-4.51 C1.57,-4.51 1.38,-4.65 1.38,-4.65 C0.07,-5.54 -1.57,-5.78 -3.07,-5.29 C-5.91,-4.38 -7.2,-1.22 -6.21,1.87 C-5.66,3.44 -4.76,4.87 -3.59,6.03 C-1.85,7.73 0.08,9.23 2.14,10.5 C2.14,10.5 2,10.41 2,10.41 C2,10.41 2.47,10.12 2.47,10.12 C4.1,9.06 5.64,7.86 7.06,6.54 C7.06,6.54 7.59,6.04 7.59,6.04 C8.77,4.87 9.66,3.44 10.21,1.88 C11.2,-1.22 9.91,-4.38 7.06,-5.29 C5.49,-5.8 3.77,-5.51 2.44,-4.51 C2.18,-4.32 1.83,-4.32 1.57,-4.51z M-7.6,2.33 C-8.83,-1.49 -7.19,-5.5 -3.52,-6.69 C-1.76,-7.25 0.14,-7.05 1.73,-6.14 C1.73,-6.14 2,-5.99 2,-5.99 C2,-5.99 2.26,-6.15 2.26,-6.15 C3.77,-7 5.56,-7.23 7.25,-6.76 C7.25,-6.76 7.51,-6.69 7.51,-6.69 C11.19,-5.5 12.83,-1.49 11.59,2.34 C10.98,4.13 9.96,5.75 8.62,7.08 C6.79,8.85 4.78,10.42 2.62,11.75 C2.62,11.75 2.39,11.89 2.39,11.89 C2.16,12.03 1.86,12.04 1.63,11.9 C1.63,11.9 1.38,11.75 1.38,11.75 C-0.78,10.42 -2.79,8.85 -4.62,7.08 C-5.95,5.75 -6.97,4.13 -7.6,2.33z"
                          ></path>
                          <g opacity="1" transform="matrix(1,0,0,1,2,2.5)"></g>
                        </g>
                      </g>
                      <g
                        transform="matrix(0,0,0,0,400.63299560546875,400.79998779296875)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                          <path
                            fill="rgb(0,119,62)"
                            fillOpacity="1"
                            d=" M5.849999904632568,-7 C6.480999946594238,-7 7.111000061035156,-6.910999774932861 7.710000038146973,-6.710000038146973 C7.710000038146973,-6.710000038146973 7.710000038146973,-6.710000038146973 7.710000038146973,-6.710000038146973 C11.401000022888184,-5.510000228881836 12.730999946594238,-1.4600000381469727 11.619999885559082,2.0799999237060547 C10.989999771118164,3.8889999389648438 9.960000038146973,5.539999961853027 8.611000061035156,6.888999938964844 C6.679999828338623,8.758999824523926 4.560999870300293,10.418999671936035 2.2799999713897705,11.848999977111816 C2.2799999713897705,11.848999977111816 2.0299999713897705,12 2.0299999713897705,12 C2.0299999713897705,12 1.7699999809265137,11.83899974822998 1.7699999809265137,11.83899974822998 C-0.5189999938011169,10.418999671936035 -2.6500000953674316,8.758999824523926 -4.598999977111816,6.879000186920166 C-5.939000129699707,5.53000020980835 -6.96999979019165,3.8889999389648438 -7.610000133514404,2.0799999237060547 C-8.739999771118164,-1.4600000381469727 -7.409999847412109,-5.510000228881836 -3.678999900817871,-6.730999946594238 C-3.3889999389648438,-6.830999851226807 -3.0899999141693115,-6.901000022888184 -2.7899999618530273,-6.940000057220459 C-2.7899999618530273,-6.940000057220459 -2.6700000762939453,-6.940000057220459 -2.6700000762939453,-6.940000057220459 C-2.3889999389648438,-6.980999946594238 -2.109999895095825,-7 -1.8300000429153442,-7 C-1.8300000429153442,-7 -1.7200000286102295,-7 -1.7200000286102295,-7 C-1.090000033378601,-6.980999946594238 -0.47999998927116394,-6.870999813079834 0.11100000143051147,-6.670000076293945 C0.11100000143051147,-6.670000076293945 0.17000000178813934,-6.670000076293945 0.17000000178813934,-6.670000076293945 C0.20999999344348907,-6.651000022888184 0.23999999463558197,-6.630000114440918 0.25999999046325684,-6.611000061035156 C0.48100000619888306,-6.539999961853027 0.6899999976158142,-6.460000038146973 0.8899999856948853,-6.349999904632568 C0.8899999856948853,-6.349999904632568 1.2699999809265137,-6.179999828338623 1.2699999809265137,-6.179999828338623 C1.4199999570846558,-6.099999904632568 1.600000023841858,-5.951000213623047 1.7000000476837158,-5.889999866485596 C1.7999999523162842,-5.830999851226807 1.909999966621399,-5.769999980926514 2,-5.701000213623047 C3.1110000610351562,-6.550000190734863 4.460000038146973,-7.010000228881836 5.849999904632568,-7z M8.510000228881836,0.20000000298023224 C8.920000076293945,0.1889999955892563 9.270000457763672,-0.14000000059604645 9.300000190734863,-0.5609999895095825 C9.300000190734863,-0.5609999895095825 9.300000190734863,-0.6800000071525574 9.300000190734863,-0.6800000071525574 C9.329999923706055,-2.0810000896453857 8.480999946594238,-3.3499999046325684 7.190000057220459,-3.8399999141693115 C6.78000020980835,-3.9809999465942383 6.329999923706055,-3.759999990463257 6.179999828338623,-3.3399999141693115 C6.039999961853027,-2.9200000762939453 6.260000228881836,-2.4600000381469727 6.679999828338623,-2.311000108718872 C7.321000099182129,-2.071000099182129 7.75,-1.440000057220459 7.75,-0.7409999966621399 C7.75,-0.7409999966621399 7.75,-0.7099999785423279 7.75,-0.7099999785423279 C7.730999946594238,-0.48100000619888306 7.800000190734863,-0.25999999046325684 7.940000057220459,-0.09000000357627869 C8.079999923706055,0.07999999821186066 8.289999961853027,0.17900000512599945 8.510000228881836,0.20000000298023224z"
                          ></path>
                        </g>
                      </g>
                      <g style={{ display: "none" }}>
                        <g>
                          <path
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            fillOpacity="0"
                            strokeMiterlimit="4"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,400,400)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(0,158,82)"
                            fillOpacity="1"
                            d=" M-1,-5 C-1,-5 -265,-2 -265,-2"
                          ></path>
                        </g>
                      </g>
                      <g
                        transform="matrix(1,0,0,1,400,400)"
                        opacity="1"
                        style={{ display: "block" }}
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            fill="rgb(0,158,82)"
                            fillOpacity="1"
                            d=" M-1,-3 C-1,-3 147,-143 147,-143"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <button
                aria-label="facebook share btn"
                className="react-share__ShareButton flex items-center border-0 px-0 ml-4 styles_btnSocial__kc0NN"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "0px",
                  font: "inherit",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
                <i className="w-6 styles_s-icon__22aGG">
                  <svg
                    className="block "
                    width="24"
                    height="24"
                    fill="rgb(85, 85, 85)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="s-main-element"
                      d="M9.29003 22L9.26136 12.9091H5.625V9.27273H9.26136V7C9.26136 3.626 11.3507 2 14.3606 2C15.8023 2 17.0414 2.10734 17.4025 2.15532V5.68135L15.3151 5.68229C13.6781 5.68229 13.3612 6.46013 13.3612 7.60155V9.27273H18.125L16.3068 12.9091H13.3612V22H9.29003Z"
                    ></path>
                  </svg>
                </i>
                <span className="typo-caption_12pt underline decoration-1 ml-1 hover:text-primary styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                  Share
                </span>
              </button>
              <div className="relative flex justify-center">
                <span className="styles_s-tooltip__1Eb0- styles_hide__-V0nl styles_bottom__eyZoj styles_bottom__eyZoj">
                  Đã sao chép
                </span>
                <button
                  className="flex items-center border-0 px-0 ml-4 styles_btnSocial__kc0NN"
                  aria-label="share facebook button"
                >
                  <i className="w-6 styles_s-icon__22aGG">
                    <svg
                      className="block "
                      width="24"
                      height="24"
                      fill="rgb(85, 85, 85)"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="s-main-element"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.1425 7.85829C16.6 8.31581 16.6 9.0576 16.1425 9.51512L9.51512 16.1425C9.0576 16.6 8.31581 16.6 7.85828 16.1425C7.40076 15.6849 7.40076 14.9432 7.85828 14.4856L14.4856 7.85829C14.9431 7.40076 15.6849 7.40076 16.1425 7.85829Z"
                      ></path>
                      <path
                        className="s-main-element"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.02938 10.3433C7.48691 10.8008 7.48691 11.5426 7.02938 12.0001L5.37255 13.6569C3.99998 15.0295 3.99998 17.2549 5.37255 18.6275C6.74511 20 8.97049 20 10.3431 18.6275L11.9999 16.9706C12.4574 16.5131 13.1992 16.5131 13.6567 16.9706C14.1142 17.4281 14.1142 18.1699 13.6567 18.6275L11.9999 20.2843C9.71228 22.5719 6.00332 22.5719 3.71571 20.2843C1.4281 17.9967 1.4281 14.2877 3.71571 12.0001L5.37255 10.3433C5.83007 9.88575 6.57186 9.88575 7.02938 10.3433Z"
                      ></path>
                      <path
                        className="s-main-element"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.6275 5.37255C17.2549 3.99998 15.0295 3.99998 13.6569 5.37255L12.0001 7.02938C11.5426 7.48691 10.8008 7.48691 10.3433 7.02938C9.88575 6.57186 9.88575 5.83007 10.3433 5.37255L12.0001 3.71571C14.2877 1.4281 17.9967 1.4281 20.2843 3.71571C22.5719 6.00332 22.5719 9.71228 20.2843 11.9999L18.6275 13.6567C18.1699 14.1142 17.4281 14.1142 16.9706 13.6567C16.5131 13.1992 16.5131 12.4574 16.9706 11.9999L18.6275 10.3431C20 8.97049 20 6.74511 18.6275 5.37255Z"
                      ></path>
                    </svg>
                  </i>
                  <span className="typo-caption_12pt underline decoration-1 ml-1 styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                    Copy link
                  </span>
                </button>
              </div>
              <div className="relative flex justify-center">
                <span className="styles_s-tooltip__1Eb0- styles_hide__-V0nl styles_bottom__eyZoj styles_bottom__eyZoj">
                  Đã lưu
                </span>
                <button
                  className="flex items-center border-0 px-0 ml-4 styles_btnSocial__kc0NN"
                  aria-label="bookmark button"
                >
                  <i className="w-6 styles_s-icon__22aGG">
                    <svg
                      className="block "
                      width="24"
                      height="24"
                      fill="rgb(85, 85, 85)"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="s-main-element"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.70996 4.57168C3.70996 3.42752 4.63749 2.5 5.78165 2.5H18.2118C19.3559 2.5 20.2834 3.42752 20.2834 4.57168V19.4242C20.2834 21.3371 17.9123 22.228 16.6526 20.7884L11.9967 15.4673L7.34074 20.7884C6.08107 22.228 3.70996 21.3371 3.70996 19.4242V4.57168ZM18.2118 4.57168L5.78165 4.57168V19.4242L10.4376 14.1031C11.263 13.1598 12.7304 13.1598 13.5558 14.1031L18.2118 19.4242V4.57168Z"
                      ></path>
                    </svg>
                  </i>
                  <span className="typo-caption_12pt underline decoration-1 ml-1 styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                    Bookmark
                  </span>
                </button>
              </div>
              <button
                className="flex items-center border-0 px-0 ml-4 relative styles_btnSocial__kc0NN "
                aria-label="open comment button"
              >
                <i className="w-6 styles_s-icon__22aGG">
                  <svg
                    className="block "
                    width="24"
                    height="24"
                    fill="rgb(85, 85, 85)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path
                      className="s-main-element"
                      opacity="0.5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1546 14.4794C9.31449 14.4794 8.63281 15.16 8.63281 16.0002C8.63281 16.8405 9.31449 17.5211 10.1546 17.5211C10.9948 17.5211 11.6764 16.8405 11.6764 16.0002C11.6764 15.16 10.9948 14.4794 10.1546 14.4794ZM16.0705 14.4794C15.2303 14.4794 14.5487 15.16 14.5487 16.0002C14.5487 16.8405 15.2303 17.5211 16.0705 17.5211C16.9106 17.5211 17.5923 16.8405 17.5923 16.0002C17.5923 15.16 16.9106 14.4794 16.0705 14.4794ZM20.4645 16.0002C20.4645 15.16 21.1462 14.4794 21.9863 14.4794C22.8264 14.4794 23.5081 15.16 23.5081 16.0002C23.5081 16.8405 22.8264 17.5211 21.9863 17.5211C21.1462 17.5211 20.4645 16.8405 20.4645 16.0002Z"
                    ></path>
                    <path
                      className="s-main-element"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.61412 9.06682C7.04738 5.07603 11.3951 2.64819 16.0773 2.66701C21.6153 2.70771 26.5537 6.15739 28.4901 11.3385C30.4266 16.5202 28.9582 22.3575 24.7996 26.0105C20.6416 29.663 14.6572 30.3738 9.75717 27.7973L9.69609 27.7759C9.68656 27.7704 9.68503 27.7656 9.68298 27.7593L8.77294 27.2443C8.58759 27.1684 8.3822 27.1561 8.2568 27.1879C7.31079 27.528 6.34396 27.8073 5.36222 28.0241L5.18227 28.0457C4.10153 28.0697 3.557 27.3685 3.557 26.3479L3.58305 26.1293C3.82847 25.1143 4.13605 24.1153 4.4861 23.1902C4.5404 23.0151 4.52232 22.8256 4.42862 22.65L4.18353 22.1722C2.01717 18.0302 2.18054 13.0581 4.61412 9.06682ZM16.0645 4.52617L15.69 4.53203C11.8066 4.64314 8.23116 6.70827 6.2026 10.0353C4.10889 13.4692 3.96835 17.7465 5.83549 21.3165L6.07672 21.787C6.39756 22.3874 6.46469 23.091 6.24517 23.7935C5.90404 24.6995 5.61891 25.6256 5.3914 26.5665L5.51688 26.0764L6.04363 25.9388C6.40495 25.8392 6.76806 25.7292 7.13694 25.6073L7.6951 25.4156C8.28471 25.2533 8.91158 25.2908 9.52913 25.5454C9.65876 25.6078 9.8196 25.6946 10.0224 25.8092L10.5854 26.1323L10.6097 26.139L10.5933 26.1368L10.9769 26.329C15.0109 28.2768 19.8168 27.704 23.2782 24.8621L23.5718 24.6128C27.1501 21.4694 28.4133 16.4476 26.7473 11.9898C25.0811 7.53148 20.8308 4.56242 16.0645 4.52617Z"
                    ></path>
                  </svg>
                </i>
                <span
                  className="typo-caption_12pt decoration-1 ml-1  styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-"
                  data-talk-id="#"
                  data-talk-mode="number"
                >
                  0
                </span>
                <span className="typo-caption_12pt underline decoration-1 ml-1  styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                  Bình luận
                </span>
              </button>
              <div className=" fixed right-0 top-0 bottom-0 z-[99999] bg-white shadow-lg shadow-grey translate-x-[576px] transition-transform duration-300 w-[576px]"></div>
              <div className=" fixed right-0 top-0 bottom-0 left-0 bg-primary opacity-20 z-[1000] cursor-pointer hidden"></div>
            </div>
          </div>
        </div>
        <div className="max-w-[969px] mx-auto">
          <div className="styles_blockImgFeature__2o6ti">
            <picture>
              <source media="(max-width: 568px)" />
              <source media="(min-width: 569px)" />
              <img
                width="768"
                height="384"
                src={state.thumbnail}
                className="responsive"
                style={{ width: "100%", height: "auto" }}
                alt={state.title}
              />
            </picture>
          </div>
          <p
            className="md:px-4"
            style={{
              fontFamily: "Merriweather",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "14px",
              lineHeight: "22px",
              // font-feature-settings: 'pnum' on, 'lnum' on;
              color: "#757575",
            }}
          >
            Nguồn: Dân Trí
          </p>
        </div>
        <div className="max-w-[679px] sm:max-w-[540px] mx-auto mb-8 xs:px-4">
          <div className="p-4 border rounded-md border-inkBlur border-solid">
            <div className="styles_s-row__2dAIq styles_spacing-0__uExHg">
              <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-9__KjAFR styles_lg__span-9__3W4fF styles_xl__span-9__3oBkb styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-0__2TTHy">
                <div className="flex items-center mb-2">
                  <i className="styles_s-icon__22aGG">
                    <svg
                      className="block"
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        className="s-main-element"
                        d="M3.99875 2C3.44716 2 3 2.44468 3 2.99323V14.9119C3 15.4605 3.44716 15.9052 3.99875 15.9052H12.9875C13.5391 15.9052 13.9862 15.4605 13.9862 14.9119V2.99323C13.9862 2.44468 13.5391 2 12.9875 2H3.99875Z"
                        //  style={{fill: "rgb(85, 85, 85)"}}
                      ></path>
                      <path
                        className="s-main-element"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0184 7.20271C16.1624 6.67361 16.7108 6.36089 17.2432 6.50423L21.2619 7.58612C21.7933 7.7292 22.1082 8.27271 21.9658 8.80122L18.6077 21.2643C18.4651 21.7937 17.9175 22.1079 17.3847 21.9659L9.73528 19.9276C9.20249 19.7856 8.88622 19.2413 9.02888 18.7118C9.17154 18.1823 9.71911 17.8682 10.2519 18.0102L16.9366 19.7914L19.7787 9.24331L16.7216 8.42028C16.1892 8.27694 15.8743 7.73182 16.0184 7.20271Z"
                        //  style={{fill: "rgb(85, 85, 85)"}}
                      ></path>
                    </svg>
                  </i>
                  <span className="typo-600_20pt ml-2 styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_primary__62Rq9">
                    Bài viết này thuộc series Tóm Lại Lại
                  </span>
                </div>
                <span className="typo-body_16pt styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                  Trả lời ngắn gọn các câu hỏi quan trọng nhất xung quanh một sự
                  kiện: Ai? Làm gì? Khi nào? Ở đâu? Bao nhiêu? Như thế nào? Tại
                  sao?
                </span>
              </div>
              <div className="!items-center !justify-center sm:pt-4 styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-3__2DVBw styles_lg__span-3__3tz_E styles_xl__span-3__3-Ivg styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-0__2TTHy">
                <button
                  className="xs:w-full styles_s-btn__nIocM styles_stroke__37Lvd styles_s-btn_32__c65xi styles_text-only__1p2V4 styles_primary__1WMTj"
                  aria-label="follow"
                >
                  Theo dõi
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div
          id="article-detail-content"
          className="styles_contentWrapper__1p-fV"
        >
          <div>
            <div className="styles_articleContentDetail__chWfu article-content-detail">
              <div>
                <p>{state.content}</p>
              </div>
              <div className="styles_bannerInArticleWrapper__1sCeG">
                <span className="typo-caption_12pt uppercase !pt-2 block styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                  - Quảng cáo -
                </span>
                <a
                  title="Ứng dụng Vietcetera"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  href="https://vietcetera.onelink.me/oxdV/efc645eb"
                  className="styles_blockBannerAppHoriMobile__1ThWQ in-article"
                >
                  <picture>
                    <source media="(max-width: 576px)" />
                    <source media="(min-width: 577px)" />
                    <img
                      height="160"
                      width="375"
                      alt="Ứng dụng Vietcetera"
                      src="https://img.vietcetera.com/uploads/images/04-apr-2022/image.png"
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mx-auto w-full max-w-xl xs:px-4">
            <span className="typo-body_14pt p-2 rounded-lg bg-lightest mr-3 mb-3 cursor-pointer styles_s-text__3a4If styles_primary__62Rq9">
              <a
                href="/vn/tags/ky-nang-song"
                rel="dofollow"
                title="Kỹ năng sống"
                className="text-inherit"
              >
                #Kỹ năng sống
              </a>
            </span>
          </div>
        </div>

        <span></span>
        <div className="styles_formWrapper__bT2HA">
          <div className="bg-vanilla rounded-lg !p-0 sm:rounded-none md:h-[248px] xs:h-auto">
            <div className="style_vct-grid-row__1XFKE style_vct-grid-row-start__BaCVh style_vct-grid-row-top__13cYD h-full">
              <div className="mt-auto style_vct-grid-col-xs-12__2NvJy style_vct-grid-col-sm-4__2Bv-7 style_vct-grid-col-md-5__29ywh style_vct-grid-col-lg-5__1qjkv">
                <img
                  src="https://img.vietcetera.com/uploads/images/17-jan-2022/form-thumbnail.png"
                  width="500"
                  height="288"
                  className="styles_imgThumbnail__2usj-"
                  alt="Thumbnail Newsletter"
                />
              </div>
              <div className="pr-5 my-auto xs:pr-0 style_vct-grid-col-xs-12__2NvJy style_vct-grid-col-sm-8__1RJbY style_vct-grid-col-md-7__31t_d style_vct-grid-col-lg-7__2Tryf">
                <div className="styles_formContent__3IroA">
                  <div className="text-left xs:max-w-[343px] xs:text-center xs:mx-auto">
                    <span className="typo-600_32pt lg:typo-600_24pt styles_s-text__3a4If styles_error__2yN9-">
                      5&nbsp;tin tức&nbsp;
                    </span>
                    <span className="typo-600_32pt lg:typo-600_24pt styles_s-text__3a4If styles_primary__62Rq9">
                      bạn cần biết mỗi tuần
                    </span>
                  </div>
                  <p className="typo-body_14pt mt-2 styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                    Mỗi thứ Tư, bạn sẽ nhận được email tổng hợp những tin tức
                    nổi bật tuần qua một cách súc tích, dễ hiểu, v�&nbsp;
                    ho�&nbsp;n to�&nbsp;n miễn phí!
                  </p>
                  <form className="flex flex-nowrap mt-6 sm:mt-4 xs:block">
                    <div className="mr-2 w-full mb-0 xs:!mb-3 md:text-left">
                      <input
                        placeholder="Nhập địa chỉ email của bạn"
                        className="h-12 rounded-lg border px-4 outline-0 w-full appearance-none focus:outline-none mb-1 md:mb-0 focus:border-primary border-white"
                      />
                    </div>
                    <button
                      className="w-[144px] !rounded-8pt xs:w-full styles_s-btn__nIocM styles_fill__1BnSR styles_s-btn_48__-v4Bk styles_text-only__1p2V4 styles_error__1MCFK"
                      type="submit"
                    >
                      Đăng ký!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mọi người đều đọc */}
        <div className="mb-16 xs:px-4">
          <div className="w-[90%] max-w-[764px] mx-auto mt-16 xs:w-full">
            <div className="styles_popularArticles__2Wxqp">
              <div className="flex items-end justify-between mb-6 xs:mb-4">
                <div>
                  <span className="styles_title__2Bx-A text-black inline-block uppercase m-0 typo-700_40pt">
                    Mọi người
                    <br />
                    đều đọc
                  </span>
                </div>
                <div className="sm:hidden"></div>
              </div>
              <section className="styles_sectionPopular__3aMNv">
                <div>
                  <div className="styles_articlePopular__2fbhp">
                    <span className="styles_number__QgUL8">1</span>
                    <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-1">
                      <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                        <a
                          href="https://img.vietcetera.com/uploads/images/20-may-2022/cmunitour-vanlang-bobbyvux-28.04.2022-17-1653027312195.jpg"
                          title="Hành trình qua 2 thành phố và 8 trường Đại Học của Cởi Mở đi Unitour"
                          className="tracking-standard-article-detail"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            src="https://img.vietcetera.com/uploads/images/20-may-2022/cmunitour-vanlang-bobbyvux-28.04.2022-17-1653027312195.jpg"
                            alt="Hành trình qua 2 thành phố và 8 trường Đại Học của Cởi Mở đi Unitour"
                            className="aspect-video w-full h-full"
                          />
                        </a>
                      </div>
                      <div className="styles_infoArticle_medium__34lmw w-full">
                        <p className="styles_labelTopic__1sR4U">
                          <a
                            href="/vn/chu-de/xu-huong-cuoc-song"
                            title="Xu Hướng Cuộc Sống"
                          >
                            Xu Hướng Cuộc Sống
                          </a>
                        </p>
                        <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                          <a
                            href="/vn/hanh-trinh-qua-2-thanh-pho-va-8-truong-dai-hoc-cua-coi-mo-di-unitour"
                            title="Hành trình qua 2 thành phố và 8 trường Đại Học của Cởi Mở đi Unitour"
                            className="tracking-standard-article-detail"
                          >
                            Hành trình qua 2 thành phố và 8 trường Đại Học của Cởi Mở đi Unitour
                          </a>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div className="styles_articlePopular__2fbhp">
                    <span className="styles_number__QgUL8">2</span>
                    <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-2">
                      <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                        <a
                          href="/vn/top-gun-cua-tom-cruise-chi-nhung-ke-uu-tu-moi-tru-lai"
                          title="Top Gun của Tom Cruise: Chỉ những kẻ ưu tú mới trụ lại"
                          className="tracking-standard-article-detail"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            src="https://img.vietcetera.com/uploads/images/30-may-2022/dienanh-guide-1653908464709.jpg"
                            alt="Top Gun của Tom Cruise: Chỉ những kẻ ưu tú mới trụ lại"
                            className="aspect-video w-full h-full"
                          />
                        </a>
                      </div>
                      <div className="styles_infoArticle_medium__34lmw w-full">
                        <p className="styles_labelTopic__1sR4U">
                          <a href="/vn/chu-de/dien-anh" title="Điện Ảnh">
                            Điện Ảnh
                          </a>
                        </p>
                        <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                          <a
                            href="https://img.vietcetera.com/uploads/images/30-may-2022/dienanh-guide-1653908464709.jpg"
                            title="Top Gun của Tom Cruise: Chỉ những kẻ ưu tú mới trụ lại"
                            className="tracking-standard-article-detail"
                          >
                            Top Gun của Tom Cruise: Chỉ những kẻ ưu tú mới trụ
                            lại
                          </a>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div className="styles_articlePopular__2fbhp">
                    <span className="styles_number__QgUL8">3</span>
                    <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-3">
                      <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                        <a
                          href="/vn/lay-chong-khong-phai-la-tam-bang-dam-bao-tai-chinh"
                          title="“Lấy chồng không phải là ‘tấm bằng’ đảm bảo tài chính”"
                          className="tracking-standard-article-detail"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            src="https://img.vietcetera.com/uploads/images/02-jun-2022/chinguyen-1654142112863.jpg"
                            alt="“Lấy chồng không phải là ‘tấm bằng’ đảm bảo tài chính”"
                            className="aspect-video w-full h-full"
                          />
                        </a>
                      </div>
                      <div className="styles_infoArticle_medium__34lmw w-full">
                        <p className="styles_labelTopic__1sR4U">
                          <a
                            href="/vn/chu-de/tai-chinh-ca-nhan"
                            title=" Tài Chính Cá Nhân"
                          >
                            Tài Chính Cá Nhân
                          </a>
                        </p>
                        <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                          <a
                            href="https://img.vietcetera.com/uploads/images/02-jun-2022/chinguyen-1654142112863.jpg"
                            title="“Lấy chồng không phải là ‘tấm bằng’ đảm bảo tài chính”"
                            className="tracking-standard-article-detail"
                          >
                           “Lấy chồng không phải là ‘tấm bằng’ đảm bảo tài chính”
                          </a>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div className="styles_articlePopular__2fbhp">
                    <span className="styles_number__QgUL8">4</span>
                    <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-4">
                      <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                        <a
                          href="/vn/la-thu-khong-gui-me"
                          title="Lá thư (không) gửi mẹ"
                          className="tracking-standard-article-detail"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            src="https://img.vietcetera.com/uploads/images/02-jun-2022/nhatky-guide-1654142344594.jpg"
                            alt="Lá thư (không) gửi mẹ"
                            className="aspect-video w-full h-full"
                          />
                        </a>
                      </div>
                      <div className="styles_infoArticle_medium__34lmw w-full">
                        <p className="styles_labelTopic__1sR4U">
                          <a href="/vn/chu-de/gia-dinh" title="Gia Đình ">
                            Gia Đình
                          </a>
                        </p>
                        <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                          <a
                            href="/vn/la-thu-khong-gui-me"
                            title="Lá thư (không) gửi mẹ"
                            className="tracking-standard-article-detail"
                          >
                            Lá thư (không) gửi mẹ
                          </a>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div className="styles_articlePopular__2fbhp">
                    <span className="styles_number__QgUL8">5</span>
                    <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-5">
                      <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                        <a
                          href="/vn/sach-self-help-yeu-hay-ghet"
                          title="Sách self-help: Yêu hay ghét?"
                          className="tracking-standard-article-detail"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            src="https://img.vietcetera.com/uploads/images/10-jun-2022/220610-chatluongsong-1654834585677.jpg"
                            alt="Sách self-help: Yêu hay ghét?"
                            className="aspect-video w-full h-full"
                          />
                        </a>
                      </div>
                      <div className="styles_infoArticle_medium__34lmw w-full">
                        <p className="styles_labelTopic__1sR4U">
                          <a
                            href="/vn/chu-de/chat-luong-song"
                            title="Chất Lượng Sống"
                          >
                            Chất Lượng Sống
                          </a>
                        </p>
                        <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                          <a
                            href="/vn/sach-self-help-yeu-hay-ghet"
                            title="Sách self-help: Yêu hay ghét?"
                            className="tracking-standard-article-detail"
                          >
                            Sách self-help: Yêu hay ghét?
                          </a>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <Fragment>
      <Post />
    </Fragment>
  );
}
