import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      basketCount: 0,
      total: 0,
      basket: [],
      cards: [
        {
          id: 1,
          name: 'Solar Guitars A2.7TBR',
          price: 72990,
          description: '7-струнная электрогитара, цвет красный',
          img: 'https://mirm.ru/info/img_400/CNT75960.jpg.webp'
        },
        {
          id: 2,
          name: 'Burny RLC60 SW',
          price: 49990,
          description: 'Электрогитара, форма корпуса Les Paul®, корпус махагони, гриф - махагони, крепление грифа - вклеенный, накладка - лавровое дерево, звукосниматели - 2 хамбакера, бридж -Tune-o-matic, цвет белый.',
          img: 'https://mirm.ru/info/img_400/CNT82458.jpg.webp'
        },
        {
          id: 3,
          name: 'FGN J-Standard Iliad JIL2ASHM OWB',
          price: 113990,
          description: 'Электрогитара, форма корпуса Telecaster, корпус - ясень, гриф - клен, звукосниматели - 2 сингла Seymour Duncan, чехол в комплекте, цвет натуральный.',
          img: 'https://mirm.ru/info/img_400/CNT80553.jpg.webp'
        },
        {
          id: 4,
          name: 'Paoletti Stratospheric Loft HSS Heavy Black',
          price: 480000,
          description: 'электрогитара, Stratocaster HSS, цвет черный, кейс',
          img: 'https://mirm.ru/info/img_400/CNT91173.jpg.webp'
        },
        {
          id: 5,
          name: 'Fernandes RXX06 DAG',
          price: 30990,
          description: 'Электрогитара Revolver XX, HH, tune-o-matic, цвет - темно зеленый',
          img: 'https://mirm.ru/info/img_400/CNT73253.jpg.webp'
        }
      ]
    }
  }
})