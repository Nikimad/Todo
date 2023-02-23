import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleTheme } from "../../features/theme/themeSlice";
import { addItem } from "../../features/list/listSlice";
import Header from "./Header";

const HeaderContainer = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleTheme());
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const normolizedValue = value.trim();
    if (normolizedValue === "") return;
    dispatch(addItem(normolizedValue));
    setValue("");
  };

  return (
    <Header
      onToggle={handleToggle}
      onSubmit={handleSubmit}
      onChange={handleChange}
      value={value}
    />
  );
};

export default HeaderContainer;
