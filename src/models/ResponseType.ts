import { ResultCodes } from './ResultCodes';

export type ResponseType<T = {}, RC = ResultCodes> = {
   data: T,
   resultCode: RC,
   messages: string[]
}