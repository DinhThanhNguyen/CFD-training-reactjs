import React from 'react'
import ProjectItem from './components/ProjectItem'

export default function Project() {
    return (
        <main className="projectpage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">dự án</h2>
                    <p className="top-des">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                        luctus
                    </p>
                    <div className="list row">
                        <ProjectItem thumbnail="/img/project/project (1).jpg" nameProject="Furnitown" doneBy="Hoàn thành với Nguyễn Đình Thanh" />
                        <ProjectItem thumbnail="/img/project/project (2).jpg" nameProject="Kymco" doneBy="Hoàn thành với Huỳnh Tiến Tài" />
                        <ProjectItem thumbnail="/img/project/project (3).jpg" nameProject="Gboxmb" doneBy="Hoàn thành với Nguyễn Văn Tuấn" />
                        <ProjectItem thumbnail="/img/project/project (4).jpg" nameProject="Wooder" doneBy="Hoàn thành với Nguyễn Đức Huy" />
                        <ProjectItem thumbnail="/img/project/project (5).jpg" nameProject="Gboxmb" doneBy="Hoàn thành với Nguyễn Văn Tuấn" />
                        <ProjectItem thumbnail="/img/project/project (6).jpg" nameProject="Wooder" doneBy="Hoàn thành với Nguyễn Đức Huy" />
                        <ProjectItem thumbnail="/img/project/project (1).jpg" nameProject="Furnitown" doneBy="Hoàn thành với Trần Nghĩa" />
                        <ProjectItem thumbnail="/img/project/project (3).jpg" nameProject="Gboxmb" doneBy="Hoàn thành với Nguyễn Đình Thanh" />

                    </div>
                    <div className="bottom">
                        <div className="btn overlay round btn-more">
                            tải thêm
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
