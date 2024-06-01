import React from "react";
import { Link, UnorderedList, ListItem } from "@chakra-ui/react";
import Container from "../container";
import H2 from "../h2";
import H3 from "../h3";

const Links = () => {
  return (
    <Container>
      <H2>Links</H2>
      <UnorderedList>
        <ListItem>
          <Link href="https://www.facebook.com/10inoino" isExternal>
            <H3>Facebook</H3>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/ino_aka_matty" isExternal>
            <H3>Twitter</H3>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://docs.google.com/presentation/d/1wPobujyRIkUf_ietB6iaEzpNTMRrlBWEvS_PRrxe_Iw/edit?usp=sharing"
            isExternal
          >
            <H3>自己紹介資料</H3>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/10inoino" isExternal>
            <H3>Github</H3>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://open.spotify.com/show/7gMXEfaXAaQjUbqRWy7UrL"
            isExternal
          >
            <H3>個人でやってるPodcast</H3>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://zenn.dev/10inoino" isExternal>
            <H3>Zenn</H3>
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  );
};

export default Links;
