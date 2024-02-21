import { dice, values } from "./schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import * as schema from "./schema";
import { Die } from "../models/Die";

const expoDb = openDatabaseSync("dg.db");
const db = drizzle(expoDb, { schema });

const main = async () => {
  console.log("Clearing Database...")
  await db.delete(values);
  await db.delete(dice);

  console.log("Planting dice! 🌱")
  new Die("Area 51", "d4", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/a51_d4_vdoddq.jpg")
  new Die("Rainbow", "d4", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/rainbow_d4_dobpce.jpg")
  new Die("Shimmering Ocean", "d4", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/ocean_d4_yiastz.jpg")
  new Die("Turquoise Swirl", "d6", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/turquoise_d6_aaq85g.jpg")
  new Die("Lavender Cream", "d6", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/lavender_d6_e8tgj4.jpg")
  new Die("Glittering Embers", "d6", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/glittering_embers_d6_oig2w9.jpg")
  new Die("Glittering Embers", "d8", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/glittering_embers_d8_hpu7at.jpg")
  new Die("Masterpiece", "d8", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/masterpiece_d8_i4tumv.jpg")
  new Die("Wildberry Speckled", "d8", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/wildberry_speckled_d8_u6mbum.jpg")
  new Die("Forest Speckled", "d10", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/forest_speckled_d10_edr6wu.jpg")
  new Die("Blue", "d10", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/blue_d10_lugteb.jpg")
  new Die("Forest Leaves", "d10", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/forest_leaves_d10_qhkbvf.jpg")
  new Die("Opaque Orange", "d%", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/opaque_orange_dp_ipmqlj.jpg")
  new Die("Violet Galaxy", "d%", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/violet_galaxy_dp_qf4qpr.jpg")
  new Die("Gears", "d%", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/gears_dp_e4jdwi.jpg")
  new Die("Rainbow", "d12", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/rainbow_d12_mcod1v.jpg")
  new Die("Watermelon Slice", "d12", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/watermelon_d12_okzmm0.jpg")
  new Die("Opaque Orange", "d12", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/opaque_orange_d12_rmcyqq.jpg")
  new Die("Forest Leaves", "d20", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842374/forest_leaves_d20_ghunl2.jpg")
  new Die("Violet Galaxy", "d20", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842376/violet_galaxy_d20_y9wapr.jpg")
  new Die("Shimmering Ocean", "d20", "https://res.cloudinary.com/dvgfrkxl7/image/upload/v1655842375/ocean_d20_kgfzzs.jpg")
  new Die("Monopoly Dice", "2d6", "https://sphero-media-sphero-prod.s3.amazonaws.com/cwist/gallery/b5/99/851f158e-b599-4314-8792-5a4ddfe85026_1024_768.jpg?v=1653943573")

}