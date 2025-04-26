import {create} from "zustand";

const useHeaderSwiperStore = create((set) => ({
  swipers: [
    "Только качественные товары",
    "Скидки до 50% — успей купить!",
    "Новинки каждую неделю",
  ]
}))

export default useHeaderSwiperStore;