export const defaultCategories = [
    // Income Categories
    {
      id: "Salary",
      name: "Salary",
      type: "INCOME",
      color: "#22c55e", // green-500
      icon: "Wallet",
    },
    {
      id: "Freelance",
      name: "Freelance",
      type: "INCOME",
      color: "#06b6d4", // cyan-500
      icon: "Laptop",
    },
    {
      id: "Investments",
      name: "Investments",
      type: "INCOME",
      color: "#6366f1", // indigo-500
      icon: "TrendingUp",
    },
    {
      id: "Business",
      name: "Business",
      type: "INCOME",
      color: "#ec4899", // pink-500
      icon: "Building",
    },
    {
      id: "Rental",
      name: "Rental",
      type: "INCOME",
      color: "#f59e0b", // amber-500
      icon: "Home",
    },
    {
      id: "Other-Income",
      name: "Other Income",
      type: "INCOME",
      color: "#64748b", // slate-500
      icon: "Plus",
    },
  
    // Expense Categories
    {
      id: "Housing",
      name: "Housing",
      type: "EXPENSE",
      color: "#ef4444", // red-500
      icon: "Home",
      subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
    },
    {
      id: "Transportation",
      name: "Transportation",
      type: "EXPENSE",
      color: "#f97316", // orange-500
      icon: "Car",
      subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
    },
    {
      id: "Groceries",
      name: "Groceries",
      type: "EXPENSE",
      color: "#84cc16", // lime-500
      icon: "Shopping",
    },
    {
      id: "Utilities",
      name: "Utilities",
      type: "EXPENSE",
      color: "#06b6d4", // cyan-500
      icon: "Zap",
      subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
    },
    {
      id: "Entertainment",
      name: "Entertainment",
      type: "EXPENSE",
      color: "#8b5cf6", // violet-500
      icon: "Film",
      subcategories: ["Movies", "Games", "Streaming Services"],
    },
    {
      id: "Food",
      name: "Food",
      type: "EXPENSE",
      color: "#f43f5e", // rose-500
      icon: "UtensilsCrossed",
    },
    {
      id: "Shopping",
      name: "Shopping",
      type: "EXPENSE",
      color: "#ec4899", // pink-500
      icon: "ShoppingBag",
      subcategories: ["Clothing", "Electronics", "Home Goods"],
    },
    {
      id: "Healthcare",
      name: "Healthcare",
      type: "EXPENSE",
      color: "#14b8a6", // teal-500
      icon: "HeartPulse",
      subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
    },
    {
      id: "Education",
      name: "Education",
      type: "EXPENSE",
      color: "#6366f1", // indigo-500
      icon: "GraduationCap",
      subcategories: ["Tuition", "Books", "Courses"],
    },
    {
      id: "Personal",
      name: "Personal Care",
      type: "EXPENSE",
      color: "#d946ef", // fuchsia-500
      icon: "Smile",
      subcategories: ["Haircut", "Gym", "Beauty"],
    },
    {
      id: "Travel",
      name: "Travel",
      type: "EXPENSE",
      color: "#0ea5e9", // sky-500
      icon: "Plane",
    },
    {
      id: "Insurance",
      name: "Insurance",
      type: "EXPENSE",
      color: "#64748b", // slate-500
      icon: "Shield",
      subcategories: ["Life", "Home", "Vehicle"],
    },
    {
      id: "Gifts",
      name: "Gifts & Donations",
      type: "EXPENSE",
      color: "#f472b6", // pink-400
      icon: "Gift",
    },
    {
      id: "Bills",
      name: "Bills & Fees",
      type: "EXPENSE",
      color: "#fb7185", // rose-400
      icon: "Receipt",
      subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
    },
    {
      id: "Other-Expense",
      name: "Other Expenses",
      type: "EXPENSE",
      color: "#94a3b8", // slate-400
      icon: "MoreHorizontal",
    },
  ];
  
  export const categoryColors = defaultCategories.reduce((acc, category) => {
    acc[category.id] = category.color;
    return acc;
  }, {});