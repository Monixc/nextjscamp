import { createElement } from "react";

const App = () => {
  return createElement(
    "div",
    null,
    createElement("header", null, createElement("h1", null, "내 웹사이트")),
    createElement(
      "nav",
      null,
      createElement(
        "ul",
        null,
        createElement(
          "li",
          null,
          createElement("a", { href: "#section1" }, "소개")
        ),
        createElement(
          "li",
          null,
          createElement("a", { href: "#section1" }, "서비스")
        ),
        createElement(
          "li",
          null,
          createElement("a", { href: "#section1" }, "연락처")
        )
      )
    ),
    createElement(
      "main",
      null,
      createElement(
        "section",
        { id: "section1" },
        createElement("h2", null, "소개"),
        createElement("p", null, "여기에 소개 내용을 작성하세요")
      ),
      createElement(
        "section",
        { id: "section2" },
        createElement("h2", null, "서비스"),
        createElement("p", null, "여기에 제공하는 서비스 내용을 작성하세요")
      ),
      createElement(
        "section",
        { id: "section3" },
        createElement("h2", null, "연락처"),
        createElement("p", null, "여기에 연락처 정보를 작성하세요")
      )
    ),
    createElement(
      "footer",
      null,
      createElement("p", null, "&copy; 2024 내 웹사이트. 모든 권리 보유")
    )
  );
};
export default App;
