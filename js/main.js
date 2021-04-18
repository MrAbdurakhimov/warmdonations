const counter = document.querySelectorAll(".counter");
let speed = 200;

counter.forEach((counter) => {
  const updateCount = () => {
    const target = counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = Math.float(target);
    }
  };
  updateCount();
});
