const table_store = [
    {
        id: 1,
        userId: 1,
        name: "Main Store",
        description: "Main Store",
        location_id: 1,
        address: "Bikal Bazar, Sherpur, Bogura, Rajshahi",
        imageUrl: "",
        rating: 4.5,
        isAvailable: true,
        schedules: [
            {
                id: 0,
                weekday: 1,
                opening_type: "delivering",
                opening_time: "11:00 AM",
                closing_time: "22:30 PM"
            }
        ],
        discounts: [
            {
                // "banner_title": "",
                // "bogo_product_blocks": [],
                // "bogo_discount_unit": "",
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
        description: "Fresh and organic vegetables",
        price: 100,
        category: "food" || "grocery" || "medicine" || "other",
        // "vegetables" || "fruits" || "meat" || "clothing" || "baby_food" || "electronics" || "home_appliances" || "furniture" || "books" || "toys" || "stationery" || "cosmetics" || "jewelry" || "sports" || "tools" || "automotive" || "pets" || "gardening" || "party_supplies" || "gifts"
        variant: [
            {
                name: "Small Pack",
                price: 50,
                quantity: 5,
                unit: "kg" || "g" || "l" || "ml" || "pcs",
                isPrescriptionReq: false,
                imageUrl: "",
            },
        ],
        imageUrl: "",
        rating: 4.5,
        isAvailable: true,
        deliveryTime: 20,
        isRecommended: false,
        discount: 10,
        tags: ["organic", "fresh"],
        minOrderQuantity: 1,
        maxOrderQuantity: 20,
        variant: [
            { id: 101, name: "Small Pack", price: 50, quantity: 5, unit: "kg" },
        ],
        operationType: "delivery",
        createdAt: new Date(),
        updatedAt: new Date(),
        preparationTime: "15 mins",
        nutritionInfo: { calories: 250, protein: "10g", fat: "5g", carbs: "35g" },
        allergens: ["nuts"],
        ingredients: ["flour", "sugar"],
        expiryDate: "2025-01-15",
        tax: 10,
        finalPrice: 90,
        deliveryRadius: 5,
        geoLocation: { latitude: 23.8103, longitude: 90.4125 },
        views: 120,
        favoritesCount: 35,
        reviews: [
            { userId: 101, rating: 5, comment: "Great quality!" },
        ],
        vendorName: "Fresh Farm Grocery",
        vendorRating: 4.7,
        returnPolicy: "Can be returned within 7 days if unopened.",
    },
];
