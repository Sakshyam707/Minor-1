
// Get product id from query string
const url = new URLSearchParams(window.location.search);
const productId = url.get('id');

fetch('shop.json')
  .then(response => response.json())
  .then(products => {
    // Find product by id (assume id is index+1 for demo, or add id field in shop.json)
    let product;
    if (productId) {
      // If shop.json has id field, use: products.find(item => item.id === productId)
      const idx = parseInt(productId, 10) - 1;
      product = products[idx];
    }
    if (product) {
      document.getElementById('product-title').textContent = product.name;
      document.getElementById('product-description').textContent = product.description;
      document.getElementById('product-price').textContent = "Price: " + product.price;
      const image = document.getElementById('product-image');
      image.src = product.image;
      image.alt = product.name;
      image.style.display = 'block';
      const buyButton = document.getElementById('buy-button');
      buyButton.href = "login.html?id=" + productId;
      buyButton.style.display = 'inline-block';
    } else {
      document.getElementById('product-title').textContent = "Product Not Found";
      document.getElementById('product-description').textContent = "Sorry, we couldn't find that product.";
    }
  })
  .catch(error => {
    console.error("Error loading product data:", error);
    document.getElementById('product-title').textContent = "Error";
    document.getElementById('product-description').textContent = "There was a problem loading the product.";
  });
