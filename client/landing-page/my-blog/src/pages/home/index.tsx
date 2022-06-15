/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
import { BookmarkBorder, PlayArrow } from "@material-ui/icons";
import PostItem from "components/summarizes";
import React, { Fragment, useEffect, useState } from "react";
import api from './../../constants/api';

interface State {
    dataCategory: []
}

export default function HomePage() {
    const [state, setState] = useState<State>({
        dataCategory: []
    })

    async function getDataList() {
        try {
            const response = await api.get('/category')
            const { categories: dataCategory } = response.data
            setState((prev) => ({ ...prev, dataCategory }))
        } catch (err) {
        }
    }

    useEffect(() => {
        getDataList()
    }, [])

    return (
        <Fragment>
            {hardCodeNews()}
            {ads_1()}
            {hardCode_Tom_Lai()}
            {hardCodeXuHuong()}
            {/* Quảng cáo */}
            <div className="mt-14 box-border relative sm:mt-14">
                <div className="styles_s-row__2dAIq styles_spacing-0__uExHg">
                    <div className="!items-center styles_s-column__-NKo1 styles_span-full__1F0qG styles_col-1__Olh1j styles_xs__col-1__28DRI styles_spacing-0__2TTHy">
                        <a className="flex items-center justify-center max-w-[720px] w-full -ml-2pt tracking-leaderboard-ho-tro-nguoi-tram-cam" href="#">
                            <picture>
                                <img className="styles_bannerImg__3NBG-" style={{ height: '160px', maxWidth: '720px' }} src="https://img.vietcetera.com/uploads/images/16-sep-2021/ho-tro-tram-cam.png" />
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
            {hardCodeXemGiHomnay()}
            {/* Quảng cáo */}
            <div className="mt-14 box-border relative sm:mt-14">
                <div className="styles_s-row__2dAIq styles_spacing-0__uExHg">
                    <div className="!items-center styles_s-column__-NKo1 styles_span-full__1F0qG styles_col-1__Olh1j styles_xs__col-1__28DRI styles_spacing-0__2TTHy">
                        <a className="flex items-center justify-center max-w-[720px] w-full -ml-2pt tracking-leaderboard-ho-tro-nguoi-tram-cam" href="#">
                            <picture>
                                <img className="styles_bannerImg__3NBG-" style={{ height: '160px', maxWidth: '720px' }} src="https://img.vietcetera.com/uploads/images/16-sep-2021/ho-tro-tram-cam.png" />
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
            <div className="styles_sectionCategoryArticle__2xOfZ">
                <div className="styles_formSubscribe__21mUg">
                    <div className="bg-vanilla rounded-lg !p-0 sm:rounded-none md:h-[248px] xs:h-auto">
                        <div className="style_vct-grid-row__1XFKE style_vct-grid-row-start__BaCVh style_vct-grid-row-top__13cYD h-full">
                            <div className="mt-auto style_vct-grid-col-xs-12__2NvJy style_vct-grid-col-sm-4__2Bv-7 style_vct-grid-col-md-5__29ywh style_vct-grid-col-lg-5__1qjkv">
                                <img src="https://img.vietcetera.com/uploads/images/17-jan-2022/form-thumbnail.png" width="500" height="288" className="styles_imgThumbnail__2usj-" alt="Thumbnail Newsletter" />
                            </div>
                            <div className="pr-5 my-auto xs:pr-0 style_vct-grid-col-xs-12__2NvJy style_vct-grid-col-sm-8__1RJbY style_vct-grid-col-md-7__31t_d style_vct-grid-col-lg-7__2Tryf">
                                <div className="styles_formContent__3IroA ">
                                    <div className="text-left xs:max-w-[343px] xs:text-center xs:mx-auto">
                                        <span className="typo-600_32pt lg:typo-600_24pt styles_s-text__3a4If styles_error__2yN9-">
                                            5&nbsp;tin tức&nbsp;
                                        </span>
                                        <span className="typo-600_32pt lg:typo-600_24pt styles_s-text__3a4If styles_primary__62Rq9">
                                            bạn cần biết mỗi tuần
                                        </span>
                                    </div>
                                    <p className="typo-body_14pt mt-2 styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                        Mỗi thứ Tư, bạn sẽ nhận được email tổng hợp những tin tức nổi bật tuần qua một cách súc tích, dễ hiểu, và hoàn toàn miễn phí!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {hardCodeBlogKinhDoanh()}
                {hardCodeBlogCuocSong()}
                {hardCodeBlogSangTao()}
            </div>
        </Fragment>
    );
}

