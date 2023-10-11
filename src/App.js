import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PoketmonEditor from "./components/PoketmonEditor";
import PoketmonList from "./components/PoketmonList";

const mockupPoketmon = [
  // 더미 데이터를 만든다
  {
    id: 0,
    property1: "풀",
    property2: "독",
    imglink: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000101.png",
    title: "이상해씨",
    content:
      "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다.",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    property1: "풀",
    property2: "독",
    imglink: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000201.png",
    title: "이상해풀",
    content:
      "등의 봉오리가 부풀어 오르면 달콤한 냄새가 감돌기 시작한다. 큰 꽃이 필 조짐이다.",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    property1: "풀",
    property2: "독",
    imglink: "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000301.png",
    title: "이상해꽃",
    content:
      "비가 내린 다음 날은 등의 꽃향기가 강해진다. 향기에 이끌려 포켓몬이 모여든다.",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [poketmon, setPoketmon] = useState(mockupPoketmon);
  const idRef = useRef(3);
  const onCreate = ({ property1, property2, imglink, title, content }) => {
    // 입력받은 content를 멤버로 하는 새로운 포켓몬 객체 생성
    const newPoketmon = {
      id: idRef.current,
      property1: property1,
      property2: property2,
      imglink: imglink,
      title: title,
      content: content,
      createdDate: new Date().getTime(),
    };
    setPoketmon([newPoketmon, ...poketmon]); // 스프레드 연산자를 통해 불변성을 지키며 새로운 배열 setPoketmon 할당
    idRef.current += 1;
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <PoketmonEditor onCreate={onCreate} />
      </div>
      <div>
        {mockupPoketmon.map((Poketmon) => (
          <PoketmonList
            key={Poketmon.id}
            property1={Poketmon.property1}
            property2={Poketmon.property2}
            imglink={Poketmon.imglink}
            title={Poketmon.title}
            content={Poketmon.content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
