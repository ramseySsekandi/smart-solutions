import { defineQuery } from "next-sanity";

export const HERO_CAROUSEL_QUERY = defineQuery(
    `*[_type =='Hero-Carousel']| order(_createdAt desc){
 Image_URL,
  Title,
  Description,
  Button_Text,
  Button_URL,
  _id,
  _createdAt
}`
)

export const HERO_CAROUSEL_QUERY_ID = defineQuery(
    `*[_type =='Hero-Carousel' && _id == $id][0]{
 Image_URL,
  Title,
  Description,
  Button_Text,
  Button_URL,
  _id,
  _createdAt
}`
)