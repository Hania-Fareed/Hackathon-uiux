import { groq } from "next-sanity";

export const one = groq`*[_type == "product"][20..20]`;
export const allProduct = groq`*[_type == "product"]`;
export const four = groq`*[_type == "product"][0..3]`;
export const some = groq`*[_type == "product"][0..19]`;
export const productAll = groq`*[_type == "product2"][0..6]`;

