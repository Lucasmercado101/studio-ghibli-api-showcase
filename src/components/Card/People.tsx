import React, { useContext } from "react";
import { useQuery } from "react-query";
import { fetchUrls } from "../../Api";
import ContentLoader from "react-content-loader";
import Dropdown from "./Dropdown/Dropdown";
import DropdownContent from "./Dropdown/Content";
import { ThemeContext } from "styled-components";

type Props = {
  people: string[];
};

const MyLoader: React.FC = () => {
  const { primary, accent } = useContext(ThemeContext);
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={120}
      viewBox="0 0 400 120"
      backgroundColor={primary}
      foregroundColor={accent}
    >
      <rect x="0" y="13" width="20" height="5" />
      <rect x="30" y="10" rx="5" ry="5" width="200" height="10" />
      <rect x="0" y="43" width="20" height="5" />
      <rect x="30" y="40" rx="5" ry="5" width="200" height="10" />
      <rect x="0" y="73" width="20" height="5" />
      <rect x="30" y="70" rx="5" ry="5" width="200" height="10" />
      <rect x="0" y="103" width="20" height="5" />
      <rect x="30" y="100" rx="5" ry="5" width="200" height="10" />
    </ContentLoader>
  );
};

const People: React.FC<Props> = ({ people }) => {
  const { data, refetch, isFetched } = useQuery(
    people,
    () => fetchUrls<Person>(people),
    {
      enabled: false,
    }
  );
  const thereArePeople =
    people[0] !== "https://ghibliapi.herokuapp.com/people/";

  if (!thereArePeople) return null;

  return (
    <Dropdown title="people" onOpenClick={() => refetch()}>
      <DropdownContent>
        {isFetched ? (
          data && data.map(({ id, name }) => <li key={id}>{name}</li>)
        ) : (
          <MyLoader />
        )}
      </DropdownContent>
    </Dropdown>
  );
};

export default People;
