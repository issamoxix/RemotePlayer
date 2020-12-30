import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/app/appSlice";
export default function Search(query) {
  const dispatch = useDispatch();
  axios
    .get(
      `/search/tracks?q=${query}&sc_a_id=89c71e7048d8b7dbe860af3b3c34ba4d560b4bad&variant_ids=2077&facet=genre&user_id=23121-167625-690189-950869&client_id=wemqLM56wkD5McvdTn2KaZmQgQ0FC8Jg&limit=20&offset=0&linked_partitioning=1&app_version=1608213261&app_locale=en`
    )
    .then((doc) => {
      dispatch(
        setSearch({
          Search: doc.collection,
        })
      );
    });
}