function hardCodeNews() {
    const content_1: string = 'Những "bí kíp" viết lách từ editor nhà Vietcetera"alt="Những "bí kíp" viết lách từ editor nhà Vietcetera';

    return <div className="mt-10 xs:mt-8 sm:mt-10">
        <div className="flex items-end justify-between mb-6 xs:mb-4">
            <div>
                <h2 className="styles_title__2Bx-A text-black  inline-block uppercase m-0 typo-700_40pt">Mới<br />nhất</h2>
            </div>
            <div className="sm:hidden"></div>
        </div>
        <section>
            <div className="!mb-6 styles_s-row__2dAIq styles_spacing-1__1NTr8">
                <div className="styles_s-column__-NKo1 styles_sm__col-2__2wjfk styles_md__col-2__3AN-6 styles_lg__col-2__axZl9 styles_xs__col-1__28DRI styles_spacing-1__9KNWt">
                    <div className="xs:mb-4 w-full">
                        <article className="w-full tracking-featured-article-1-homepagev2">
                            <div className="relative">
                                <div className="styles_blockImgFeature__h3qPT relative">
                                    <a className="tracking-standard-article-detail" href="#" style={{ width: '100%', height: '100%' }}>
                                        <img src="https://img.vietcetera.com/uploads/images/25-may-2022/220525-vietceteviet-feature-1653482115034.jpg" className="aspect-video w-full h-full" alt={content_1} />
                                        <div className="opacity-90 absolute w-full h-full bottom-0 z-0 rounded-8pt" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 80%)" }}></div>
                                    </a>
                                </div>
                                <div className="styles_blockInfoArticle__2-O12 styles_blockInfoArticle_large__2kjHw">
                                    <div className="styles_blockTopicTime__32VZ3">
                                        <p className="styles_labelTopic__38Nws">
                                            <a href="#" title="Editor's Picks">Editor's Picks</a>
                                        </p>
                                    </div>
                                    <div className="styles_blockTitleBookmark__2wNok">
                                        <h3 className="styles_title__ESIOl styles_title_large__2NhLh">
                                            <a href="#" title={content_1}>Những "bí kíp" viết lách từ editor nhà Vietcetera</a>
                                        </h3>
                                        <div className="styles_blockBtnBookmark__xT-R1 styles_blockBtnBookmark_large__2rN3L">
                                            <button className="tracking-bookmark-homepage">
                                                <BookmarkBorder />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="styles_s-column__-NKo1 styles_sm__col-2__2wjfk styles_md__col-2__3AN-6 styles_lg__col-2__axZl9 styles_xs__col-1__28DRI styles_spacing-1__9KNWt">
                    <div className="xs:mb-4 w-full">
                        <article className="w-full tracking-featured-article-1-homepagev2">
                            <div className="relative">
                                <div className="styles_blockImgFeature__h3qPT relative">
                                    <a className="tracking-standard-article-detail" href="#" style={{ width: '100%', height: '100%' }}>
                                        <img src="https://img.vietcetera.com/uploads/images/26-may-2022/dienanh-guide1-1653555559826.jpg" className="aspect-video w-full h-full" alt={content_1} />
                                        <div className="opacity-90 absolute w-full h-full bottom-0 z-0 rounded-8pt" style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 80%)" }}></div>
                                    </a>
                                </div>
                                <div className="styles_blockInfoArticle__2-O12 styles_blockInfoArticle_large__2kjHw">
                                    <div className="styles_blockTopicTime__32VZ3">
                                        <p className="styles_labelTopic__38Nws">
                                            <a href="#" title="Editor's Picks">Điện ảnh</a>
                                        </p>
                                    </div>
                                    <div className="styles_blockTitleBookmark__2wNok">
                                        <h3 className="styles_title__ESIOl styles_title_large__2NhLh">
                                            <a href="#" title={content_1}>Love, Death + Robots 3: Tiếp nối những câu hỏi trăn trở không hồi đáp</a>
                                        </h3>
                                        <div className="styles_blockBtnBookmark__xT-R1 styles_blockBtnBookmark_large__2rN3L">
                                            <button className="tracking-bookmark-homepage">
                                                <BookmarkBorder />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <div className="styles_s-row__2dAIq styles_spacing-6__3X6kt">
                <div className="styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xl__col-4__3s0ce styles_xs__col-1__28DRI styles_spacing-6__2qMgP">
                    <article className="w-full styles_article_medium__1hFfJ tracking-latest-article-1-homepagev2 !mb-0">
                        <div className="styles_blockCardContent__1ScZt styles_blockCardContent_hori__2Pwtt">
                            <div className="styles_blockImgFeature_medium__3rxtw relative">
                                <a href='#' style={{ width: '100%', height: '100%' }}>
                                    <img src="https://img.vietcetera.com/uploads/images/25-may-2022/274781062-2975066346091627-5312571682365351177-n-1653446651279.jpg"
                                        className="aspect-video w-full h-full"
                                    />
                                </a>
                            </div>
                            <div>
                                <p className="styles_labelTopic_medium__b8pX6">
                                    <a href="#" title="Xu Hướng Kinh Doanh ">
                                        Xu Hướng Kinh Doanh
                                    </a>
                                </p>
                                <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                    <a href="#" title="&quot;Đa dạng và hoà hợp&quot; - Trọng tâm của các doanh nghiệp Bắc Âu tại Việt Nam">
                                        "Đa dạng và hoà hợp" - Trọng tâm của các doanh nghiệp Bắc Âu tại Việt Nam
                                    </a>
                                </h3>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center pr-4">
                                    <a className="styles_avatar_medium__1YLue" href='#'>
                                        <div className="styles_avatar__M3Jph  ">
                                            <img src="https://img.vietcetera.com/uploads/avatar-images/29-sep-2020/vietcetera-1601371344865-40x40.jpg" alt="Vietcetera" width="67" height="67" loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="styles_flexAuthorTime_hori__3Me6s">
                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                            <a href="/vn/thong-tin-ca-nhan/vietcetera" title="Vietcetera" className="text-inherit">Vietcetera</a>
                                        </span>
                                        <p className="styles_timePublish__2Hct0">22 giờ trước</p>
                                    </div>
                                </div>
                                <button className="tracking-bookmark-homepage border-0 px-0 undefined">
                                    <BookmarkBorder />
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xl__col-4__3s0ce styles_xs__col-1__28DRI styles_spacing-6__2qMgP">
                    <article className="w-full styles_article_medium__1hFfJ tracking-latest-article-1-homepagev2 !mb-0">
                        <div className="styles_blockCardContent__1ScZt styles_blockCardContent_hori__2Pwtt">
                            <div className="styles_blockImgFeature_medium__3rxtw relative">
                                <a href='#' style={{ width: '100%', height: '100%' }}>
                                    <img src="https://img.vietcetera.com/uploads/images/25-may-2022/hi-nh-1-copy-1653449466188.jpg"
                                        className="aspect-video w-full h-full"
                                    />
                                </a>
                            </div>
                            <div>
                                <p className="styles_labelTopic_medium__b8pX6">
                                    <a href="#" title="Nghệ Thuật & Thiết Kế">
                                        Nghệ Thuật & Thiết Kế
                                    </a>
                                </p>
                                <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                    <a href="#" title="Grand Marina, Saigon – Dự án bất động sản hàng hiệu trọng điểm của Marriott International tại Việt Nam ">
                                        Grand Marina, Saigon – Dự án bất động sản hàng hiệu trọng điểm của Marriott International tại Việt Nam
                                    </a>
                                </h3>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center pr-4">
                                    <a className="styles_avatar_medium__1YLue" href='#'>
                                        <div className="styles_avatar__M3Jph  ">
                                            <img src="https://img.vietcetera.com/uploads/avatar-images/08-feb-2021/asdasd-1612761448041-40x40.jpg" alt="Vietcetera" width="67" height="67" loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="styles_flexAuthorTime_hori__3Me6s">
                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                            <a href="#" title="Vietcetera" className="text-inherit">Việt Tân</a>
                                        </span>
                                        <p className="styles_timePublish__2Hct0">22 giờ trước</p>
                                    </div>
                                </div>
                                <button className="tracking-bookmark-homepage border-0 px-0 undefined">
                                    <BookmarkBorder />
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xl__col-4__3s0ce styles_xs__col-1__28DRI styles_spacing-6__2qMgP">
                    <article className="w-full styles_article_medium__1hFfJ tracking-latest-article-1-homepagev2 !mb-0">
                        <div className="styles_blockCardContent__1ScZt styles_blockCardContent_hori__2Pwtt">
                            <div className="styles_blockImgFeature_medium__3rxtw relative">
                                <a href='#' style={{ width: '100%', height: '100%' }}>
                                    <img src="https://img.vietcetera.com/uploads/images/25-may-2022/nhatky-guide-1--1653448980969.jpg"
                                        className="aspect-video w-full h-full"
                                    />
                                </a>
                            </div>
                            <div>
                                <p className="styles_labelTopic_medium__b8pX6">
                                    <a href="#" title="Xu Hướng Kinh Doanh ">
                                        Thương
                                    </a>
                                </p>
                                <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                    <a href="#" title="Tôi kết hôn vì hai người tìm thấy nhau và muốn cùng xây đắp một mái nhà">
                                        Tôi kết hôn vì hai người tìm thấy nhau và muốn cùng xây đắp một mái nhà
                                    </a>
                                </h3>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center pr-4">
                                    <a className="styles_avatar_medium__1YLue" href='#'>
                                        <div className="styles_avatar__M3Jph  ">
                                            <img src="https://img.vietcetera.com/uploads/avatar-images/20-sep-2021/thu-vu-1632125875520-40x40.jpg" alt="Vietcetera" width="67" height="67" loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="styles_flexAuthorTime_hori__3Me6s">
                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                            <a href="#" title="Thư Vũ" className="text-inherit">Thư Vũ</a>
                                        </span>
                                        <p className="styles_timePublish__2Hct0">26 Thg 05</p>
                                    </div>
                                </div>
                                <button className="tracking-bookmark-homepage border-0 px-0 undefined">
                                    <BookmarkBorder />
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xl__col-4__3s0ce styles_xs__col-1__28DRI styles_spacing-6__2qMgP">
                    <article className="w-full styles_article_medium__1hFfJ tracking-latest-article-1-homepagev2 !mb-0">
                        <div className="styles_blockCardContent__1ScZt styles_blockCardContent_hori__2Pwtt">
                            <div className="styles_blockImgFeature_medium__3rxtw relative">
                                <a href='#' style={{ width: '100%', height: '100%' }}>
                                    <img src="https://img.vietcetera.com/uploads/images/25-may-2022/feature-johnny-orlando-1653474098420.jpg"
                                        className="aspect-video w-full h-full"
                                    />
                                </a>
                            </div>
                            <div>
                                <p className="styles_labelTopic_medium__b8pX6">
                                    <a href="#" title="Xu Hướng Kinh Doanh ">
                                        Âm nhạc
                                    </a>
                                </p>
                                <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                    <a href="#" title="Johnny Orlando: &quot;Suy cho cùng, tôi yêu âm nhạc và yêu việc sản xuất âm nhạc.&quot;">
                                        Johnny Orlando: "Suy cho cùng, tôi yêu âm nhạc và yêu việc sản xuất âm nhạc."
                                    </a>
                                </h3>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center pr-4">
                                    <a className="styles_avatar_medium__1YLue" href='#'>
                                        <div className="styles_avatar__M3Jph  ">
                                            <img src="https://img.vietcetera.com/uploads/avatar-images/29-sep-2020/vietcetera-1601371344865-40x40.jpg" alt="Vietcetera" width="67" height="67" loading="lazy" />
                                        </div>
                                    </a>
                                    <div className="styles_flexAuthorTime_hori__3Me6s">
                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                            <a href="#" title="Sơn Hoàng" className="text-inherit">Sơn hoàng</a>
                                        </span>
                                        <p className="styles_timePublish__2Hct0">2% Thg 05</p>
                                    </div>
                                </div>
                                <button className="tracking-bookmark-homepage border-0 px-0 undefined">
                                    <BookmarkBorder />
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
}

