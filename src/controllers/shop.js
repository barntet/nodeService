const { Router } = require("express");
const ShopService = require("../services/shop");

class ShopController {
  ShopService;

  async init() {
    this.ShopService = await ShopService();

    const router = Router();
    router.get("/", this.getAll);
    router.get("/:shopId", this.getOne);
    router.put("/:shopId", this.put);
    router.delete("/:shopId", this.delete);
    return router;
  }

  getAll = async (req, res) => {
    const { pageIndex, pageSize } = req.query;
    const shopList = await this.ShopService.find({ pageIndex, pageSize });

    res.send({ success: true, data: shopList });
  };

  getOne = async (req, res) => {
    const { shopId } = req.params;
    const shopList = await this.ShopService.find({ id: shopId });

    if (shopList.length) {
      res.send({ success: true, data: shopList[0] });
    } else {
      res.status(404).send({ success: false, data: null });
    }
  };

  put = async (req, res) => {
    const { shopId } = req.params;
    const { name } = req.query;
    const shopInfo = await this.ShopService.modify({
      id: shopId,
      values: { name },
    });

    if (shopInfo) {
      res.send({ success: true, data: shopInfo });
    } else {
      res.status(404).send({ success: false, data: null });
    }
  };

  delete = async (req, res) => {
    const { shopId } = req.params;
    const success = await this.ShopService.remove({ id: shopId });

    if (!success) {
      res.status(404);
    }
    res.send({ success });
  };
}

module.exports = async () => {
  const control = new ShopController();
  return await control.init();
};
