import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <p className={s.item}>
      {name} : {number}
      <button onClick={onDelete}>Delete</button>
    </p>
  );
};
export default Contact;
