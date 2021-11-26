import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Card,
    CardImg
} from 'reactstrap';

const items = [
    {
        id: 1,
        caption: ''
    },
    {
        id: 2,
        caption: ''
    },
    {
        id: 3,
        caption: ''
    }
];

const HomeElements = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div className="mt-md-5">
            <style>
                {
                    `.custom-tag {
                    max-width: 100%;
                    height: 500px;
                    background: black;
            }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="." onClickHandler={previous} />
                <CarouselControl direction="next" directionText="." onClickHandler={next} />
            </Carousel>

            {/* SECOND PORTION */}

            <div className="container-fluid text-justify">
                <div className="row row-content">
                    <div className="col-md-7">
                        <h2>Description</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
                    <div className="col-md-5">
                        <Card>
                            <CardImg width="100%" src="/assets/proWorker.jpg" />
                        </Card>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-md-5">
                        <Card>
                            <CardImg width="100%" src="/assets/proWorker.jpg" />
                        </Card>
                    </div>
                    <div className="col-md-7">
                        <h2>Description</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-md-7">
                        <h2>Description</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
                    <div className="col-md-5">
                        <Card>
                            <CardImg width="100%" src="/assets/proWorker.jpg" />
                        </Card>
                    </div>
                </div>



            </div>

        </div>

    );

}

export default HomeElements;