function ads_1() {
    return <div id="poll">
        <div className="mt-20 styles_s-poll__ny2u6">
            <div className="styles_s-poll__question__1uTDC">
                <p className="styles_subHeadingText__24s7L styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary__3QcBQ">Khảo sát</p>
                <h3 className="styles_pollQuestion__3CtlH styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_primary__62Rq9">Nghe podcast nhà Vietcetera, bạn thường ghé đâu?
                </h3>
            </div>
            <div className="styles_s-poll__pollContent__3GKVk">
                <div>
                    <div className="styles_pollOption__2-D8z">
                        <label className="styles_pollLabelWrapper__1HMXS">
                            <span className="styles_pollLabel__OQNon"><input type="radio" className="styles_pollLabelHiddenInput__1eNN4" />
                            </span>
                            <span className="typo-600_16pt text-ellipsis overflow-hidden max-w-[284px] whitespace-nowrap pr-4">
                                Website của Vietcetera
                            </span>
                        </label>
                    </div>
                    <div className="styles_pollOption__2-D8z">
                        <label className="styles_pollLabelWrapper__1HMXS">
                            <span className="styles_pollLabel__OQNon">
                                <input type="radio" className="styles_pollLabelHiddenInput__1eNN4" />
                            </span>
                            <span className="typo-600_16pt text-ellipsis overflow-hidden max-w-[284px] whitespace-nowrap pr-4">
                                App của Vietcetera
                            </span>
                        </label>
                    </div>
                    <div className="styles_pollOption__2-D8z"><label className="styles_pollLabelWrapper__1HMXS">
                        <span className="styles_pollLabel__OQNon"><input type="radio" className="styles_pollLabelHiddenInput__1eNN4" />
                        </span>
                        <span className="typo-600_16pt text-ellipsis overflow-hidden max-w-[284px] whitespace-nowrap pr-4">
                            YouTube
                        </span>
                    </label>
                    </div>
                    <div className="styles_pollOption__2-D8z">
                        <label className="styles_pollLabelWrapper__1HMXS">
                            <span className="styles_pollLabel__OQNon">
                                <input type="radio" className="styles_pollLabelHiddenInput__1eNN4" />
                            </span>
                            <span className="typo-600_16pt text-ellipsis overflow-hidden max-w-[284px] whitespace-nowrap pr-4">
                                Spotify
                            </span>
                        </label>
                    </div>
                    <div className="styles_pollOption__2-D8z">
                        <label className="styles_pollLabelWrapper__1HMXS">
                            <span className="styles_pollLabel__OQNon">
                                <input type="radio" className="styles_pollLabelHiddenInput__1eNN4" />
                            </span>
                            <span className="typo-600_16pt text-ellipsis overflow-hidden max-w-[284px] whitespace-nowrap pr-4">
                                Apple Podcast
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="md:hidden ml-8 w-[368px] h-[368px]">
                <img className="object-cover" src="https://img.vietcetera.com/uploads/images/25-may-2022/poll-home-page.jpeg" alt="Vietcetera poll image" width="368" height="368" />
            </div>
        </div>
    </div>
}

