import "../../App.css";

function Section({ list, setlist }) {
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {list.map((item, i) => (
          <li key={i} className={item.checked === true ? "completed" : "view"}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={item.checked === true ? "checked" : ""}
                onChange={(e) => {
                  let className =
                    e.target.parentElement.parentElement.className;
                  let name = e.target.parentElement.children[1].textContent;

                  if (className === "view") {
                    for (let i = 0; i < list.length; i++) {
                      if (list[i].value === name) {
                        list[i].checked = true;
                      }
                    }
                  } else {
                    for (let i = 0; i < list.length; i++) {
                      if (list[i].value === name) {
                        list[i].checked = false;
                      }
                    }
                  }

                  setlist([...list]);
                }}
              />

              <label>{item.value}</label>
              <button
                onClick={(e) => {
                  let name = e.target.parentElement.children[1].textContent;

                  for (let i = 0; i < list.length; i++) {
                    if (list[i].value === name) {
                      list.splice(i, 1);
                    }
                  }

                  setlist([...list]);
                }}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Section;
