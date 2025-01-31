const table_store = [
    {
        id: 1,
        userId: 1,
        name: "Main Store",
        description: "Main Store",
        // location_id: 1,
        address: "Bikal Bazar, Sherpur, Bogura, Rajshahi",
        imageUrl: "",
        rating: 4.5,
        isAvailable: true, // true || false
        schedules: [
            {
                id: 0,
                weekend: 'FRIDAY', // "SATURDAY" || "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" 
                type: "delivering", // "delivering" || "pickup"
                opening_time: "11:00 AM", // Valid time format
                closing_time: "22:30 PM" // Valid time format
            }
        ],
        discounts: [
            {
                // "banner_title": "",
                // "bogo_product_blocks": [],
                // "bogo_discount_unit": "",
                free_delivery_above_regular: 999,
                free_delivery_above_priority: 1499,
                "closing_time": "2026-01-12T16:26:00.000Z",
                "condition_type": "single" || "multiple" || "all",
                // "condition_object": 0,
                "condition_ids": [1] || [1, 2, 3] || [1, 2],
                "discount_amount": 0,
                "discount_type": "free-delivery",
                "conditions": null,
                "daily_limit": 0,
                "description": "",
                "discount_text": "",
                "end_date": "2026-01-12",
                "file_name": "",
                "id": 0,
                "maximum_discount_amount": 0,
                "minimum_order_value": 0,
                "name": "",
                "opening_time": "16:26",
                "platform_ratio": 0,
                "promotional_limit": 0,
                "start_date": "2025-01-12",
                "vendor_id": 0,
                "additional_info": {
                    "calculation": {
                        "baseOn": null
                    },
                    "high_value_action": "ACQUISITION",
                    "high_value_action_label": "NEXTGEN_HVA_ACQUISITION_FD"
                }
            }
        ],
        // storeNote: "All product prices are set by this restaurant", clientNote 
        createdAt: new Date(),
        updatedAt: new Date(),
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
        category: "food",// "food" || "grocery" || "medicine" || "other"
        variant: [
            {
                name: "Small Pack",
                price: 50,
                quantity: 5,
                unit: "kg", //"kg" || "g" || "l" || "ml" || "pcs",
                isPrescriptionReq: false,
                imageUrl: "",
            },
        ],
        imageUrl: "https://res.cloudinary.com/dpzhgdwqw/image/upload/v1736397404/khabar-bela/product/1736397403522.png",
        rating: 4.5,
        isAvailable: true,
        deliveryTime: 20,
        // isRecommended: false,
        discount: 10, // percentage
        tags: ["organic", "fresh", "vegetables", "fried food", "snacks", "fast food", "healthy", "tasty", "fry", "crispy"],
        minOrderQuantity: 1,
        maxOrderQuantity: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        expiryDate: "2025-01-15",
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
        favoritesCount: 35,
        reviews: [
            { userId: 101, rating: 5, comment: "Great quality!" },
        ],
        vendor: {
            id: 1,
            name: "Fresh Farm Grocery",
            rating: 4.7,
        }
    }
];
