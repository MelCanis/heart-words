import { create } from "zustand";

const session = create (set => ({
    started: false,
    list: null,
    index: null,
    color: null,
    wordindex: 0,
    set: x => set(x)
}))

export default session;