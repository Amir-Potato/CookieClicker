import { Producer } from './producer';

type TempSave = Pick<
  Save,
  'lastLogin' | 'currentLogin' | 'cookies' | 'producers'
>;
export class Save {
  id: number;
  lastLogin: Date;
  currentLogin: Date;

  cookies: number;
  producers: Producer[];

  constructor(id: number, data?: string) {
    this.id = id;

    if (data) {
      const temp: TempSave = JSON.parse(data);

      this.lastLogin = temp.lastLogin;
      this.currentLogin = temp.currentLogin;
      this.cookies = temp.cookies;
      this.producers = temp.producers;
    } else {
      this.lastLogin = new Date();
      this.currentLogin = new Date();
      this.cookies = 0;
      this.producers = [];
    }
  }

  serialize(): string {
    const temp: TempSave = {
      lastLogin: this.lastLogin,
      currentLogin: this.currentLogin,
      cookies: this.cookies,
      producers: this.producers,
    };

    return JSON.stringify(temp);
  }

  deserialize(data: string) {
    const temp: TempSave = JSON.parse(data);

    this.lastLogin = temp.lastLogin;
    this.currentLogin = temp.currentLogin;
    this.cookies = temp.cookies;
    this.producers = temp.producers;
  }
}
