import './HomeSCSS/HomeStore.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import storeBG1 from '../../assets/img/StoreView/storeBG1.svg';
import storeBG2 from '../../assets/img/StoreView/storeBG1.svg';

import storeViewVinhLM1 from '../../assets/img/StoreView/VinhLotteMart/VinhLotteMartView1.webp';
import storeViewVinhLM2 from '../../assets/img/StoreView/VinhLotteMart/VinhLotteMartView2.webp';
import storeViewVinhLM3 from '../../assets/img/StoreView/VinhLotteMart/VinhLotteMartView3.webp';

import storeViewVinMT1 from '../../assets/img/StoreView/PlazaMyTho/PlazaMyTho1.webp';
import storeViewVinMT2 from '../../assets/img/StoreView/PlazaMyTho/PlazaMyTho2.webp';
import storeViewVinMT3 from '../../assets/img/StoreView/PlazaMyTho/PlazaMyTho3.webp';
import storeViewVinMT4 from '../../assets/img/StoreView/PlazaMyTho/PlazaMyTho4.webp';

import storeViewNVC1 from '../../assets/img/StoreView/NguyenVanCu,HaNoi/NguyenVanCuHaNoiView1.webp';
import storeViewNVC2 from '../../assets/img/StoreView/NguyenVanCu,HaNoi/NguyenVanCuHaNoiView2.webp';
import storeViewNVC3 from '../../assets/img/StoreView/NguyenVanCu,HaNoi/NguyenVanCuHaNoiView3.webp';
import storeViewNVC4 from '../../assets/img/StoreView/NguyenVanCu,HaNoi/NguyenVanCuHaNoiView4.webp';
import storeViewNVC5 from '../../assets/img/StoreView/NguyenVanCu,HaNoi/NguyenVanCuHaNoiView5.webp';

const HomeStore = () => {
    const storeViewList_VinhLM = [
        storeViewVinhLM1,
        storeViewVinhLM2,
        storeViewVinhLM3,
    ];

    return (
        <div className="homestore">
            <div className="container">
                <div className="storebg">
                    <img src={storeBG1} alt="store background" />
                    <img src={storeBG2} alt="store background" />
                </div>

                <div className="container">
                    <div className="store_container">
                        <div className="store_slider_content">
                            <h3 className="store_slider_title">
                                The Coffee House
                                <br />
                                Vinh Lotte Mart
                            </h3>

                            <p className="store_slider_desc">
                                Nh?? m???i Ngh??? An to??? l???c t???i Lotte Mart (TP.
                                Vinh), n???m b??n c???nh nh???ng con ph??? s???m u???t nh???n
                                nh???p l?? kh??ng gian ???m c??ng v?? h????ng v??? quen
                                thu???c t??? Nh??, mang ?????n nhi???u cung b???c c???m x??c
                                cho nh???ng bu???i h???n h?? c??ng b???n b??.
                            </p>

                            <div className="store_slider_wrap">
                                <a href="#!" className="store_slider_btn">
                                    T??m hi???u th??m
                                </a>
                            </div>
                        </div>
                        <div className="store_slider_img">
                            <img
                                className="store_img"
                                src={storeViewVinMT1}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStore;
