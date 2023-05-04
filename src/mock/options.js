const options = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Выбрать бизнес класс',
        price: 120
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Выключить радио',
        price: 15
      }
    ]
  },

  {
    type: 'bus',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Место у окошка',
        price: 120
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Место впереди',
        price: 50
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Добавить багаж',
        price: 78
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Видео про вампиров',
        price: 40
      }
    ]
  },

  {
    type: 'ship',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Каюта люкс',
        price: 120
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Посещение аквадискотеки',
        price: 50
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Гарантированное место в шлюпке',
        price: 78
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Минибар',
        price: 40
      }
    ]
  },

  {
    type: 'check-in',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Торжественная встреча',
        price: 120
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Добавить завтрак',
        price: 50
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Добавить багаж',
        price: 78
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Люкс для новобрачных',
        price: 40
      }
    ]
  },

  {
    type: 'flight',
    offers: [
      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Бузинес класс',
        price: 120
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Добавить завтрак',
        price: 50
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Добавить багаж',
        price: 78
      },

      {
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa3',
        title: 'Трансфер из аэропорта',
        price: 40
      }
    ]
  },

];

const getOptionElement = (type) => {
  const found = options.find((elem) => elem.type.toLowerCase() === type.toLowerCase());
  return found;
};

export {options, getOptionElement};
