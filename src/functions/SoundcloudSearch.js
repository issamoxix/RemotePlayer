import axios from "axios";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/app/appSlice";
export default function Search(query) {
  const dispatch = useDispatch();
  const url = `/api/sdc/${query}`;
  axios
    .get(url, { headers: { "Content-Type": "application/json" } })
    .then((doc) => {
      dispatch(
        setSearch({
          Search: doc.collection,
        })
      );
    });
  fetch(url).then((res) => console.log(res.json()));
}
