import { useRecoilState } from "recoil";
import { api } from "../../apis/Api";
import { BlockState } from "../../state/create/CreateState";

export const SelectTheBlock = (id: number) => {
  const [blockInfo, SetBlockInfo] = useRecoilState(BlockState);
  api
    .post(`/block/${id}`, {})
    .then((res) => {
      SetBlockInfo((prevBlockState) => ({
        ...prevBlockState,
        blockInfo: {
          ...prevBlockState.blockInfo,
          name: res.data.data.blockName,
        },
      }));
      // console.log("res==================", res.data.data.blockName);
      // console.log("blockInfo(td)==================", blockInfo);
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const GoBlock = (id: number) => {
//   const [blockInfo, setBlockInfo] = useRecoilState(BlockState);
//   const navigate = useNavigate();
//   const GotoTheBlock = (id: number) => {
//     api
//       .post(`/block/${id}`, {})
//       .then((res) => {
//         setBlockInfo((prevBlockState) => ({
//           ...prevBlockState,
//           blockInfo: {
//             ...prevBlockState.blockInfo,
//             name: res.data.data.blockName,
//           },
//         }));
//         navigate("/Modify");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log("blockInfo==================", blockInfo);
//   };
//   return { GotoTheBlock };
// };
