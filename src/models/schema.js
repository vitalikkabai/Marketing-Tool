export const schema = {
    "models": {
        "Business": {
            "name": "Business",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "ownerUID": {
                    "name": "ownerUID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "companyName": {
                    "name": "companyName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "businessNumber": {
                    "name": "businessNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "haveExperienceSelling": {
                    "name": "haveExperienceSelling",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "storeURLs": {
                    "name": "storeURLs",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "haveWebsite": {
                    "name": "haveWebsite",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "websiteURLs": {
                    "name": "websiteURLs",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "ownerName": {
                    "name": "ownerName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ownerEmailAddress": {
                    "name": "ownerEmailAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "businessType": {
                    "name": "businessType",
                    "isArray": false,
                    "type": {
                        "enum": "BusinessType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Businesses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOwnerId",
                        "fields": [
                            "ownerUID"
                        ],
                        "queryField": "byOwnerUID"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDate",
                        "fields": [
                            "ownerUID",
                            "createdAt"
                        ],
                        "queryField": "byOwnerUidDate"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "BusinessType": {
            "name": "BusinessType",
            "values": [
                "MANUFACTURER",
                "TRADINGCOMPANY",
                "MANUFACTURERANDTRADINGCOMPANY"
            ]
        }
    },
    "nonModels": {},
    "version": "f76337e418dcf466bd2ea540e96efd23"
};