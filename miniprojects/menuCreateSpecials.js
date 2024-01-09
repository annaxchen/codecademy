const menu = {
    _menuItems: [],
    
    set menuItems(items) {
      if (Array.isArray(items)) {
        this._menuItems = items;
      }
    },
  
    get randomSpecial() {
      const randomIndex = Math.floor(Math.random() * this._menuItems.length);
      const specialItem = this._menuItems[randomIndex];
  
      if (specialItem && specialItem.meal && specialItem.price) {
        return `Today's Special is ${specialItem.meal} for $${specialItem.price}!`;
      } else {
        return `Meal or price was not set correctly for the special!`;
      }
    },
  };
  

  const menuItemsArray = [
    { meal: 'Spaghetti Bolognese', price: 12.99 },
    { meal: 'Grilled Chicken Salad', price: 9.99 },
    { meal: 'Margherita Pizza', price: 14.99 },
    // Add all menu items
  ];
  
  menu.menuItems = menuItemsArray;
  
  console.log(menu.randomSpecial);
