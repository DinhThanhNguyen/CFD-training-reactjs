import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReviewText from '../components/ReviewText'
import ReviewImage from './ReviewImage';

export default function Review() {

    useEffect(() => {
        function testimonialSlider() {
            let $ = window.$;
            if ($('.section-testimonial').length) {
                var $carousel = $(".section-testimonial .images .list").flickity({
                    contain: true,
                    wrapAround: false,
                    freeScroll: false,
                    cellAlign: 'center',
                    lazyLoad: 2,
                    imagesLoaded: true,
                    prevNextButtons: false,
                    on: {
                        ready: function () {
                            let dotsSlideTes = $('.section-testimonial .flickity-page-dots');
                            let dotsNew = $('.section-testimonial .dots');
                            dotsSlideTes.appendTo(dotsNew);
                        },
                        change: function (index) {
                            $('.testimonial .ct').removeClass('active');
                            $('.testimonial .ct-' + (index + 1)).addClass('active');
                        }
                    }
                });
                var flkty = $carousel.data('flickity');
                var $imgs = $('.section-testimonial .carousel-cell picture img');

                $carousel.on('scroll.flickity', function (event, progress) {
                    flkty.slides.forEach(function (slide, i) {
                        var img = $imgs[i];
                        var x = (slide.target + flkty.x) * -1 / 2;
                        img.style.transform = 'translateX( ' + x + 'px)';
                    });
                });

                let ctrPrevTes = $('.section-testimonial .btn_ctr.prev'),
                    ctrNextTes = $('.section-testimonial .btn_ctr.next');

                ctrPrevTes.on('click', function () {
                    $carousel.flickity('previous', true);
                });
                ctrNextTes.on('click', function () {
                    $carousel.flickity('next', true);
                });
            }
        }
        testimonialSlider();
    }, [])

    return (
        <section className="section-testimonial">
            <div className="container">
                <div className="textbox">
                    <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
                </div>
                <div className="testimonial">
                    <div className="testimonial-item">
                        <div className="item">
                            <div className="text">
                                <div className="ct ct-1 active">
                                    <ReviewText name="Nguyễn Thanh Tùng" content="Khoá học này thực sự rất chất lượng. 
                                    Mình từ một người làm Sale, chưa biết gì về HTML, CSS, JS, mà giờ code được 1 web hoàn chỉnh. 
                                    Mentor thì hỗ trợ nhiệt tình, lên lớp học lý thuyết xong là thực chiến luôn, về nhà thì livestream sửa bài, có khi tới 1-2h sáng luôn. 
                                    Sau khoá học thì được các mentor chia sẻ kinh nghiệm." />
                                </div>
                                <div className="ct ct-2">
                                    <ReviewText name="Nguyễn Đình Thanh" content="Mình đã từng tự học nhưng bị mất phương hướng trầm trọng, 
                                    sau khóa học mình đã tự code được 2 dự án riêng, 4 mentor dạy và hỗ trợ học viên rất có tâm, 
                                    chuyện livestream giải đáp thắc mắc cho học viên tới khuya là thường xuyên. Sau khóa học mình 
                                    học được cách tạo giao diện sao cho đẹp tinh tế, thân thiện với người dùng." />
                                </div>
                                <div className="ct ct-3">
                                    <ReviewText name="Phạm Thành Trung" content="Các mentor dạy có tâm, nhiệt tình. Mình là người chưa biết html và css, 
                                    sau khóa học thì mình có thể tự tin code được giao diện theo thiết kế và cả việc xử lí các sự kiện bằng javascript và jquery." />
                                </div>
                                <div className="ct ct-4">
                                    <ReviewText name="Ngô Thành Long" content="Khoá học bổ ích, dễ hiểu, đặc biệt là rất thực chiến. Các mentor hài hước, 
                                    nhiều kinh nghiệm. Nói chung là ai không học thì uổng lắm =))))))))))" />
                                </div>
                                <div className="ct ct-5">
                                    <ReviewText name="Nguyễn Anh Tuấn" content="Là một nơi truyền cảm hứng cho mình thực hiện tiếp ước mơ và hoài bảo! 
                                    Cảm ơn các thầy đã nổ lực hỗ trợ để mình có thể tiếp cận ước mơ của mình gần hơn." />
                                </div>
                            </div>
                            <div className="images">
                                <div className="list">
                                    <ReviewImage source="/img/tesimonials/tung-cfd-2.jpg" image="/img/tesimonials/tung-cfd.jpg" name="Nguyễn Thanh Tùng" content="Khoá học này thực sự rất chất lượng. 
                                    Mình từ một người làm Sale, chưa biết gì về HTML, CSS, JS, mà giờ code được 1 web hoàn chỉnh. 
                                    Mentor thì hỗ trợ nhiệt tình, lên lớp học lý thuyết xong là thực chiến luôn, về nhà thì livestream sửa bài, có khi tới 1-2h sáng luôn. 
                                    Sau khoá học thì được các mentor chia sẻ kinh nghiệm." />
                                    <ReviewImage source="/img/tesimonials/thanh-cfd-2.jpg" image="/img/tesimonials/thanh-cfd.jpg" name="Nguyễn Đình Thanh" content="Mình đã từng tự học nhưng bị mất phương hướng trầm trọng, 
                                    sau khóa học mình đã tự code được 2 dự án riêng, 4 mentor dạy và hỗ trợ học viên rất có tâm, 
                                    chuyện livestream giải đáp thắc mắc cho học viên tới khuya là thường xuyên. Sau khóa học mình 
                                    học được cách tạo giao diện sao cho đẹp tinh tế, thân thiện với người dùng." />
                                    <ReviewImage source="/img/tesimonials/thanh-trung-cfd-2.jpg" image="/img/tesimonials/thanh-trung-cfd.jpg" name="Phạm Thành Trung" content="Các mentor dạy có tâm, nhiệt tình. Mình là người chưa biết html và css, 
                                    sau khóa học thì mình có thể tự tin code được giao diện theo thiết kế và cả việc xử lí các sự kiện bằng javascript và jquery." />
                                    <ReviewImage source="/img/tesimonials/long-cfd-2.jpg" image="/img/tesimonials/long-cfd.jpg" name="Ngô Thành Long" content="Khoá học bổ ích, dễ hiểu, đặc biệt là rất thực chiến. Các mentor hài hước, 
                                    nhiều kinh nghiệm. Nói chung là ai không học thì uổng lắm =))))))))))" />
                                    <ReviewImage source="/img/tesimonials/van-tuan-cfd-2.jpg" image="/img/tesimonials/van-tuan-cfd.jpg" name="Nguyễn Anh Tuấn" content="Là một nơi truyền cảm hứng cho mình thực hiện tiếp ước mơ và hoài bảo! 
                                    Cảm ơn các thầy đã nổ lực hỗ trợ để mình có thể tiếp cận ước mơ của mình gần hơn." />
                                </div>
                            </div>
                        </div>
                        <div className="dots" />
                        <div className="btn_ctr prev" style={{ backgroundImage: 'none' }}><img src="/img/arrow-prev.svg" alt="" /></div>
                        <div className="btn_ctr next" style={{ backgroundImage: 'none' }}><img src="/img/arrow-next.svg" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
        // <section className="section-testimonial">
        //              <div className="container">
        //                  <div className="textbox">
        //                      <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
        //                  </div>
        //                  <div className="testimonial">
        //                      <div className="testimonial-item">
        //                          <div className="item">
        //                              <div className="text">
        //                                  {
        //                                     review.map((content, index) => <div key={index} className={`ct ct-${index + 1} ${index === 0 ? 'active' : ''}`}>
        //                                         <div className="info">
        //                                             <div className="name">
        //                                                 <h4>{content.name}</h4>
        //                                                 <p>Thành viên CFD1</p>
        //                                             </div>
        //                                             <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
        //                                         </div>
        //                                         <div className="content">
        //                                             {content.content}
        //                                         </div>
        //                                         <div className="bottom">
        //                                             <Link to="/"><img src="/img/facebook.svg" alt="" /></Link>
        //                                             <span>{content.date}</span>
        //                                         </div>
        //                                     </div>)
        //                                 }
        //                             </div>
        //                             <div className="images">
        //                                 <div className="list">
        //                                     {
        //                                         review.map((image, index) => <div key={index} className="carousel-cell">
        //                                             <div className="img">
        //                                                 <picture>
        //                                                     <source media="(max-width: 767px)" srcSet="/img/Intersect.png" />
        //                                                     <img data-flickity-lazyload="/img/tes.jpg" alt="" />
        //                                                 </picture>
        //                                             </div>
        //                                         </div>)
        //                                     }
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="dots" />
        //                         <div className="btn_ctr prev" style={{ backgroundImage: 'none' }}><img src="/img/arrow-prev.svg" alt="" /></div>
        //                         <div className="btn_ctr next" style={{ backgroundImage: 'none' }}><img src="/img/arrow-next.svg" alt="" /></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </section>
    )
}
