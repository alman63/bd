

export const mockRecipes: Recipe[] = [
  {
    id: 'pasta-karbonara',
    name: 'Паста карбонара',
    cuisine: 'итальянская',
    timeMinutes: 25,
    difficulty: 'средняя',
    ingredients: ['спагетти', 'бекон', 'яйца', 'пармезан', 'перец'],
    diet: ['без орехов'],
    steps: [
      'Отварить спагетти до готовности.',
      'Обжарить бекон до хрустящей корочки.',
      'Смешать яйца с тёртым пармезаном.',
      'Соединить горячие спагетти с беконом, затем с яичной смесью.',
      'Поперчить и сразу подавать.',
    ],
    body: `# Паста карбонара\n\n## Ингредиенты\n- Спагетти — 200 г\n- Бекон — 100 г\n- Яйца — 2 шт.\n\n## Приготовление\n1. Отварить спагетти.\n2. Обжарить бекон.`,
    tags: ['#быстро', '#итальянское'],
  },
  {
    id: 'borsch',
    name: 'Борщ',
    cuisine: 'русская',
    timeMinutes: 90,
    difficulty: 'средняя',
    ingredients: ['свёкла', 'капуста', 'мясо', 'картофель', 'морковь'],
    diet: [],
    steps: [
      'Сварить бульон.',
      'Добавить нарезанные овощи.',
      'Тушить 30 минут.',
      'Подавать со сметаной.',
    ],
    body: `# Борщ\n\nКлассический русский суп.`,
    tags: ['#суп', '#русское'],
  },
  {
    id: 'omelette',
    name: 'Омлет',
    cuisine: 'французская',
    timeMinutes: 10,
    difficulty: 'лёгкая',
    ingredients: ['яйца', 'молоко', 'масло', 'соль'],
    diet: ['вегетарианская', 'безглютеновая'],
    steps: ['Взбить яйца с молоком.', 'Вылить на разогретую сковороду.', 'Готовить 3 минуты.'],
    body: `# Омлет\n\nПростое блюдо для завтрака.`,
    tags: ['#завтрак', '#быстро'],
  },
];

export const mockChatAnswers = [
  'Из курицы и риса можно приготовить плов. Вот рецепт: ...',
  'Для вегетарианцев подойдут блюда: омлет, овощное рагу, паста с томатами.',
  'Итальянские блюда до 30 минут: паста карбонара, брускетта, ризотто.',
];

export const mockGraph = {
  nodes: [
    { data: { id: 'Паста карбонара', label: 'Паста карбонара', type: 'dish' as const } },
    { data: { id: 'спагетти', label: 'спагетти', type: 'ingredient' as const } },
    { data: { id: 'бекон', label: 'бекон', type: 'ingredient' as const } },
    { data: { id: 'итальянская', label: 'итальянская', type: 'cuisine' as const } },
    { data: { id: 'Борщ', label: 'Борщ', type: 'dish' as const } },
    { data: { id: 'свёкла', label: 'свёкла', type: 'ingredient' as const } },
    { data: { id: 'русская', label: 'русская', type: 'cuisine' as const } },
  ],
  edges: [
    { data: { source: 'Паста карбонара', target: 'спагетти', relation: 'contains' } },
    { data: { source: 'Паста карбонара', target: 'бекон', relation: 'contains' } },
    { data: { source: 'Паста карбонара', target: 'итальянская', relation: 'belongs_to' } },
    { data: { source: 'Борщ', target: 'свёкла', relation: 'contains' } },
    { data: { source: 'Борщ', target: 'русская', relation: 'belongs_to' } },
  ],
};
