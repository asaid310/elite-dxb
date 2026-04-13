type ProductMeta = {
  title?: string | null;
  brand?: string | null;
  description?: string | null;
};

type ProductOption = {
  name?: string | null;
  value?: string | null;
};

const PERFUME_KEYWORDS = [
  "5ml",
  "5 ml",
  "perfume",
  "parfum",
  "edp",
  "edt",
  "fragrance",
  "cologne",
  "hacivat",
  "tonka",
  "aventus",
  "eros",
  "tuxedo",
  "born in roma",
  "stronger with you",
  "le male",
  "le beau",
  "y edp",
  "amore caffe",
  "french rivera",
  "arabians",
  "oud",
];

const PERFUME_BRANDS = [
  "nishane",
  "mancera",
  "creed",
  "jean paul gaultier",
  "arabian",
];

const GENERIC_SIZE_VALUES = new Set([
  "xxs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "xxxl",
  "one size",
  "default title",
  "default",
  "title",
]);

export const isPerfumeProduct = (input: ProductMeta | string) => {
  const text = typeof input === "string"
    ? input
    : [input.title, input.brand, input.description].filter(Boolean).join(" ");

  const normalized = text.toLowerCase();

  return (
    PERFUME_BRANDS.some((brand) => normalized.includes(brand)) ||
    PERFUME_KEYWORDS.some((keyword) => normalized.includes(keyword))
  );
};

export const filterDisplayOptions = (
  options: ProductOption[] = [],
  hideSizeOptions = false,
) => {
  return options.filter((option) => {
    const name = option.name?.trim().toLowerCase() ?? "";
    const value = option.value?.trim().toLowerCase() ?? "";

    if (!value || value === "default title" || name === "title") {
      return false;
    }

    if (!hideSizeOptions) {
      return true;
    }

    if (name === "size" || GENERIC_SIZE_VALUES.has(value)) {
      return false;
    }

    return true;
  });
};
