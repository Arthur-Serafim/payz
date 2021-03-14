function handleLoadPerks() {
  const perksContainer = document.querySelector(".header-perks-container");

  const descriptionContent = [
    { image: "/assets/perks-1.png", label: "Zero Transaction Fees" },
    { image: "/assets/perks-2.png", label: "Bitcoin Rewards" },
    { image: "/assets/perks-3.png", label: "VISA and MastercardPayments" },
    { image: "/assets/perks-4.png", label: "Global Payments" },
    { image: "/assets/perks-5.png", label: "Pay with Stablecoins" },
  ];

  descriptionContent.forEach((item) => {
    const container = document.createElement("div");
    container.className = "header-perks-item";

    const image = document.createElement("img");
    image.src = item.image;

    const description = document.createElement("p");
    description.innerText = item.label;
    description.className = "header-perks-label";

    container.appendChild(image);
    container.appendChild(description);

    perksContainer.appendChild(container);
  });
}

window.onload = handleLoadPerks;
