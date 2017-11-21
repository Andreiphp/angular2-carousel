/**
 * :tmtfactory) © 2017
 * Alex Marcos <alejandro.marcos@tmtfactory.com>
 * @ignore
 */
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Carousel } from "./Carousel";
export declare class CarouselComponent implements OnInit, OnChanges, AfterViewInit {
    private componentElement;
    carousel: Carousel;
    private radius;
    private rotationFn;
    morePairSlides: number;
    angle: number;
    ratioScale: number;
    margin: number;
    perspective: number;
    endInSlide: boolean;
    timeToSlide: number;
    lockSlides: boolean;
    initialSlide: number;
    loop: boolean;
    axis: string;
    onInitCarousel: EventEmitter<{}>;
    onReadyCarousel: EventEmitter<{}>;
    onChangePropertiesCarousel: EventEmitter<{}>;
    onSlideChange: EventEmitter<{}>;
    onSlideCentered: EventEmitter<{}>;
    onTransitionStart: EventEmitter<{}>;
    onTransitionEnd: EventEmitter<{}>;
    onSlideNextTransitionStart: EventEmitter<{}>;
    onSlideNextTransitionEnd: EventEmitter<{}>;
    onSlidePrevTransitionStart: EventEmitter<{}>;
    onSlidePrevTransitionEnd: EventEmitter<{}>;
    onSlideMove: EventEmitter<{}>;
    onSlideMoveEnd: EventEmitter<{}>;
    onSlideMoveStart: EventEmitter<{}>;
    onTouchMove: EventEmitter<{}>;
    onTouchStart: EventEmitter<{}>;
    onTouchEnd: EventEmitter<{}>;
    onReachBeginning: EventEmitter<{}>;
    onReachEnd: EventEmitter<{}>;
    carouselElm: ElementRef;
    containerElm: ElementRef;
    constructor(componentElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    lockCarousel(val: boolean): void;
    slideNext(): void;
    slidePrev(): void;
    slideTo(index: number): void;
    toggleMode(): void;
    reInit(): void;
    update(): void;
    private configPlugin();
    private initEventsPan();
    private rotate(e);
    private initSlidesOn();
    private setNewDeg(newDeg);
    private checkRotation();
    private checkLimitsCarrousel(index);
    private moveSlideTo(index);
    private moveCarrousel(deg, timeTransform?);
    private setTransformCarrousel(deg);
    private sendSlideIsCentered();
    private setPerspectiveContainer();
    private getmaxSizes();
    private setContainerWithMaxSize();
    private setDegreesOnSlides();
    private detectCurrentSlide();
    private updateCssShowSlides();
    private removeClassShowSlides(tagClass);
    private manageEvents();
}
