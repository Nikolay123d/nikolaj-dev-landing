(function () {
  const CART_KEY = "zevo_demo_cart";
  const WISH_KEY = "zevo_demo_wishlist";
  const ORDER_KEY = "zevo_demo_orders";

  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
      return fallback;
    }
  }

  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getCart() {
    return read(CART_KEY, []);
  }

  function saveCart(cart) {
    write(CART_KEY, cart);
  }

  function add(productId, qty = 1) {
    const cart = getCart();
    const item = cart.find((entry) => Number(entry.id) === Number(productId));
    if (item) item.qty += qty;
    else cart.push({ id: Number(productId), qty });
    saveCart(cart);
    return cart;
  }

  function setQty(productId, qty) {
    const cart = getCart()
      .map((entry) => Number(entry.id) === Number(productId) ? { ...entry, qty: Math.max(1, Number(qty || 1)) } : entry)
      .filter((entry) => entry.qty > 0);
    saveCart(cart);
    return cart;
  }

  function remove(productId) {
    const cart = getCart().filter((entry) => Number(entry.id) !== Number(productId));
    saveCart(cart);
    return cart;
  }

  function clear() {
    saveCart([]);
  }

  function getWishlist() {
    return read(WISH_KEY, []);
  }

  function saveWishlist(wishlist) {
    write(WISH_KEY, wishlist.map(Number));
  }

  function toggleWishlist(productId) {
    const id = Number(productId);
    const wishlist = getWishlist();
    const next = wishlist.includes(id) ? wishlist.filter((entry) => entry !== id) : [...wishlist, id];
    saveWishlist(next);
    return next;
  }

  function isWish(productId) {
    return getWishlist().includes(Number(productId));
  }

  function isInCart(productId) {
    return getCart().some((entry) => Number(entry.id) === Number(productId));
  }

  function lineItems(products) {
    return getCart()
      .map((entry) => {
        const product = products.find((item) => Number(item.id) === Number(entry.id));
        return product ? { ...entry, product, lineTotal: Number(product.price || 0) * Number(entry.qty || 1) } : null;
      })
      .filter(Boolean);
  }

  function total(products) {
    return lineItems(products).reduce((sum, entry) => sum + entry.lineTotal, 0);
  }

  function counts() {
    return {
      cart: getCart().reduce((sum, entry) => sum + Number(entry.qty || 1), 0),
      wishlist: getWishlist().length
    };
  }

  function getOrders() {
    return read(ORDER_KEY, []);
  }

  function saveOrders(orders) {
    write(ORDER_KEY, orders);
  }

  function addOrder(order) {
    const orders = getOrders();
    const next = {
      ...order,
      id: order.id || `ZEVO-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      status: "new"
    };
    orders.unshift(next);
    saveOrders(orders);
    return next;
  }

  function markOrder(orderId, status = "processed") {
    const orders = getOrders().map((order) => order.id === orderId ? { ...order, status } : order);
    saveOrders(orders);
    return orders;
  }

  window.ZevoCart = {
    getCart,
    saveCart,
    add,
    setQty,
    remove,
    clear,
    getWishlist,
    saveWishlist,
    toggleWishlist,
    isWish,
    isInCart,
    lineItems,
    total,
    counts,
    getOrders,
    saveOrders,
    addOrder,
    markOrder
  };
})();
