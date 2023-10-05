"use client";

import { useParams } from "next/navigation";

const ProductDynamicPage = () => {
  const params = useParams()
  const paramsData = decodeURIComponent(params?.name)
  const name = paramsData.replace(/ /g, "-");

  return (
    <>
      <div>{name}</div>;
    </>
  );
};

export default ProductDynamicPage;