function hardCode_Tom_Lai() {
    return (
        <PostItem/>
    )
}

function hardCodeXuHuong() {
    return <section className="mt-20 xs:mt-14">
        <div className="styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xs__col-1__28DRI styles_spacing-0__2TTHy">
            <div className="styles_popularArticles__2Wxqp">
                <div className="flex items-end justify-between mb-6 xs:mb-4">
                    <div>
                        <span className="styles_title__2Bx-A text-black inline-block uppercase m-0 typo-700_40pt">
                            Xu<br />hướng
                        </span>
                    </div>
                </div>
                <section className="styles_sectionPopular__3aMNvv">
                    <div>
                        <div className="styles_articlePopular__2fbhp">
                            <span className="styles_number__QgUL8">1</span>
                            <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-1">
                                <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                                    <a href="#" className="tracking-standard-article-detail" style={{ width: '100%', height: '100%' }}>
                                        <img src="https://img.vietcetera.com/uploads/images/20-may-2022/dang-tien-template-1653036949536.jpg" className="aspect-video w-full h-full" />
                                    </a>
                                </div>
                                <div className="styles_infoArticle_medium__34lmw w-full">
                                    <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                                        <a href="#" title="#" className="tracking-standard-article-detail">
                                            Đáng Tiền: 10 Triệu để bỏ việc và đi bán cá viên chiên
                                        </a>
                                    </h3>
                                </div>
                            </article>
                        </div>
                        <div className="styles_articlePopular__2fbhp">
                            <span className="styles_number__QgUL8">2</span>
                            <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-1">
                                <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                                    <a href="#" className="tracking-standard-article-detail" style={{ width: '100%', height: '100%' }}>
                                        <img src="https://img.vietcetera.com/uploads/images/20-may-2022/220520-coimo-1653023689739.jpg" className="aspect-video w-full h-full" />
                                    </a>
                                </div>
                                <div className="styles_infoArticle_medium__34lmw w-full">
                                    <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                                        <a href="#" title="Đáng Tiền: 10 Triệu để bỏ việc và đi bán cá viên chiên" className="tracking-standard-article-detail">
                                            Cởi Mở: Lần đầu làm tình để biết mình không thích tình dục
                                        </a>
                                    </h3>
                                </div>
                            </article>
                        </div>
                        <div className="styles_articlePopular__2fbhp">
                            <span className="styles_number__QgUL8">3</span>
                            <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-1">
                                <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                                    <a href="#" className="tracking-standard-article-detail" style={{ width: '100%', height: '100%' }}>
                                        <img src="https://img.vietcetera.com/uploads/images/17-dec-2021/defense.gov-news-photo-090806-f-5957s-099-imresizer-1639718499375.jpg" className="aspect-video w-full h-full" />
                                    </a>
                                </div>
                                <div className="styles_infoArticle_medium__34lmw w-full">
                                    <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                                        <a href="#" title="#" className="tracking-standard-article-detail">
                                            Quy luật đảo ngược – Khi cố quá thành "quá cố"Đáng Tiền: 10 Triệu để bỏ việc và đi bán cá viên chiên
                                        </a>
                                    </h3>
                                </div>
                            </article>
                        </div>
                        <div className="styles_articlePopular__2fbhp">
                            <span className="styles_number__QgUL8">4</span>
                            <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-1">
                                <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                                    <a href="#" className="tracking-standard-article-detail" style={{ width: '100%', height: '100%' }}>
                                        <img src="https://img.vietcetera.com/uploads/images/20-may-2022/giaotiep-feature-1653027930238.jpg" className="aspect-video w-full h-full" />
                                    </a>
                                </div>
                                <div className="styles_infoArticle_medium__34lmw w-full">
                                    <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                                        <a href="#" title="#" className="tracking-standard-article-detail">
                                            Giao tiếp chốn văn phòng: Nói thẳng nói thật hay nói một hiểu mười
                                        </a>
                                    </h3>
                                </div>
                            </article>
                        </div>
                        <div className="styles_articlePopular__2fbhp">
                            <span className="styles_number__QgUL8">5</span>
                            <article className="styles_horiArticle__Y_jq8 tracking-popular-homepagev2-article-1">
                                <div className="styles_imageFeature__lpWle styles_imageFeature_medium__21EWG relative">
                                    <a href="#" className="tracking-standard-article-detail" style={{ width: '100%', height: '100%' }}>
                                        <img src="https://img.vietcetera.com/uploads/images/23-may-2022/etienne-boulanger-ercpgyxnlto-unsplash-1653309312490.jpg" className="aspect-video w-full h-full" />
                                    </a>
                                </div>
                                <div className="styles_infoArticle_medium__34lmw w-full">
                                    <h3 className="styles_titleArticle__2tcxU styles_titleArticle_medium__1IU9u">
                                        <a href="#" title="#" className="tracking-standard-article-detail">
                                            Nốt lặng trong bản nhạc giao tiếp
                                        </a>
                                    </h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        {/* hidden */}
        <div className="!items-end styles_s-column__-NKo1 styles_sm__col-1__1fgQf styles_md__col-1__32Wpu styles_lg__col-2__axZl9 styles_xs__col-1__28DRI styles_spacing-0__2TTHy">
            <div className="sx:hidden">
                <div className="styles_blockBannerApp__2c6Ds"></div>
            </div>
        </div>
    </section>
}

