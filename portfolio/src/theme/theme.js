import {
  createSystem,
  defaultConfig,
  mergeConfigs,
  defineConfig,
} from "@chakra-ui/react";

const brand = {
  50: "#e6f6ff",
  100: "#bae3ff",
  200: "#7cc4fa",
  300: "#47a3f3",
  400: "#2186eb",
  500: "#2563EB",
  600: "#0552b5",
  700: "#03449e",
  800: "#01337d",
  900: "#002159",
};

const overrideConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand,
      },
      fonts: {
        heading: "Inter, sans-serif",
        body: "Inter, sans-serif",
      },
    },
    globalCss: {
      body: {
        bg: "white",
        color: "gray.800",
      },
    },
  },
});

const merged = mergeConfigs(defaultConfig, overrideConfig);

const theme = createSystem(merged);

export default theme;
