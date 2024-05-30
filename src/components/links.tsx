import React from "react";
import { Box, Heading, Link, UnorderedList, ListItem } from "@chakra-ui/react";

const Links = () => {
  return (
    <Box my={5}>
      <Heading as="h2" size="lg" mb={3}>
        Links
      </Heading>
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
    </Box>
  );
};

export default Links;
