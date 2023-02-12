import React from "react";
import style from "./WorksImages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import work_img1 from '../../../../assets/works/1.jpg';
import work_img2 from '../../../../assets/works/2.jpg';
import work_img3 from '../../../../assets/works/3.jpg';
import work_img4 from '../../../../assets/works/4.jpg';
import work_img5 from '../../../../assets/works/5.jpg';
import work_img6 from '../../../../assets/works/6.jpg';
import work_img7 from '../../../../assets/works/7.jpg';
import work_img8 from '../../../../assets/works/8.jpg';

const WorksImages = () => {
    return (
        <div className={style.works_images}>
            <div className={style.works_item}>
                <img src={work_img1} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img}/>
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>

            <div className={style.works_item}>
                <img src={work_img2} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img} />
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>

            <div className={style.works_item}>
                <img src={work_img3} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img} />
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>

            <div className={style.works_item}>
                <img src={work_img4} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img} />
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>

            <div className={style.works_item}>
                <img src={work_img5} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img} />
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>

            <div className={style.works_item}>
                <img src={work_img6} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img} />
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>

            <div className={style.works_item}>
                <img src={work_img7} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img} />
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>

            <div className={style.works_item}>
                <img src={work_img8} alt="works_img"></img>

                <div className={style.works_info}>
                    <FontAwesomeIcon icon={solid("eye")} className={style.works_info_img} />
                    <div className={style.works_title}>Labore et dolore magnam</div>
                    <div className="woks_text">Photography</div>
                </div>
            </div>
        </div>
    );
}

export default WorksImages;