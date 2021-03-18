function handleLoadPerks() {
  const perksContainer = document.querySelector(".header-perks-container");

  const descriptionContent = [
    { image: "/assets/perks-1.svg", label: "Zero Transaction Fees" },
    { image: "/assets/perks-2.svg", label: "Bitcoin Rewards" },
    { image: "/assets/perks-3.svg", label: "VISA and Mastercard Payments" },
    { image: "/assets/perks-4.svg", label: "Global Payments" },
    { image: "/assets/perks-5.svg", label: "Pay with Stablecoins" },
  ];

  descriptionContent.forEach((item, index) => {
    const container = document.createElement("div");
    container.className = "header-perks-item";

    if (index === 0) {
      container.classList.add("header-hide-small");
    }

    const image = document.createElement("img");
    image.src = item.image;
    image.className = "header-perks-image";

    const description = document.createElement("p");
    description.innerText = item.label;
    description.className = "header-perks-label";

    container.appendChild(image);
    container.appendChild(description);

    perksContainer.appendChild(container);
  });
}

window.onload = handleLoadPerks;
