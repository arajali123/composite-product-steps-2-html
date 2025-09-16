// Mobile Menu Js
document.addEventListener("DOMContentLoaded", function () {
  var trigger = document.querySelector(".canva-cart");
  var closeBtns = document.querySelectorAll(".close-btn");
  var toggleClass = "cart-expanded";

  if (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add(toggleClass);
    });
  }

  if (closeBtns.length > 0) {
    closeBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove(toggleClass);
      });
    });
  }
});

// Header Sticky Js
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header-sticky");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
});

// Cart Js
document.addEventListener("DOMContentLoaded", function () {
	const cartList = document.querySelector(".build-list");
	const itemTemplate = document.querySelector(
		".build-list-item-template .build-list-item"
	);
		const summaryNumber1 = document.querySelector(".select-number");
		const summaryNumber2 = document.querySelector(".select-number2");
    const summaryNumber3 = document.querySelector(".select-number3");

		let itemCount = 0;

		function updateSummary() {
			if (summaryNumber1) {
				summaryNumber1.textContent =
					itemCount === 1 ? "(1 item)" : `(${itemCount} items)`;
			}
      if (summaryNumber2) {
          summaryNumber2.textContent = `${itemCount} items`;
      }
      if (summaryNumber3) {
        summaryNumber3.textContent = `${itemCount} items`;
      }
		}

	document.querySelectorAll(".primary-btn").forEach(function (addButton) {
		addButton.addEventListener("click", function () {
			addButton.classList.add("loading");
			addButton.disabled = true;

			setTimeout(function () {
				const newItem = itemTemplate.cloneNode(true);
				cartList.appendChild(newItem);
				itemCount++;
				updateSummary();
				console.log("Item added");

				addButton.classList.remove("loading");
				addButton.disabled = false;
			}, 1000);
		});
	});

	cartList.addEventListener("click", function (e) {
		const removeButton = e.target.closest(".remove-btn");
		if (removeButton) {
			const item = removeButton.closest(".build-list-item");
			if (item) {
				item.remove();
				itemCount = Math.max(0, itemCount - 1);
				updateSummary();
				console.log("Item removed");
			}
		}
	});
});

// Tabs JS
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tabs-build-product-main-wrapper .tab-button");
  const tabBodies = document.querySelectorAll(".tabs-build-product-main-wrapper .tabs-build-main-wrap");

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      tabLinks.forEach((link) => link.classList.remove("active"));
      tabBodies.forEach((body) => body.classList.remove("active"));

      this.classList.add("active");

      const targetId = this.getAttribute("href");
      const targetBody = document.querySelector(targetId);

      if (targetBody) {
        targetBody.classList.add("active");
      }
    });
  });
});



















