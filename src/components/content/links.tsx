import React from "react";
import { Link, UnorderedList, ListItem } from "@chakra-ui/react";
import Container from "../container";
import H2 from "../h2";

const Links = () => {
  return (
    <Container>
      <H2>Links</H2>
      <UnorderedList>
        <ListItem>
          <Link href="https://www.facebook.com/10inoino" isExternal>
            Facebook
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/ino_aka_matty" isExternal>
            Twitter
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://docs.google.com/presentation/d/1wPobujyRIkUf_ietB6iaEzpNTMRrlBWEvS_PRrxe_Iw/edit?usp=sharing"
            isExternal
          >
            自己紹介資料
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/10inoino" isExternal>
            Github
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://open.spotify.com/show/7gMXEfaXAaQjUbqRWy7UrL"
            isExternal
          >
            個人でやってるPodcast
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://zenn.dev/10inoino" isExternal>
            Zenn
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  );
};

export default Links;
