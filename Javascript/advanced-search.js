const categories = [
  ["all", "Tất cả loại bánh"],
  ["fruit", "Trái cây"],
  ["chocolate", "Chocolate"],
  ["mousse", "Mousse & bánh lạnh"],
  ["birthday", "Bánh sinh nhật"],
];

const sortOptions = [
  ["relevance", "Liên quan nhất"],
  ["price-asc", "Giá thấp đến cao"],
  ["price-desc", "Giá cao đến thấp"],
];

function makeField(labelText, control) {
  const label = document.createElement("label");
  label.className = "advanced-search__field";
  const caption = document.createElement("span");
  caption.textContent = labelText;
  label.append(caption, control);
  return label;
}

function makeSelect(options) {
  const select = document.createElement("select");
  select.className = "advanced-search__control";
  for (const [value, text] of options) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.append(option);
  }
  return select;
}

function addAdvancedSearchButton(form) {
  if (form.querySelector(".advanced-search")) return;

  const details = document.createElement("details");
  details.className = "advanced-search";

  const summary = document.createElement("summary");
  summary.setAttribute("aria-label", "Mở tìm kiếm nâng cao");
  summary.title = "Tìm kiếm nâng cao";

  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("width", "18");
  icon.setAttribute("height", "18");
  icon.setAttribute("fill", "none");
  icon.setAttribute("stroke", "currentColor");
  icon.setAttribute("stroke-width", "1.8");
  icon.setAttribute("stroke-linecap", "round");
  icon.setAttribute("aria-hidden", "true");
  for (const [y, cx] of [[5, 8], [12, 16], [19, 10]]) {
    const line = document.createElementNS(icon.namespaceURI, "line");
    line.setAttribute("x1", "3");
    line.setAttribute("x2", "21");
    line.setAttribute("y1", String(y));
    line.setAttribute("y2", String(y));
    const knob = document.createElementNS(icon.namespaceURI, "circle");
    knob.setAttribute("cx", String(cx));
    knob.setAttribute("cy", String(y));
    knob.setAttribute("r", "2");
    icon.append(line, knob);
  }
  summary.append(icon);

  const panel = document.createElement("div");
  panel.className = "advanced-search__panel";
  const heading = document.createElement("strong");
  heading.className = "advanced-search__heading";
  heading.textContent = "Tìm kiếm nâng cao";
  panel.append(heading, makeField("Loại bánh", makeSelect(categories)));

  const priceFields = document.createElement("div");
  priceFields.className = "advanced-search__price-fields";
  const priceInputs = [];
  for (const [labelText, placeholder] of [["Giá từ", "0"], ["Đến", "Không giới hạn"]]) {
    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.step = "10000";
    input.placeholder = placeholder;
    input.className = "advanced-search__control";
    priceInputs.push(input);
    priceFields.append(makeField(labelText, input));
  }

  const rangeSection = document.createElement("div");
  rangeSection.className = "advanced-search__range-section";
  const rangeLabels = document.createElement("div");
  rangeLabels.className = "advanced-search__range-values";
  const minOutput = document.createElement("output");
  const maxOutput = document.createElement("output");
  rangeLabels.append(minOutput, maxOutput);

  const rangeRail = document.createElement("div");
  rangeRail.className = "advanced-search__range-rail";
  const minRange = document.createElement("input");
  minRange.type = "range";
  minRange.min = "0";
  minRange.max = "500000";
  minRange.step = "10000";
  minRange.value = "0";
  minRange.setAttribute("aria-label", "Giá tối thiểu");
  minRange.className = "advanced-search__range-input advanced-search__range-input--min";
  const maxRange = document.createElement("input");
  maxRange.type = "range";
  maxRange.min = "0";
  maxRange.max = "500000";
  maxRange.step = "10000";
  maxRange.value = "500000";
  maxRange.setAttribute("aria-label", "Giá tối đa");
  maxRange.className = "advanced-search__range-input advanced-search__range-input--max";
  const minMark = document.createElement("span");
  minMark.className = "advanced-search__range-mark advanced-search__range-mark--min";
  minMark.setAttribute("aria-hidden", "true");
  const maxMark = document.createElement("span");
  maxMark.className = "advanced-search__range-mark advanced-search__range-mark--max";
  maxMark.setAttribute("aria-hidden", "true");
  rangeRail.append(minRange, maxRange, minMark, maxMark);
  rangeSection.append(rangeLabels, rangeRail);

  const minPriceInput = priceInputs[0];
  const maxPriceInput = priceInputs[1];
  const formatPrice = (value) => `${new Intl.NumberFormat("vi-VN").format(value)}₫`;
  const updateRange = (changed) => {
    let min = Number(minRange.value);
    let max = Number(maxRange.value);
    if (min > max) {
      if (changed === "min") minRange.value = String(max);
      else maxRange.value = String(min);
      min = Number(minRange.value);
      max = Number(maxRange.value);
    }
    minPriceInput.value = min === 0 ? "" : String(min);
    maxPriceInput.value = max === 500000 ? "" : String(max);
    minOutput.textContent = formatPrice(min);
    maxOutput.textContent = formatPrice(max);
    rangeRail.style.setProperty("--range-start", `${(min / 500000) * 100}%`);
    rangeRail.style.setProperty("--range-end", `${(max / 500000) * 100}%`);
  };

  minRange.addEventListener("input", () => updateRange("min"));
  maxRange.addEventListener("input", () => updateRange("max"));
  minPriceInput.addEventListener("input", () => {
    minRange.value = String(Math.min(500000, Math.max(0, Number(minPriceInput.value) || 0)));
    updateRange("min");
  });
  maxPriceInput.addEventListener("input", () => {
    maxRange.value = String(Math.min(500000, Math.max(0, Number(maxPriceInput.value) || 500000)));
    updateRange("max");
  });
  updateRange("initial");

  panel.append(priceFields, rangeSection, makeField("Sắp xếp", makeSelect(sortOptions)));
  details.append(summary, panel);

  const submitButton = form.querySelector('button[type="submit"]');
  form.insertBefore(details, submitButton || null);
}

document.querySelectorAll(".header-search__form").forEach(addAdvancedSearchButton);