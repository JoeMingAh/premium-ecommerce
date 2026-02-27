import Client from 'shopify-buy';

// Initialize the client
const client = Client.buildClient({
    domain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
    storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export const shopifyClient = client;

/**
 * Creates a unique checkout URL for a specific product variants
 * @param {string} variantId - The Shopify Variant ID
 * @param {number} quantity - Quantity to add to cart
 * @returns {Promise<string>} The Shopify Checkout URL
 */
export const createCheckoutWithProduct = async (variantId, quantity = 1) => {
    try {
        // 1. Create a new checkout
        const checkout = await client.checkout.create();

        // 2. Add the item to the checkout
        const lineItemsToAdd = [
            {
                variantId: variantId,
                quantity: quantity,
            }
        ];

        // 3. Update the checkout and get the webUrl
        const updatedCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
        return updatedCheckout.webUrl;

    } catch (error) {
        console.error("Error creating checkout:", error);
        throw error;
    }
};

/**
 * Fetches the first available product from the Shopify store
 * @returns {Promise<Object|null>} The Shopify Product object or null
 */
export const fetchDefaultProduct = async () => {
    try {
        const products = await client.product.fetchAll();
        if (products && products.length > 0) {
            return products[0];
        }
        return null;
    } catch (error) {
        console.error("Error fetching product data:", error);
        return null;
    }
};
