import { Producer } from './producer';

type TempSave = 
export class Save {
  id: number;
  lastLogin: Date;
  currentLogin: Date;

  cookies: number;
  producers: Producer[];

  constructor(id: number, data: string) {
    this.id = id;
    this.deserialize(data);
  }

  serialize(): string {
    const temp = {
      lastLogin: this.lastLogin,
      currentLogin: this.currentLogin,
      cookies: this.cookies,
      producers: this.producers,
    };

    return JSON.stringify(temp);
  }

  deserialize(data: string) {
    const temp = JSON.parse(data);


  }
}
