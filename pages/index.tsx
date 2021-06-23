import { InferGetStaticPropsType } from "next";
import {
  continuewatch,
  showrecommnendedforyou,
  bestinsports,
} from "../Components/Media/Media";
import Moviess from "../Components/Moviess/Movies";

const AppHome = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { ContinuewatchList, showrecommnendedforyouList, bestinsportsList } =
    props;

  const pageLists = [
    { name: "continuewatch", dataList: ContinuewatchList },
    { name: "showrecommnendedforyou", dataList: showrecommnendedforyouList },
    { name: "bestinsports", dataList: bestinsportsList },
  ];
  return <Moviess />;
};

export const getStaticProps = async () => {
  const ContinuewatchList = await continuewatch();
  const showrecommnendedforyouList = await showrecommnendedforyou();
  const bestinsportsList = await bestinsports();

  return {
    props: {
      ContinuewatchList,
      showrecommnendedforyouList,
      bestinsportsList,
    },
  };
};

export default AppHome;