function hardCodeXemGiHomnay() {
    return <div className="mt-20 xs:mt-14">
        <div className="flex items-end justify-between mb-6 xs:mb-4">
            <div>
                <span className="styles_title__2Bx-A text-black inline-block uppercase m-0 typo-700_40pt">
                    Xem gì<br /> hôm nay
                </span>
            </div>
            <div className="sm:hidden">
                <button className="tracking-video-homepagev2-see-all min-w-[104px] styles_s-btn__nIocM styles_stroke__37Lvd styles_s-btn_40__m7Z3H styles_text-only__1p2V4 styles_primary__1WMTj">
                    <a className="text-14pt inline-block pt-1 text-inherit" href="#" title="Button see all">
                        Xem tất cả
                    </a>
                </button>
            </div>
        </div>
        <section>
            <div className="mb-10">
                <div className="styles_verticalVideo__2n8Au styles_verticalVideo_flex__2MMJC">
                    <div className="styles_featureImgVideo__20LtO">
                        <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
                            <div style={{ display: 'block', boxSizing: 'border-box', paddingTop: '56.25%' }}></div>
                            <img
                                src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjOlrxZ0QhjA%2Fmaxresdefault.jpg&w=1152&q=75"
                                style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
                            />
                            <span className="styles_iconPlay__22eTJ styles_iconPlay_large__1b-Fg">
                                <PlayArrow className="svg-icon undefined undefined" style={{ color: 'white' }} fill="#FFF" />
                            </span>
                        </div>
                    </div>
                    <div className="styles_infoVideo__1Cltl">
                        <h3 className="styles_title_large__yacVX" style={{ minHeight: 'auto' }}>
                            Vào bar, đừng để cái nết đi chơi xa | Cởi Mở Happy Hour EP09
                        </h3>
                        <div className="styles_footerCard__1uR1l styles_footerCard_large__26cJ1">
                            <p>
                                <span>50:00</span>
                            </p>
                            <div style={{ padding: '0px 8px', color: 'rgb(117, 117, 117)' }}>·</div>
                            <p>2.9k lượt xem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-6__2iFEI styles_lg__span-3__3tz_E styles_xl__span-3__3-Ivg styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <div className="styles_verticalVideo__2n8Au">
                        <div className="styles_featureImgVideo__20LtO">
                            <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
                                <div style={{ display: 'block', boxSizing: 'border-box', paddingTop: '56.25%' }}></div>
                                <img
                                    alt="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10" title="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10"
                                    src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F5tV3fFxFG_A%2Fmaxresdefault.jpg&amp;w=1152&amp;q=75" decoding="async" sizes="100vw"
                                    style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                            <span className="styles_iconPlay__22eTJ styles_iconPlay_medium__2NSUz">
                                <PlayArrow className="svg-icon undefined undefined" style={{ color: 'white' }} fill="#FFF" />
                            </span>
                        </div>
                        <div className="styles_infoVideo__1Cltl">
                            <h3 className="styles_title_medium__FASLK" style={{ minHeight: '84px' }}>Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10</h3>
                            <div className="styles_footerCard__1uR1l styles_footerCard_medium__1KWkJ">
                                <p><span>35:10</span></p>
                                <div style={{ padding: '0px 8px', color: 'rgb(117, 117, 117)' }}>·</div>
                                <p>3.8k lượt xem</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-6__2iFEI styles_lg__span-3__3tz_E styles_xl__span-3__3-Ivg styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <div className="styles_verticalVideo__2n8Au">
                        <div className="styles_featureImgVideo__20LtO">
                            <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
                                <div style={{ display: 'block', boxSizing: 'border-box', paddingTop: '56.25%' }}></div>
                                <img
                                    alt="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10" title="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10"
                                    src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAKXU472qTGs%2Fhqdefault.jpg&w=1152&q=75" decoding="async" sizes="100vw"
                                    style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                            <span className="styles_iconPlay__22eTJ styles_iconPlay_medium__2NSUz">
                                <PlayArrow className="svg-icon undefined undefined" style={{ color: 'white' }} fill="#FFF" />
                            </span>
                        </div>
                        <div className="styles_infoVideo__1Cltl">
                            <h3 className="styles_title_medium__FASLK" style={{ minHeight: '84px' }}>
                                Bí mật làm nên danh tiếng thịt bò Australia | Taste of Australia EP01
                            </h3>
                            <div className="styles_footerCard__1uR1l styles_footerCard_medium__1KWkJ">
                                <p><span>22:49</span></p>
                                <div style={{ padding: '0px 8px', color: 'rgb(117, 117, 117)' }}>·</div>
                                <p>554 lượt xem</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-6__2iFEI styles_lg__span-3__3tz_E styles_xl__span-3__3-Ivg styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <div className="styles_verticalVideo__2n8Au">
                        <div className="styles_featureImgVideo__20LtO">
                            <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
                                <div style={{ display: 'block', boxSizing: 'border-box', paddingTop: '56.25%' }}></div>
                                <img
                                    alt="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10" title="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10"
                                    src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F70g4tO4_bTg%2Fhqdefault.jpg&w=1152&q=75" decoding="async" sizes="100vw"
                                    style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                            <span className="styles_iconPlay__22eTJ styles_iconPlay_medium__2NSUz">
                                <PlayArrow className="svg-icon undefined undefined" style={{ color: 'white' }} fill="#FFF" />
                            </span>
                        </div>
                        <div className="styles_infoVideo__1Cltl">
                            <h3 className="styles_title_medium__FASLK" style={{ minHeight: '84px' }}>
                                “Cách mạng hóa” không gian làm việc - Dương Đỗ, Co-Founder & CEO Toong co-working space | Blueprint
                            </h3>
                            <div className="styles_footerCard__1uR1l styles_footerCard_medium__1KWkJ">
                                <p><span>48:31</span></p>
                                <div style={{ padding: '0px 8px', color: 'rgb(117, 117, 117)' }}>·</div>
                                <p>6.3k lượt xem</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-6__2iFEI styles_lg__span-3__3tz_E styles_xl__span-3__3-Ivg styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <div className="styles_verticalVideo__2n8Au">
                        <div className="styles_featureImgVideo__20LtO">
                            <div style={{ display: 'block', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
                                <div style={{ display: 'block', boxSizing: 'border-box', paddingTop: '56.25%' }}></div>
                                <img
                                    alt="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10" title="Học nói không vì nói có quá nhiều rồi | Gen Z Truyền EP10"
                                    src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FxvTVSexeZFk%2Fhqdefault.jpg&w=1152&q=75" decoding="async" sizes="100vw"
                                    style={{ position: 'absolute', inset: '0px', boxSizing: 'border-box', padding: '0px', border: 'none', margin: 'auto', display: 'block', width: '0px', height: '0px', minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                            </div>
                            <span className="styles_iconPlay__22eTJ styles_iconPlay_medium__2NSUz">
                                <PlayArrow className="svg-icon undefined undefined" style={{ color: 'white' }} fill="#FFF" />
                            </span>
                        </div>
                        <div className="styles_infoVideo__1Cltl">
                            <h3 className="styles_title_medium__FASLK" style={{ minHeight: '84px' }}>
                                Người nhiều chữ luyện chữ ra sao? | Highlight | Have A Sip
                            </h3>
                            <div className="styles_footerCard__1uR1l styles_footerCard_medium__1KWkJ">
                                <p><span>07:20</span></p>
                                <div style={{ padding: '0px 8px', color: 'rgb(117, 117, 117)' }}>·</div>
                                <p>9k9 lượt xem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

function hardCodeBlogKinhDoanh() {
    return <div className="mt-20 xs:mt-14">
        <div className="flex items-end justify-between mb-6 xs:mb-4">
            <div>
                <span className="styles_title__2Bx-A text-black inline-block uppercase m-0 typo-700_40pt">Kinh<br />Doanh</span>
            </div>
            <div className="sm:hidden">
                <button className="tracking-category-kinh-doanh-homepagev2-see-all min-w-[104px] styles_s-btn__nIocM styles_stroke__37Lvd styles_s-btn_40__m7Z3H styles_text-only__1p2V4 styles_primary__1WMTj">
                    <a className="text-14pt inline-block pt-1 text-inherit" href="vn/chuyen-muc/kinh-doanh" title="Button see all">
                        Xem tất cả
                    </a>
                </button>
            </div>
        </div>
        <section>
            <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <article className="w-full styles_article_large__1NrSU styles_firstArticle__3z8NX tracking-category-kinh-doanh-homepagev2-card-click">
                        <div className="styles_blockCardContent__1ScZt">
                            <div className="styles_blockImgFeature_large__6lYoZ relative">
                                <a href="#">
                                    <img
                                        className="aspect-video w-full h-full"
                                        src="https://img.vietcetera.com/uploads/images/24-may-2022/220524-to-n-tie-n-1653374731455.jpg" />
                                </a>
                            </div>
                            <div>
                                <p className="styles_labelTopic_large__A9Wov">
                                    <a href="#" title="Tài Chính Cá Nhân">
                                        Tài Chính Cá Nhân
                                    </a>
                                </p>
                                <h3 className="styles_title_large__3wRkP" style={{ minHeight: 'auto' }}>
                                    <a href="#" title="Tốn Tiền: 50 USD hàng tháng cho nền tảng nội dung 18+">
                                        Tốn Tiền: 50 USD hàng tháng cho nền tảng nội dung 18+
                                    </a>
                                </h3>
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-start items-center pr-4">
                                        <a href="#" className="styles_avatar_large__1SHY-">
                                            <div className="styles_avatar__M3Jph">
                                                <img
                                                    className=""
                                                    width="67"
                                                    height="67"
                                                    loading="lazy"
                                                    src="https://img.vietcetera.com/uploads/avatar-images/23-apr-2022/chu-ng-1650687027743-40x40.jpg" />
                                            </div>
                                        </a>
                                        <div className="">
                                            <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                <a href="/vn/thong-tin-ca-nhan/chu-ng" title="chu ng" className="text-inherit">
                                                    chu ng
                                                </a>
                                            </span>
                                            <p className="styles_timePublish__2Hct0">25 Thg 05</p></div>
                                    </div>
                                    <button className="tracking-bookmark-undefined border-0 px-0 undefined">
                                        <BookmarkBorder />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/18-may-2022/220512-chieu-tuong-1652888198910.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">Tài Chính Cá Nhân</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    5 Chiêu tâm lý đứng sau thuật toán gây "nghiện" của Spotify
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Bích Hồ </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">25 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/24-may-2022/220524-cloutchaser-1653372841978.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">Văn hóa đi làm</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    Clout chaser - Theo đuổi tiếng tăm nhưng nhầm đường lạc lối
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Thư Thư </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">24 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/24-may-2022/220524-nhatkycongso-1653377521475.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">Văn Hóa đi làm</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    Tôi học viết lại từ đầu ở Vietcetera
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Sơn Hoàng </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">24 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/21-apr-2022/deutsches-haus-3-1650513422963.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">khởi nghiệp</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    Ra mắt Quỹ đầu tư Vietnam Innovators, được hậu thuẫn bởi Horst Geicke
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Hao Tran </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">24 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

function hardCodeBlogCuocSong() {
    return <div className="mt-20 xs:mt-14">
        <div className="flex items-end justify-between mb-6 xs:mb-4">
            <div>
                <span className="styles_title__2Bx-A text-black inline-block uppercase m-0 typo-700_40pt">Cuộc<br />Sống</span>
            </div>
            <div className="sm:hidden">
                <button className="tracking-category-cuoc-song-homepagev2-see-all min-w-[104px] styles_s-btn__nIocM styles_stroke__37Lvd styles_s-btn_40__m7Z3H styles_text-only__1p2V4 styles_primary__1WMTj">
                    <a className="text-14pt inline-block pt-1 text-inherit" href="vn/chuyen-muc/kinh-doanh" title="Button see all">
                        Xem tất cả
                    </a>
                </button>
            </div>
        </div>
        <section>
            <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-12__XUi1P styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <article className="w-full styles_article_large__1NrSU styles_firstArticle__3z8NX styles_firstArticleVariant__1ooQl tracking-category-cuoc-song-homepagev2-card-click">
                        <div className="styles_blockCardContent__1ScZt">
                            <div className="styles_blockImgFeature_large__6lYoZ relative">
                                <a href="#" className="tracking-standard-article-detail" style={{ width: '100%', height: '100%' }}>
                                    <img
                                        className="aspect-video w-full h-full"
                                        src="https://img.vietcetera.com/uploads/images/25-may-2022/nhatky-guide-1--1653448980969.jpg" />
                                </a>
                            </div>
                            <div>
                                <p className="styles_labelTopic_large__A9Wov"><a href="#" title="Thương">Thương</a></p>
                                <h3 className="styles_title_large__3wRkP" style={{ minHeight: 'auto' }}>
                                    <a href="/vn/toi-ket-hon-vi-hai-nguoi-tim-thay-nhau-va-muon-cung-xay-dap-mot-mai-nha" title="Tôi kết hôn vì hai người tìm thấy nhau và muốn cùng xây đắp một mái nhà">
                                        Tôi kết hôn vì hai người tìm thấy nhau và muốn cùng xây đắp một mái nhà
                                    </a>
                                </h3>
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-start items-center pr-4">
                                        <a className="styles_avatar_large__1SHY-" href="#">
                                            <div className="styles_avatar__M3Jph  ">
                                                <img
                                                    width='67'
                                                    height='67'
                                                    src="https://img.vietcetera.com/uploads/avatar-images/20-sep-2021/thu-vu-1632125875520-40x40.jpg"
                                                    loading="lazy" />
                                            </div>
                                        </a>
                                        <div className="">
                                            <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                <a href="/vn/thong-tin-ca-nhan/anh-thu" title="Thư Vũ" className="text-inherit">Thư Vũ</a>
                                            </span>
                                            <p className="styles_timePublish__2Hct0">26 Thg 05</p>
                                        </div>
                                    </div>
                                    <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                        <BookmarkBorder />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-12__XUi1P styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
                        <div className="!mt-1 styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-3__3tz_E styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ tracking-category-cuoc-song-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a className="tracking-standard-article-detail" href="#" style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/24-may-2022/220524-bocterm-1653386640165.jpg"
                                                    loading="lazy" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Xu Hướng Cuộc Sống">Xu Hướng Cuộc Sống</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="Crab mentality - Thà đạp đổ còn hơn để người khác ăn được">
                                                    Crab mentality - Thà đạp đổ còn hơn để người khác ăn được
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Hien Le" className="text-inherit">
                                                                Hien Le
                                                            </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">24 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="!mt-1 styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-3__3tz_E styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ tracking-category-cuoc-song-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a className="tracking-standard-article-detail" href="#" style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/23-may-2022/etienne-boulanger-ercpgyxnlto-unsplash-1653309312490.jpg"
                                                    loading="lazy" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Xu Hướng Cuộc Sống">Đời Sống</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="Crab mentality - Thà đạp đổ còn hơn để người khác ăn được">
                                                    Nốt lặng trong bản nhạc giao tiếp
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Hien Le" className="text-inherit">
                                                                Hoang Nguyen
                                                            </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">24 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="!mt-1 styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-3__3tz_E styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ tracking-category-cuoc-song-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a className="tracking-standard-article-detail" href="#" style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/23-may-2022/thoichungtoi-1653299383763.jpg"
                                                    loading="lazy" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Đời Sống">Xu hướng đời Sống</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="Crab mentality - Thà đạp đổ còn hơn để người khác ăn được">
                                                    Vẻ đẹp của bóng đá
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Hien Le" className="text-inherit">
                                                                T.P
                                                            </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">23 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="!mt-1 styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-3__3tz_E styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ tracking-category-cuoc-song-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a className="tracking-standard-article-detail" href="#" style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/20-may-2022/siora-photography-hgfy1mzy-y0-unsplash-2-1653037169942.jpg"
                                                    loading="lazy" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Xu Hướng Cuộc Sống">Chất Lượng Sống</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="Crab mentality - Thà đạp đổ còn hơn để người khác ăn được">
                                                    Học sao cho vào theo phong cách của Mark Manson
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Hien Le" className="text-inherit">
                                                                Mark Manson
                                                            </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">22 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    </div >
}

function hardCodeBlogSangTao() {
    return <div className="mt-20 xs:mt-14">
        <div className="flex items-end justify-between mb-6 xs:mb-4">
            <div>
                <span className="styles_title__2Bx-A text-black inline-block uppercase m-0 typo-700_40pt">Sáng<br />tạo</span>
            </div>
            <div className="sm:hidden">
                <button className="tracking-category-kinh-doanh-homepagev2-see-all min-w-[104px] styles_s-btn__nIocM styles_stroke__37Lvd styles_s-btn_40__m7Z3H styles_text-only__1p2V4 styles_primary__1WMTj">
                    <a className="text-14pt inline-block pt-1 text-inherit" href="#" title="Button see all">
                        Xem tất cả
                    </a>
                </button>
            </div>
        </div>
        <section>
            <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <article className="w-full styles_article_large__1NrSU styles_firstArticle__3z8NX tracking-category-kinh-doanh-homepagev2-card-click">
                        <div className="styles_blockCardContent__1ScZt">
                            <div className="styles_blockImgFeature_large__6lYoZ relative">
                                <a href="#">
                                    <img
                                        className="aspect-video w-full h-full"
                                        src="https://img.vietcetera.com/uploads/images/26-may-2022/dienanh-guide1-1653555559826.jpg" />
                                </a>
                            </div>
                            <div>
                                <p className="styles_labelTopic_large__A9Wov">
                                    <a href="#" title="Tài Chính Cá Nhân">
                                        Điện ảnh
                                    </a>
                                </p>
                                <h3 className="styles_title_large__3wRkP" style={{ minHeight: 'auto' }}>
                                    <a href="#" title="Tốn Tiền: 50 USD hàng tháng cho nền tảng nội dung 18+">
                                        Love, Death + Robots 3: Tiếp nối những câu hỏi trăn trở không hồi đáp
                                    </a>
                                </h3>
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-start items-center pr-4">
                                        <a href="#" className="styles_avatar_large__1SHY-">
                                            <div className="styles_avatar__M3Jph">
                                                <img
                                                    className=""
                                                    width="67"
                                                    height="67"
                                                    loading="lazy"
                                                    src="https://img.vietcetera.com/uploads/avatar-images/06-may-2021/minh-anh-1620293307818-40x40.jpg" />
                                            </div>
                                        </a>
                                        <div className="">
                                            <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                <a href="/vn/thong-tin-ca-nhan/chu-ng" title="chu ng" className="text-inherit">
                                                    Minh anh
                                                </a>
                                            </span>
                                            <p className="styles_timePublish__2Hct0">26 Thg 05</p></div>
                                    </div>
                                    <button className="tracking-bookmark-undefined border-0 px-0 undefined">
                                        <BookmarkBorder />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                    <div className="styles_s-row__2dAIq styles_spacing-8__cu8EB">
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/25-may-2022/hi-nh-1-copy-1653449466188.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">Nghệ thuật & thiết kế</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    Grand Marina, Saigon – Dự án bất động sản hàng hiệu trọng điểm của Marriott International tại Việt Nam
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Việt Vân </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">26 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/25-may-2022/feature-johnny-orlando-1653474098420.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">Âm nhạc</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    Johnny Orlando: "Suy cho cùng, tôi yêu âm nhạc và yêu việc sản xuất âm nhạc."
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Sơn Hoàng </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">25 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/25-may-2022/2-2--1653462810854.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">Truyền Thông</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    Khi BAEMIN thay đổi “góc nhìn” để có sự đột phá trong truyền thông
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Cao Vy </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">25 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div className="styles_s-column__-NKo1 styles_xs__span-12__-9R2I styles_sm__span-12__8pfb6 styles_md__span-12__2wk4i styles_lg__span-6__3aXiW styles_col-12__3GOyW styles_xs__col-12__345Z1 styles_spacing-8__1CfRH">
                            <div className="styles_articleWithBorderBottomWrapper__2vzKN">
                                <article className="w-full styles_article_medium__1hFfJ styles_articleWithBorderBottom__dRqoX tracking-category-kinh-doanh-homepagev2-card-click">
                                    <div className="styles_blockCardContent__1ScZt">
                                        <div className="styles_blockImgFeature_medium__3rxtw relative">
                                            <a
                                                href="#"
                                                className="tracking-standard-article-detail"
                                                style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="aspect-video w-full h-full"
                                                    src="https://img.vietcetera.com/uploads/images/25-may-2022/dienanh-guide-1653451858487.jpg" />
                                            </a>
                                        </div>
                                        <div>
                                            <p className="styles_labelTopic_medium__b8pX6">
                                                <a href="#" title="Tài Chính Cá Nhân">Điện ảnh</a>
                                            </p>
                                            <h3 className="styles_title_medium__3Ecfp" style={{ minHeight: '84px' }}>
                                                <a href="#" title="5 Chiêu tâm lý đứng sau thuật toán gây &quot;nghiện&quot; của Spotify">
                                                    Everything Everywhere All At Once hay ‘cái xô đựng tất cả những ý tưởng lạc lối’
                                                </a>
                                            </h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-start items-center pr-4">
                                                    <div className="">
                                                        <span className="typo-600_14pt xs:typo-600_12pt styles_nameAuthor__3dquk styles_s-text__3a4If styles_noGutterBottom__3Wmpn styles_ink-secondary-2__3k0m-">
                                                            <a href="#" title="Bích Hồ " className="text-inherit">Nhi Nguyen </a>
                                                        </span>
                                                        <p className="styles_timePublish__2Hct0">25 Thg 05</p>
                                                    </div>
                                                </div>
                                                <button type="button" aria-label="btn-save" className="tracking-bookmark-undefined border-0 px-0 undefined">
                                                    <BookmarkBorder />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

