import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "AblityDyno",
      logo: {
        src: "./src/assets/logo.png",
      },
      favicon: "./src/assets/logo.png",
      sidebar: [
        {
          label: "ようこそ",
          link: "/",
        },
        {
          label: "Rales",
          items: [
            {
              label: "開始する",
              items: [
                {
                  label: "開始する",
                  link: "/rales/getting-started/getting-started",
                },
                {
                  label: "次のステップ",
                  link: "/rales/getting-started/next-step",
                },
                {
                  label: "Ralesに移行する",
                  link: "/rales/getting-started/migration",
                },
              ],
            },
            {
              label: "サーバーの管理",
              items: [
                {
                  label: "詳細なセットアップ",
                  link: "/rales/advanced-setup",
                },
                {
                  label: "アップデート",
                  link: "/rales/updating",
                },
              ],
            },
          ],
        },
        {
          label: "AblityDyno",
          items: [
            {
              label: "ようこそ！",
              link: "/ablitydyno/",
            },
            {
              label: "開始する",
              link: "/ablitydyno/getting-started",
            },
          ],
        },
      ],
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
    }),
  ],
});
