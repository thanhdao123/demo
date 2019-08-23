import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import moment from "moment";

const POST_QUERY = gql`
  query {
    posts {
      title
      ts
    }
  }
`;

export default function usePostData() {
  const { data, error, loading } = useQuery(POST_QUERY);
  console.log(data.posts);
  if (error || loading) return;

  const dates = data.posts.map(post => ({
    ...post,
    ts: moment(post.ts).format("D/M/YYYY-HH:mm:ss")
  }));
  console.log(dates);
}
