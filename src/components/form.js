import BoltIcon from "../images/bolt.svg";
import { Logo } from "./logo";

export function Form() {
  const form = document.createElement("form");
  form.classList.add("form");

  const logo = Logo();

  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("type", "text");
  input.id = "locale-input";
  input.setAttribute("placeholder", "Enter city");
  input.autocomplete = "off";

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("submit-btn");

  const img = document.createElement("img");
  img.src = BoltIcon;
  submitBtn.appendChild(img);

  form.append(input);
  form.append(submitBtn);

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  formContainer.appendChild(logo);
  formContainer.appendChild(form);

  return formContainer;
}
