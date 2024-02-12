import Image from 'next/image';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import CaseStudyData from '../../data/CaseStudies.json';
import Link from 'next/link';
import { slugify } from '../../helpers/utilities';
import { useRouter } from 'next/router';

const SliderOne = () => {
    const router=useRouter();
    const {locale}=router;

    const SliderTwoData=locale==='fr'?require('../../locales/fr/SliderTwo.json'):require('../../locales/en/SliderTwo.json');
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    };

    return (
        <div className="axil-featured-area ax-section-gap bg-color-lightest">
            <div
                className="container axil-featured-activation axil-carousel"
                ref={ref}
            >
                {SliderTwoData.length > 0 && (
                    <Slider {...settings}>
                        {SliderTwoData.map((item, index) => {
                            return (
                                <div
                                    className="row d-flex flex-wrap axil-featured row--0"
                                    key={`slider-item-${index}`}
                                >
                                    <div className="col-lg-6 col-xl-6 col-md-12 col-12">
                                        <div className="thumbnail">
                                            <Image
                                                width={661}
                                                height={668}
                                                className="image w-100"
                                                src={item.image}
                                                alt="Featured Images"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-xl-5 col-md-12 col-12 offset-xl-1 mt_md--40 mt_sm--40">
                                        <div className="inner">
                                            <div className="section-title text-start">
                                               
                                                <h3 className="title">
                                                        <a>{item.title}</a>
                                                    
                                                </h3>
                                                <p className="subtitle-2">{item.description}</p>
                                               
                                            </div>
                                            <div
                                                className="axil-counterup-area d-flex flex-wrap separator-line-vertical">
                                                {item.counter?.map((counter, counterIndex) => {
                                                    return (
                                                        <div
                                                            className="single-counterup counterup-style-1"
                                                            key={`counter-item-${counterIndex}`}
                                                        >
                                                            <h3
                                                                className={`count ${
                                                                    item.counter.length - 1 === counterIndex
                                                                        ? "counter-k"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <CountUp
                                                                    start={0}
                                                                    end={inView ? counter.amount : 2}
                                                                />
                                                            </h3>
                                                            <p>{counter.title}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                )}
            </div>
        </div>
    );
};

export default SliderOne;
