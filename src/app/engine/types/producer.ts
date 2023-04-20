enum ProducerType {
  WheatF = 'Wheat Farm',
  CowF = 'Cow Farm',
  CocoF = 'Coco Farm',
}

export interface Producer {
  type: ProducerType;
  lvl: number;
  count: number;
}
