import { Producer } from './producer';

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

  serialize(): string {}

  deserialize(data: string) {}
}
