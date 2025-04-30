import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  return (
    <div className={css.contactWrap}>
      <div className={css.text}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btn}>Delete</button>
    </div>
  );
}
