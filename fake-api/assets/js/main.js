document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const apiUrl = "https://fakestoreapi.com/products";

    async function fetchProducts() {
        const response = await fetch(`${apiUrl}?limit=12`);
        const products = await response.json();
        displayProducts(products);
    } 

    function displayProducts(products) {
        productList.innerHTML = "";

        products.forEach((product) => {
            const produtCard = document.createElement("div");
            produtCard.classList.add("product-card");
            produtCard.setAttribute("data-id", product.id);

            produtCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <div class="details">
                 <h2>${product.title}</h2>
                 <p>${product.description}</p>
                 <span>${product.category}</span>
                 <p class="price">$${product.price}</p>
            </div>
            <button class="edit-btn">&#9998;</button>
            <button class="delete-btn">&times;</button>
            `;

            produtCard.querySelector('.edit-btn').addEventListener('click', () => {
                console.log('Editando o produto', product.id);
            });
            produtCard.querySelector('.delete-btn').addEventListener('click', () => {
                deleteProduct(product.id, produtCard);
            });

            productList.appendChild(produtCard);
        });
    }

    async function deleteProduct(productId, productCard) {
        const response = await fetch(`${apiUrl}/${productId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            productCard.remove();
        }
    }

    fetchProducts();
});

