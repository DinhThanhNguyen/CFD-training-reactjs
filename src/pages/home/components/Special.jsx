import React from 'react'

export default function Special() {
    return (
        <section className="section-different">
            <div className="container">
                <div className="row">
                    <div className="titlebox col-md-6 col-sm-12 col-xs-12">
                        <h2 className="main-title white textleft">Những điều <br /><span>đặc biệt</span> tại CFD</h2>
                        <div className="videodif" data-src="/video/CFD-video-intro.mp4">
                            <img src="/img/img-cfd-dac-biet.jpg" alt="" />
                            <div className="play-btn btn-video-intro">
                                <img src="/img/play-icon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="contentbox col-md-6 col-sm-12 col-xs-12">
                        <div className="item">
                            <h4>Không cam kết đầu ra</h4>
                            <p>Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như cả người hướng dẫn và
                                người
                                học không thật sự tâm huyết và cố gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các
                                thành
                                viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                            </p>
                        </div>
                        <div className="item">
                            <h4>Không chỉ là một lớp học</h4>
                            <p>CFD không phải một lớp học thuần túy, tất cả thành viên là một team, cùng hổ trợ, chia sẻ
                                và
                                giúp đỡ nhau trong suốt quá trình học và sau này, với sự hướng dẫn tận tâm của các thành
                                viên đồng sáng lập.
                            </p>
                        </div>
                        <div className="item">
                            <h4>Không để ai bị bỏ lại phía sau</h4>
                            <p>Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ được đội ngũ CFD kèm cặp đặc
                                biệt,
                                cùng sự hổ trợ từ các thành viên khác. Vì mục tiêu cuối cùng là hoàn thành
                                khóa
                                học thật tốt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
