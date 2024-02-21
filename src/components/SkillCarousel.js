    import Carousel from 'react-bootstrap/Carousel';
    import test from '../assets/img/wings.jpg';
    import python from '../assets/img/python.png';
    import InfiniteCarousel from "react-leaf-carousel";
    import { Flex } from "antd";
    import cplus from '../assets/img/c-.png';
    import csharp from '../assets/img/c-sharp.png';
    import java from '../assets/img/java.png';
    import bootstrapIMG from '../assets/img/bootstrap.png';
    import reactIMG from '../assets/img/react.png';
    import { SkillCarouselItem } from './SkillCarouselItem';
    import firebaseIMG from '../assets/img/firebase.png';



    export const SkillCarousel = () => {

        const imgs = [
            { 
            title : "Python",
            imgUrl : python
            },
            {
            title : "C++",
            imgUrl : cplus
            },
            {title : "C#",
        imgUrl : csharp},
        {
            title : "Java",
            imgUrl : java,
        },
        {
            title : "Bootstrap",
            imgUrl : bootstrapIMG
        },
        {
            title : "React",
            imgUrl : reactIMG
        },
        {
            title : 'Firebase',
            imgUrl : firebaseIMG
        }
        ];
    
        return (
            <InfiniteCarousel
        breakpoints={[
            {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoCycle: true,
                cycleInterval: 2000,
                animationDuration: 1800,
                scrollOnDevice: false,
            },
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                autoCycle: true,
                cycleInterval: 2000,
                animationDuration: 1800,
                scrollOnDevice: false,
            },
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoCycle: true,
                cycleInterval: 2000,
                animationDuration: 1800,
                scrollOnDevice: false,
            },
            },
        ]}
        autoCycle={true}
        cycleInterval={2000}
        animationDuration={1800}
        arrows={false}
        dots={false}
        showSides={false}
        sidesOpacity={1}
        sideSize={1}
        slidesToScroll={1}
        slidesToShow={5}
        >
        

        {
                            imgs.map((item, index) => {
                                return (
                                <SkillCarouselItem
                                    key={index}
                                    {...item}
                                    />
                                )
                            })
                            }
        
        </InfiniteCarousel>
        )

    };