// Utility function to calculate the total cost of items in the cart
export const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      // Extract the price and quantity from each item
      const { price, quantity } = item;
      // Convert the price to a number and multiply it by the quantity
      const itemTotal = Number(price.mrpPrice.doubleValue) * quantity;
      // Add the item total to the overall total
      total += itemTotal;
    });
    return total;
  };
  
  // Utility function to calculate the total discount of items in the cart
  export const calculateDiscount = (cartItems) => {
    let totalDiscount = 0;
    cartItems.forEach((item) => {
      // Extract the price, discount percentage, and quantity from each item
      const { price,quantity } = item;
      // Calculate the discount amount for the item
      const discountAmount = (Number(price.mrpPrice.doubleValue) - Number(price.sellingPrice.doubleValue)) * quantity;
      // Add the discount amount to the overall total discount
      totalDiscount += discountAmount;
    });
    return totalDiscount;
  };
  