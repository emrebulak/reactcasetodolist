import "../../App.css";

function Footer({ list, setfilter }) {
  let count = list.filter((item) => item.checked === false).length;
 
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button onClick={() => clickToAll()} className="selected">
            All
          </button>
        </li>
        <li>
          <button onClick={() => clickToActive()}>Active</button>
        </li>
        <li>
          <button onClick={() => clickToCompleted()}>Completed</button>
        </li>
      </ul>
    </footer>
  );

  function clickToAll() {
    setfilter('');
    selectedDisabled();
    document.getElementsByClassName(
      "filters"
    )[0].children[0].children[0].className = "selected";
  }

  function clickToActive() {
    setfilter(false);
    selectedDisabled();
    document.getElementsByClassName(
      "filters"
    )[0].children[1].children[0].className = "selected";
  }

  function clickToCompleted() {
    setfilter(true);
    selectedDisabled();
    document.getElementsByClassName(
      "filters"
    )[0].children[2].children[0].className = "selected";
  }


  function selectedDisabled() {
    let element = document.getElementsByClassName("filters")[0];

    for (let i = 0; i < element.childElementCount; i++) {
      if (element.children[i].children[0].className === "selected") {
        element.children[i].children[0].className = "";
      }
    }
  }
}

export default Footer;
