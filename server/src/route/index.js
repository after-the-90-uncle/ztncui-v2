const router = require("koa-router")();
const fs = require("fs");
const path = require("path");
import upload from "./upload";
router.use("/upload", upload.routes(), upload.allowedMethods());

// router.get("/upload", async (ctx, next) => {
//   await ctx.render("upload");
// });

router.get("/", async (ctx, next) => {
  await ctx.render("index");
});

export default router;
