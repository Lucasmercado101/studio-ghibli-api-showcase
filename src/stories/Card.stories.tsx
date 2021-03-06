import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import ThemeProvider from "../Theme";
import Card from "../components/Card/Card";
import SlideUp from "../components/Card/SlideUp";
import Subtitle from "../components/Card/Subtitle";
import FilmCard from "../pages/Films/FilmCard/FilmCard";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta;

export const Primary = () => (
  <Card
    title="Howl's Moving Castle"
    subtitle="2004"
    header={
      <>
        <SlideUp
          component={<Subtitle>Director &mdash; Hayao Miyazaki</Subtitle>}
        />
        <SlideUp
          component={<Subtitle>Producer &mdash; Toshio Suzuki</Subtitle>}
        />
      </>
    }
    body="When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home."
  />
);

export const Secondary = () => (
  <FilmCard
    title="Howl's Moving Castle"
    subtitle="2004"
    header={
      <>
        <SlideUp
          component={<Subtitle>Director &mdash; Hayao Miyazaki</Subtitle>}
        />
        <SlideUp
          component={<Subtitle>Producer &mdash; Toshio Suzuki</Subtitle>}
        />
      </>
    }
    peopleArr={[
      "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
      "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
      "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
      "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
      "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
      "https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
      "https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061",
      "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
      "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
      "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a"
    ]}
    speciesArr={[
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ]}
    body="When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home."
  />
);

// {
//   "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
//   "rt_score": "87",
//   "people": [
//     "https://ghibliapi.herokuapp.com/people/"
//   ],
//   "species": [
//     "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
//   ],
//   "locations": [
//     "https://ghibliapi.herokuapp.com/locations/"
//   ],
//   "vehicles": [
//     "https://ghibliapi.herokuapp.com/vehicles/"
//   ],
//   "url": "https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa"
// },
