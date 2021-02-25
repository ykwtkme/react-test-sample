import React from "react";
import GenericTemplate from "../components/templates/genericTemplate";
import ProductList from "../components/organisms/productList";

const ProductPage: React.FC = () => {
  return (
    <GenericTemplate title="商品ページ">
      <ProductList
        items={[
          {
            name:"チョコレート",
            category:"お菓子",
            weight:100,
            price:120
          },
          {
            name:"ケーキ",
            category:"お菓子",
            weight:400,
            price:480
          },
          {
            name:"りんご",
            category:"フルーツ",
            weight:500,
            price:360
          },
          {
            name:"バナナ",
            category:"フルーツ",
            weight:200,
            price:300
          },
          {
            name:"みかん",
            category:"フルーツ",
            weight:250,
            price:180
          }
        ]}
      />
    </GenericTemplate>
  );
};

export default ProductPage;
