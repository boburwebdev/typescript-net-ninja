import { HasFormatter } from "../interfaces/HasFormatter.js";

export default class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, position: 'start' | 'end') {
    const li = document.createElement("li");
    
    const title = document.createElement("h4");
    title.innerText = heading;
    li.append(title);
    
    const para = document.createElement("p");
    para.innerText = item.format();
    li.append(para);

    if (position === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}