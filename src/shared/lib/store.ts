import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  combineSlices,
  Dispatch,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit';

// нужен для код сплитинга и разделения стора на модули работы нашего redux
export const slicesRegistry = combineSlices();

//делаем так чтобы AppState и тп. не знали всё о нашем сторе для инкапсуляция
// any нужно чтобы убрать швы с типами но использовать можно теперь только через селекторы тк не смотрим на изм.
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppState = any;
export type AppGetState = () => AppState;
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = ThunkDispatch<any, unknown, UnknownAction> & Dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

//Реализовываю строгость типов не за счёт глобальных ипов типа AppState и тп.
//а за счет селекторов и акшенов которые строго типизированне
//и дальше все связывается за счет импортов
