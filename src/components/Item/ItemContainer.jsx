import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  updateItem,
  toggleItem,
  editItem,
} from "../../models/list/actions";
import Item from "./Item";

const ItemContainer = ({ item }) => {
  const [value, setValue] = useState(item.text);
  const dispatch = useDispatch();

  const handleChange = (e) => setValue(e.target.value);
  const handleToggle = () => dispatch(toggleItem(item.id));
  const handdleDelete = () => dispatch(deleteItem(item.id));
  const handleEdit = () => dispatch(editItem(item.id));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S/gm.test(value)) {
      handdleDelete();
      return;
    }
    dispatch(updateItem({ id: item.id, text: value }));
    handleEdit();
  };

  return (
    <Item
      onToggle={handleToggle}
      onEdit={handleEdit}
      onDelete={handdleDelete}
      onChange={handleChange}
      value={value}
      onSubmit={handleSubmit}
      {...item}
    />
  );
};

export default ItemContainer;
