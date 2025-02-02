const table_store = [
    {
        id: 1,
        ownerId: 1,
        name: "Main Store",
        // location_id: 1,
        contactNumber: "01712345678",
        email: "",
        location: {
            type: "Point", // "Point" || "LineString" || "Polygon"
            coordinates: [89.408, 24.897],
            long: 89.408,
            lati: 24.897,
        },
        address: "Bikal Bazar, Sherpur, Bogura, Rajshahi",
        description: "Main Store",
        imageUrl: "",
        rating: 4.5,
        isAvailable: true, // true || false
        verified: true, // true || false
        schedules: [
            {
                weekendOff: 'FRI', // "SAT" || "SUB" || "MON" || "TUE" || "WED" || "THU" || "FRI" 
                type: "delivering", // "delivering" || "pickup"
                opening_time: "11:00 AM", // Valid time format
                closing_time: "22:30 PM" // Valid time format
            }
        ],
        tags: ['grocery', 'vegetables', 'fruits', 'meat', 'fish', 'organic', 'fresh', 'healthy', 'tasty', 'fast food', 'snacks', 'fried food', 'fry', 'crispy', 'medicine'],
        discount: [], // percentage
        storeNote: "All product prices are set by this restaurant",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

const discount = [
    {
        id: "DISC001", // Unique identifier for the discount
        type: "percentage", // Type of discount: "percentage", "fixed", "delivery", "buy_one_get_one", etc.
        value: 10, // Value of the discount: e.g., 10 for 10%, 5 for $5 off, or 0 for free delivery
        code: "SAVE10", // Coupon code (optional, if applicable)
        description: "Get 10% off on your first order", // Description of the discount
        minOrderAmount: 20,
        maxDiscountAmount: 5,
        userGroup: [1, 3, 4, 80], // Ids of users
        visibleToAll: false, // Whether the discount is visible to all users   
        isActive: true, // Whether the discount is currently active
        timeRestrictions: { // Time-based restrictions (optional)
            startTime: "10:00", // Start time of the discount validity (e.g., "10:00")
            endTime: "14:00", // End time of the discount validity (e.g., "14:00")
            daysOfWeek: ["MON", "WED", "FRI"], // "SAT" || "SUB" || "MON" || "TUE" || "WED" || "THU" || "FRI" 
        },
        limit: 100, // Total number of times the discount can be redeemed (optional)
        autoApply: false, // Whether the discount is applied automatically without a coupon code (optional)
    }
];

const table_products = [
    {
        id: 1,
        storeId: 1,
        name: "Product 1",
        strength: '100mg',
        description: "Fresh and organic vegetables <p>Test</p>", //HTML String
        price: 100,
        category: "food", // "food" || "grocery" || "medicine" || "electronics" || "clothing" || "beauty" || "furniture" || "toys" || "books" || "sports" || "automotive" || "jewelry" || "other"
        variants: [
            {
                name: "Small Pack",
                price: 50,
                quantity: 5,
                unit: "kg", //"kg" || "g" || "l" || "ml" || "pcs",
                isPrescriptionReq: false,
                imageUrl: "",
                minOrderQuantity: 1,
                maxOrderQuantity: 20,
                discount: 10, // percentage
                tags: ["organic", "fresh", "vegetables", "fried food", "snacks", "fast food", "healthy", "tasty", "fry", "crispy"],
                wishlistCount: 10,
                isAvailable: true,
            },
        ],
        imageUrl: "https://res.cloudinary.com/dpzhgdwqw/image/upload/v1736397404/khabar-bela/product/1736397403522.png",
        isAvailable: true,
        // deliveryTime: 20,
        // isRecommended: false,

        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryOption: [
            {
                amount: 30,
                disabled: true, // true || false
                free_delivery_above: 999,
                type: 'regular', // 'priority' || 'regular'
                info: 'Free Delivery Above 999 Taka Order',
                time: {
                    expected_time: "2025-01-02T20:00:00Z",// Date()
                    min_minutes: 5,
                    max_minutes: 20,
                }
            },
            {
                amount: 40,
                disabled: 0, // 0 || 1
                type: 'priority',
                free_delivery_above: 1499,
                info: 'Free Delivery Above 1499 Taka Order',
                time: {
                    expected_time: "2025-01-02T20:00:00Z", // Date()
                    min_minutes: 5,
                    max_minutes: 15,
                }
            }
        ],
        reviews: [
            { userId: 101, rating: 5, comment: "Great quality!" },
        ],
        store: {
            id: 1,
            name: "Fresh Farm Grocery",
            rating: 4.7,
        }
    }
];
