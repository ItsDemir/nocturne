import { create } from "zustand";

export type CartItem = {
  slug: string;
  name: string;
  size: "Travel 4oz" | "Standard 10oz";
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string, size: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.slug === item.slug && i.size === item.size
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.slug === item.slug && i.size === item.size
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, item], isOpen: true };
    }),
  removeItem: (slug, size) =>
    set((state) => ({
      items: state.items.filter((i) => !(i.slug === slug && i.size === size)),
    })),
}));
