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

function formatPriceInput(input) {
  const caret = input.selectionStart ?? input.value.length;
  const digitsBeforeCaret = (input.value.slice(0, caret).match(/\d/g) || []).length;
  const digits = input.value.replace(/\D/g, "");
  const formatted = digits
    ? new Intl.NumberFormat("vi-VN").format(BigInt(digits))
    : "";
  input.value = formatted;

  let nextCaret = 0;
  let countedDigits = 0;
  while (nextCaret < formatted.length && countedDigits < digitsBeforeCaret) {
    if (/\d/.test(formatted[nextCaret])) countedDigits += 1;
    nextCaret += 1;
  }
  input.setSelectionRange(nextCaret, nextCaret);
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
  for (const [labelText, placeholder] of [["Giá từ", "0"], ["Đến", "Không giới hạn"]]) {
    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "numeric";
    input.autocomplete = "off";
    input.placeholder = placeholder;
    input.className = "advanced-search__control";
    input.setAttribute("aria-label", labelText);
    input.addEventListener("input", () => formatPriceInput(input));
    const field = makeField(labelText, input);
    field.classList.add("advanced-search__price-field");
    priceFields.append(field);
  }
  panel.append(priceFields, makeField("Sắp xếp", makeSelect(sortOptions)));
  details.append(summary, panel);

  const submitButton = form.querySelector('button[type="submit"]');
  form.insertBefore(details, submitButton || null);
}

document.querySelectorAll(".header-search__form").forEach(addAdvancedSearchButton);