import React from 'react';
import MenuInfo from './MenuInfo';

import '../css/Menu.css';

export default class Menu extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      menuData: [
        {
          "menu_id": 1,
          "menu_name": "시래기버섯밥과 가자미",
          "chef_name": "김도연 Chef",
          "menu_description": "따뜻한 밥 한끼가 생각나는 날, 플레이팅의 시래기버섯밥과 가자미를 즐겨보세요.",
          "price": 10000
        },
        {
          "menu_id": 2,
          "menu_name": "치미추리 부채살 스테이크",
          "chef_name": "Plating Chef Team",
          "menu_description": "플레이팅에서 선보이는 치미추리 부채살 스테이크입니다.",
          "price": 16000
        },
        {
          "menu_id": 3,
          "menu_name": "수란을 얹은 닭다리살 김퓨레밥",
          "chef_name": "장정은 Chef",
          "menu_description": "노리츠쿠다니(김퓨레)는 달짝지근한 맛과 동시에 고소한 향을 갖춰 일본의 다양한 전통 요리는 물론 전통 사케들과도 페어링되는 팔방미인 소스입니다.",
          "price": 10000
        },
        {
          "menu_id": 4,
          "menu_name": "퀴노아 닭가슴살 샐러드",
          "chef_name": "박병순 Chef",
          "menu_description": "노리츠쿠다니(김퓨레)는 달짝지근한 맛과 동시에 고소한 향을 갖춰 일본의 다양한 전통 요리는 물론 전통 사케들과도 페어링되는 팔방미인 소스입니다.",
          "price": 7500
        },
        {
          "menu_id": 5,
          "menu_name": "멕시칸 부리또 볼",
          "chef_name": "테일러 황 Chef",
          "menu_description": "노리츠쿠다니(김퓨레)는 달짝지근한 맛과 동시에 고소한 향을 갖춰 일본의 다양한 전통 요리는 물론 전통 사케들과도 페어링되는 팔방미인 소스입니다.",
          "price": 10000
        },
        {
          "menu_id": 6,
          "menu_name": "여수 갓김치 삼겹살찜",
          "chef_name": "테일러 황 Chef",
          "menu_description": "노리츠쿠다니(김퓨레)는 달짝지근한 맛과 동시에 고소한 향을 갖춰 일본의 다양한 전통 요리는 물론 전통 사케들과도 페어링되는 팔방미인 소스입니다.",
          "price": 12000
        }
      ]
    };

  }

  render() {

    const mapToComponent = (data) => {

      return data.map((menu, i) => {
        return (
          <MenuInfo menu={menu} key={i} />
        );
      });
    };

    return (
      <main className="container">
        <h1 className="a11y">Menu</h1>
        <div>{mapToComponent(this.state.menuData)}</div>
      </main>
    );
  }
}
