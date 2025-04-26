import { create } from 'zustand';

const useSortStore = create((set, get) => ({
  sortBy: "title",
  sortChange: (type) => {
    set({sortBy: type});
  },

  getSortedProducts: (products) => {
    const { sortBy } = get();
      return [...products].sort((a, b) => {
      if (sortBy === 'price' || sortBy === 'stock') {
        return a[sortBy] - b[sortBy];
      } else if (sortBy === 'title') {
        return a[sortBy].localeCompare(b[sortBy]);
      }
      return 0;
    });
  },
}))

export default useSortStore;