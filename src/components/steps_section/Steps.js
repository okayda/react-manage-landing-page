import style from "./Steps.module.css";
import ProcedureList from "./ProcedureList";
import bg_img from "../../images/bg-tablet-pattern.svg";

const Steps = function () {
  return (
    <section className={style.steps}>
      <div className={style.steps__content}>
        <h2 className={style.steps__title}>What's different about Manage?</h2>
        <p className={style.steps__description}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams
        </p>
      </div>
      <div className={style.steps__procedures}>
        <ProcedureList
          steps__procedure_list={style.steps__procedure_list}
          steps__procedure_title={style.steps__procedure_title}
          steps__list_title={style.steps__list_title}
          steps__number={style.steps__number}
          steps__list_description={style.steps__list_description}
        />
      </div>
      <img src={bg_img} className={style.steps__img_background} alt="" />
    </section>
  );
};

export default Steps;
