import Post from "src/models/post";
import { atom } from "jotai";
import Author from "src/models/author";

export const authorIdAtom = atom('');
export const authorsAtom = atom<Author[]>([]);

export const postAtom = atom<Post>({
    id: '0',
    title: "",
    body: "",
    userId: '0',
});
