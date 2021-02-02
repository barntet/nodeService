export async function refreshShopList() {
  const res = await fetch("/api/shop");
  const { data: shopList } = await res.json;
  const htmlItems = shopList.map(
    ({ id, name }) => `
    <li data-shop-id=${id}>
        <div data-type='text'>${name}</div>
        <input type='text' placeholder='输入新店铺名称' />
        <a href="#" data-type="modify">确认修改</a>
        <a href="#" data-type="remove">删除店铺</a>
    </li>
    `
  );
}
