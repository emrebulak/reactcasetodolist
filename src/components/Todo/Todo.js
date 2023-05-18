import "../../App.css";
import Header from "../Header";
import Footer from "../Footer";
import Section from "../Section";
import { useState } from "react";

function Todo() {
  const [list, setList] = useState([
    { value: "Javascript Öğrenmek", checked: true },
    { value: "React Öğrenmek", checked: false },
    { value: "Angular Öğrenmek", checked: false },
  ]);
  const [filter, setFilter] = useState("");

  const filt = list.filter((item) => {
    return Object.keys(item).some((key) => item[key].toString().includes(filter));
  });

  return (
    <section className="todoapp">
      <Header list={list} setlist={setList} />
      <Section list={filt} setlist={setList} />
      <Footer list={filt} setfilter={setFilter} />
    </section>
  );
}

export default Todo;
